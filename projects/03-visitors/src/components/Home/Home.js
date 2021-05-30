import { createElement } from '../../lib/element.js';

const Home = ({ user, router }) => createElement('div', {
  className: 'Home',
  children: [
    createElement('h2', {
      textContent: (
        !user
          ? 'Hola anónimo'
          : `Bienvenidx ${user.displayName}`
      ),
    }),
    createElement('a', {
      href: '/foo/1',
      textContent: 'Foo',
      onclick: (e) => {
        e.preventDefault();
        router.push('/foo/1');
      },
    }),
  ],
});

export default Home;