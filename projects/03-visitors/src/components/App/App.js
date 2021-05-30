import { createAuth } from '../../lib/auth.js';
import { createElement, destroyElement } from '../../lib/element.js';
import { createRouter } from '../../lib/router.js';
import Home from '../Home/Home.js';
import ExamplePage from '../ExamplePage/ExamplePage.js';

const App = ({ firebaseApp }) => {
  const element = createElement('div', { className: 'App' });
  const { onAuthStateChanged } = createAuth(firebaseApp);

  // Creamos un router donde mapeamos rutas (strings) a componentes (funciones).
  const Router = createRouter({
    '/': Home,
    '/foo/:bar': ExamplePage,
  });

  // Declaramos una función que se ejecutará cada vez que cambie el estado de
  // autenticación. Cuando esto ocurra volveremos a ejecutar el componente
  // `Router` para re-renderizar la ruta relevante con la info de autenticación
  // actualizada.
  const update = (user) => {
    // Antes de volver a _renderizar_ la ruta, limpiamos el contenido del
    // componente `App`.
    destroyElement(element.children);
    element.appendChild(Router({ firebaseApp, user }));
  };

  // Registramos la función `update` con `onAuthStateChanged` para _escuchar_
  // eventos de autenticación. `onAuthStateChanged` retorna un valor de tipo
  // función (para cancelar la subscripción), el cual estamos asignando en
  // `element.destroy`. De esta manera, si se destruye este elemento usando
  // `destroyElement`, se cancelará también la subscripción a los eventos de
  // autenticación.
  element.destroy = onAuthStateChanged(update, (err) => {
    // Este callback de invocará en caso de que haya un error de autenticación.
    console.log('OMG', err);
  });

  return element;
};

export default App;
