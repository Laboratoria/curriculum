import { createElement } from '../../lib/element.js';

const ExamplePage = ({ router }) => createElement('div', {
  children: [
    createElement('h2', {
      textContent: `ExamplePage ${router.params.bar}`,
    }),
    createElement('a', {
      href: '/',
      textContent: 'Back to home',
      onclick: (e) => {
        e.preventDefault();
        router.push('/');
      },
    }),
  ],
});

export default ExamplePage;