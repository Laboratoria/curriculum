import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import data from '../../lib/data';
import ExercisesList from '../Part/ExercisesList';

const topicsOrder = ['javascript', 'paradigms', 'functional'];

const Topic = ({ topic, lang }) => {
  const topicSlug = lang === 'pt' ? topic.slug.slice(0, -3) : topic.slug;
  return (
    <div>
      <Typography variant="h3">{topic.title}</Typography>
      {Object.keys(topic.syllabus).sort().map((unitSlug) => {
        const unit = topic.syllabus[unitSlug];
        if (!unit.stats.exerciseCount) {
          return null;
        }
        return (
          <div key={unitSlug}>
            <Typography variant="h4">{unit.title}</Typography>
            {Object.keys(unit.parts).map((partSlug) => {
              const part = unit.parts[partSlug];
              return (
                !part.exercises
                  ? null
                  : (
                    <ExercisesList
                      key={partSlug}
                      slug={`/${lang}/topics/${topicSlug}/${unitSlug}/${partSlug}`}
                      exercises={Object.keys(part.exercises).map(exerciseKey => ({
                        slug: exerciseKey,
                        ...part.exercises[exerciseKey],
                      }))}
                    />
                  )
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

const Gym = ({ topics, track, intl, lang }) => {
  const [topicsWithExercises, setTopicsWithExercises] = useState([]);
  const topicsToFetch = topics.filter(t => (
    t.locale === intl.locale
    && t.track === 'js'
    && t.stats.exerciseCount
  ));

  const addTopic = (topic) => {
    setTopicsWithExercises(prev => prev.filter(t => t.slug !== topic.slug).concat(topic));
  };

  useEffect(() => {
    const ids = topicsToFetch.map((topic) => topic.slug);
    ids.forEach(id => data.subscribe(`topics/${id}`, addTopic));

    return () => {
      ids.forEach(id => data.unsubscribe(`topics/${id}`, addTopic));
    };
  }, []);

  // Build ordered list but taking into account topics not listed explicitly
  // in `topicsOrder` that may come from data as topis are added.
  const order = topicsWithExercises.reduce(
    (memo, { slug }) => (
      memo.includes(slug)
        ? memo
        : memo.concat(slug)
    ),
    topicsOrder,
  );

  return (
    <div>
      <Typography variant="h2"><FormattedMessage id="gym" /></Typography>
      {order.map((topicSlug) => {
        const topic = topicsWithExercises.find(t => t.slug === topicSlug);
        if (!topic) {
          return null;
        }
        return (
          <Topic key={topicSlug} topic={topic} lang={lang} />
        );
      })}
    </div>
  );
};

export default Gym;