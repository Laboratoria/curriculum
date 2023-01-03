import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AceEditor from 'react-ace';
import Breadcrumbs from '../Breadcrumbs';
import Content from '../Content';
import { slugToFilename, decodeFilenameKeys } from './util';
import createTestRunner from './test-runner';
import TestResults from './TestResults';

import 'ace-builds/webpack-resolver';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-solarized_light';

const parseState = (id) => {
  const { testResults, ...rest } = JSON.parse(window.localStorage.getItem(id) || '{}');

  return {
    ...rest,
    testResults: (
      testResults && testResults.type === 'error'
        ? new Error(testResults.message)
        : testResults
    ),
  };
};

const stringifyState = ({ version, editorValue, testResults }) => JSON.stringify({
  ts: Date.now(),
  version,
  editorValue,
  testResults: (
    testResults instanceof Error
      ? { type: 'error', message: testResults.message }
      : testResults
  ),
});

const Exercise = ({ topic }) => {
  const { slug, unit, part, exerciseid } = useParams();
  const id = `exercises/${slug}/${unit}/${part}/${exerciseid}`;
  const exercise = topic.syllabus[unit].parts[part].exercises[exerciseid];
  const files = decodeFilenameKeys(exercise.files);
  const boilerplate = files.boilerplate && files.boilerplate[slugToFilename(exerciseid)];
  const cachedState = parseState(id);
  const [editorValue, setEditorValue] = useState(cachedState.editorValue || boilerplate || '');
  const [testResults, setTestResults] = useState(cachedState.testResults);
  const runTests = createTestRunner(files.test);

  useEffect(() => {
    window.localStorage.setItem(id, stringifyState({
      editorValue,
      testResults,
      version: topic.version,
    }));
  }, [topic, id, editorValue, testResults]);

  return (
    <>
      <Breadcrumbs topic={topic} />
      <Typography variant="h1">{exercise.title}</Typography>
      <Content html={exercise.body} />
      <AceEditor
        style={{ width: '100%', marginBottom: 30 }}
        mode="javascript"
        theme="solarized_light"
        onChange={text => setEditorValue(text)}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          autoScrollEditorIntoView: true,
          maxLines: 20,
        }}
        value={editorValue}
        tabSize={2}
        fontSize={18}
      />
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={
            () => runTests(editorValue)
              .then(setTestResults)
              .catch(setTestResults)
          }
        >
          <FormattedMessage id="exercise.runTests" />
        </Button>
      </div>
      {testResults && <TestResults results={testResults} />}
    </>
  );
};

export default Exercise;