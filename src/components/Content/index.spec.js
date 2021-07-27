import { render } from '@testing-library/react';
import Content from '.';

describe('App', () => {
  beforeEach(() => {
    const addEventListener = jest.fn();
    const postMessage = jest.fn();
    const terminate = jest.fn();
    global.Worker = jest.fn().mockImplementation(() => ({
      addEventListener,
      postMessage,
      terminate,
    }));
  });

  it('should show loading when auth user is undefined', () => {
    const { container } = render(<Content html="<p>hola</p>" />);
    expect(container instanceof HTMLDivElement).toBe(true);
    expect(container.children.length).toBe(1);
    expect(container.children[0].className).toBe('Content');
    expect(container.children[0].children.length).toBe(1);
    expect(container.children[0].children[0] instanceof HTMLParagraphElement).toBe(true);
    expect(container.children[0].children[0].textContent).toBe('hola');
  });

  it('should highlight code using worker', () => {
    const { container } = render(
      <Content html="<pre><code class=language-js>true</code></pre>" />
    );
    const code = container.querySelector('code');
    expect(code.innerHTML).toBe('true');
    expect([...code.classList].includes('hljs')).toBe(true);

    const worker = global.Worker();
    expect(worker.addEventListener).toHaveBeenCalledTimes(2);
    expect(worker.postMessage).toHaveBeenCalledTimes(1);
    expect(worker.postMessage.mock.calls[0][0].code).toBe('true');
    expect(worker.postMessage.mock.calls[0][0].language).toBe('js');
    expect(worker.terminate).toHaveBeenCalledTimes(0);

    // Fake worker message event!
    worker.addEventListener.mock.calls[1][1]({ data: 'OMG' });
    expect(code.innerHTML).toBe('OMG');
    expect(worker.terminate).toHaveBeenCalledTimes(1);
  });
});
