import { createElement, destroyElement } from './element.js';

const NotFound = () => createElement('div', { textContent: 'Not found' });

//
// Create _matcher_ function that will be used to try to match the a given
// pathname to the registered routes.
//
const createMatch = (routes) => {
  const keys = Object.keys(routes);

  return (route) => {
    const routeParts = route.split('/').slice(1);

    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];

      if (key === route) {
        return routes[key];
      }

      const parts = key.split('/').slice(1);
      if (routeParts.length !== parts.length) {
        continue;
      }

      let mismatch = false;
      const params = {};
      while (parts.length) {
        const idx = routeParts.length - parts.length;
        const part = parts.shift();
        if (part.startsWith(':')) {
          Object.assign(params, { [part.slice(1)]: routeParts[idx] })
        } else if (part !== routeParts[idx]) {
          mismatch = true;
          break;
        }
      }

      if (!parts.length && !mismatch) {
        return ({ router, ...props }) => routes[key]({
          router: { ...router, params },
          ...props,
        });
      }
    }

    return NotFound;
  }
};


//
// Create a `Router` component.
//
export const createRouter = (routes = {}) => {
  const match = createMatch(routes);

  return (props) => {
    const el = createElement('div', { className: 'Router' });

    const push = (pathname) => {
      window.history.pushState({}, '', pathname);
      update();
    };

    const update = () => {
      destroyElement(el.children);
      const child = match(window.location.pathname)({
        ...props,
        router: { push, location: window.location, params: {} },
      });
      if (child) {
        el.appendChild(child);
      }
    };

    window.addEventListener('popstate', update);

    el.destroy = () => {
      window.removeEventListener('popstate', update);
    };

    update();

    return el;
  };
};