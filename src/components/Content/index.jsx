import pkg from '../../../package.json';
import 'highlight.js/styles/base16/solarized-light.css';
// import 'highlight.js/styles/base16/solarized-dark.css';
import './Content.css';

const hljsVersion = [...pkg.dependencies['highlight.js']].reduce(
  (memo, char) => (
    /[a-zA-Z0-9.-]/.test(char)
      ? `${memo}${char}`
      : memo
  ),
  '',
);

const Content = ({ html }) => {
  const applySyntaxHighlighting = (el) => {
    if (!el) {
      return;
    }
    el.querySelectorAll('pre code').forEach((block) => {
      const worker = new Worker('/workers/highlighter.js');
      worker.addEventListener('error', (ev) => {
        // console.error(ev);
        // Fail silently?
        worker.terminate();
      });
      worker.addEventListener('message', (ev) => {
        block.innerHTML = ev.data;
        worker.terminate();
      });
      block.classList.add('hljs');
      worker.postMessage({
        version: hljsVersion,
        code: block.textContent,
        language: (
          [...block.classList].find(v => /^language-/.test(v)) || ''
        ).split('-')[1],
      });
    });
  };

  return (
    <div
      className="Content"
      ref={applySyntaxHighlighting}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Content;