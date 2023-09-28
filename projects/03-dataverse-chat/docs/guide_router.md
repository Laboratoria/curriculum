# How to Code a Router

Well before we get into the code, we need to cover a couple of concepts.
First, the reason routers exist - the Single Page Applications (SPA).

## What is a Single Page App (SPA)?
A Single Page App (SPA) is a web application that loads a single HTML page (index.html)
and dynamically updates the content as the user interacts with the application.
Instead of loading separate HTML pages for each interaction or navigation, SPAs use JavaScript
to fetch and render data in the same HTML page, giving the illusion that we are navigating
to separate HTML pages, when in fact it is the same page with different content rendered (drawn).

## What is a Router?
In the context of SPAs, a router is a JavaScript component that manages the navigation within
the application. It determines which content or view to display based on the URL or user interactions.
A router helps create a sense of multiple pages or "views" within a single-page application by handling
URL changes and rendering the appropriate content.

For example, if you are on the homepage of `www.website.com` and then click a `<nav>` menu item on the page
that takes you to `www.website.com/about`, the router is in charge of responding to the change in URL,
finding the appropriate content `about`, replacing the HTML in `index.html` with the new content.

## Introducing the History API

A router in a Single Page App (SPA) works in conjunction with the HTML5 History API to achieve this navigation.
The History API allows you to access and manipulate the browser's history (its what changes as you move forward and back on your browser) and URL without triggering full page reloads.

Related links : https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API

The key players a router uses is:

pushState method - link - allows us to add a new state to the history queue of the window
popstate event - link - happens when someone pressed back on the browser, we casn listen with window.onpopstate 
back method - link - calling history.back() is like pressing back on the browser

Other methods of interest are replaceState, go, forward, back see full docs here
onhashchange ?

## Router functionalities

Here's a step by step how a basic router works with the History API:

#### Initialization and Route Definition

In your `main.js` or `index.js`, you
typically "initialize" your router and define the routes you want to handle.
You also specify a root element where the content will be rendered dynamically.

Routes are usually defined as key-value pairs, where the `key` is the route path,
and the value is the associated function that will render the view.

const routes = {
  "/": Home,
  "/about": About
}

In this example, Home and About are functions that when invoked, will render the html for the
page and return an HTML element that the Router will add to the view.

We need to tell the router that these are our routes, which can be done if we define a function in the
router to `setRoutes(routes)`.

So for this part. First we need a couple of view functions we can use in our routes - `Home()`
and `About()`. You can define these functions in `main.js` for a quick example.
Each view function at minimum
should create and return an element. We should set innerHTML to tell the elements apart when the page changes.

const Home = () => {
  const el = document.createElement("h1");
  el.innerHTML("I'm home");
  return el;
}

Ideally view functions would exist in their own file and be imported in `main.js`.

Now we need a couple more things

In a file called `router.js`:
  * define a "global" variable  called `routes`, and a "global" variable for the root element `rootEl`
  * define function called `setRoutes(routesObject)` that assigns `routes` the value passed in
  * also define a function `setRootEl(el)` that assigns `rootEl` the value passed in
To set up ("initialize") the router, in `main.js`
  * define an `appRoutes` object  with the `key`s as the paths of the url and the values as functions that will render the view
    example 
    ```
    const appRoutes = {
    "/": Home,
    "/about": About
    }
    ```
  * call `setRoutes` and pass the defined `appRoutes` object
  * call `setRootEl` with the element in your document (div#root) that will contain the html changes. its best to do this when we know the DOM is loaded, for this we can use
  window.addEventListener("DOMContentLoaded", (e) => {
    setRootEl(document.querySelector("#root"));
  });

### Initial URL Handling
 In your 'main.js' when the the user initially visits a page in your SPA, we need to tell 
the router the current URL (`window.location`). This is important in case someone navigates to a page other
than your home page (for example `www.awebsite.com/about`), we need to load the appropriate view content.

The router uses the current URL path to match one of the defined routes and invoke the associated view function.
It does this by using the pathname of window.location as a `key` to get the value from `routes`
Example `routes["/"]` give us the `Home` view function.

The router then calls `Home()` which should return an element that it show.

The router may also extract and pass any query parameters to the view. More on that later.

For this part we need a function in the router that accepts a path.
It uses this path to find the view function. 

`function onURLChange(pathname) {
  const view = routes[pathname];
  // render the view
}`

To render the view, we need to empty the root element html, call the view function, and then append the new element returned by the view function. 

`function onURLChange(pathname) {
  const view = routes[pathname];
  rootEl.innerHTML = "";
  const el = view();
  rootEl.appendChild(el);
}`

Now we need to hook up that when the page loads, our `main.js` tells the router what url wew are at.
We can call onURLChange with `window.location.pathname` in the same DOMContentLoaded callback after we set the rootEl.


Right now try running your app, you should see the "Home" view.
If you manually change the location in the url to "localhost:5000/about" you should see the About view.
You know have a router set up with two initial routes, that knows what view to load when the page loads.

### Navigating to a New Route
 When the user clicks a link or performs some action that should change the route within your SPA,
 the router uses the History API to update the URL and push a new state onto the browser's history stack. 
 This is typically done using window.history.pushState. Its important to push a new state and not just render the view
 since we want to support back and forward in the browser and have our SPA behave like any other webpage.

Lets define a function `navigateTo(path)` which takes a path, pushes a new history state, and renders our view.

```
export const navigateTo(newPath) = {
  // push new history state
  // render our view
}
```
Pushing a New State: When you push a new state, you specify the new URL and any state data you want associated with it. 
The URL can include the path and query parameters. For example:

```
window.history.pushState({}, '', newPath);
```
read docs for info on arguments to pushState

our function now becomes
```
export const navigateTo(newPath) = {
  window.history.pushState({}, '', newPath);
  // render our view
}
```

remember how we found the correct view with the pathname and rendered the view in onURLChange above?
We need to do the same here, so maybe best to put these steps in their own function renderView and reuse it in both places

```
export const navigateTo(newPath) = {
  window.history.pushState({}, '', newPath);
  const view = routes[pathname];
  renderView(view);
}

function onURLChange(pathname) {
  const view = routes[pathname];
  renderView(view)
}```

We will leave you the chore of defining `renderView`.

Now how to test this `navigateTo` ? In our home view, create a button and add an event listener that on click calls `navigateTo("/about")`

You should now be able to click the button to go to your about page.


### Popstate Event Handling

To ensure that the router responds to back and forward button clicks or other changes to the browser's history, you listen for the popstate event. When this event fires, it means the URL has changed due to user navigation or interaction.

Handling the Popstate Event: When the popstate event occurs, the router's event handler (e.g., onURLChange as seen in your provided code) is triggered. It extracts the new URL, matches it to a route, and renders the associated view. Any state data associated with the new URL can also be accessed.
Rendering the View: Once the router has determined the correct view or component to display based on the URL, it calls the corresponding view function or component to render the content within the root element you've specified for that route.

User Navigation: Users can now navigate between routes within your SPA, and the router will manage the URL changes and content updates without triggering full page reloads. This creates a smooth and responsive user experience.

In summary, a router in an SPA works with the HTML5 History API to handle client-side routing. It listens for URL changes, updates the URL using pushState, and renders the appropriate content when the URL changes. This allows you to create the illusion of multiple pages within a single-page application, providing a more engaging and dynamic user experience.

## Basic Router API 

Here we will define data and functions that a basic router could have. 

* ROUTES Object: This object stores information about the routes in your SPA. Each route is associated with a path and a corresponding view or component. If a user navigates to a specific path, the router will display the corresponding view.

* setRootEl Function: This function sets the root element where the views/components will be rendered. It allows you to specify where in your HTML document the SPA content will appear.

* setRoutes Function: This function initializes the ROUTES object with the routes and their associated views. You can use this function to define the routes for your SPA.

* getViewForRoute Function: Given a pathname (URL), this function retrieves the corresponding view/component from the ROUTES object. If the route is not found, it defaults to an error page.

* queryStringToObject Function: This utility function converts a query string (e.g., ?param1=value1&param2=value2) into a JavaScript object for easy access to query parameters.

* navigateTo Function: This function is used to programmatically navigate to a new route within the SPA. It updates the URL using window.history.pushState and then calls renderView to display the corresponding view.

* renderView Function: This function renders a view/component in the specified root element. It clears the existing content and appends the new component to the root element. You can also pass parameters to the view/component.

* onURLChange Function: This function is intended to handle URL changes. When the URL changes, it calls renderView to display the appropriate view based on the new URL and its query parameters.

Coding a Router Step by Step
Now, let's provide step-by-step instructions on how to code a simple router for a SPA:

Step 1: Set Up Your HTML Structure
Create an HTML file with the basic structure of your SPA. Define a root element (e.g., a div with an id) where your views/components will be rendered.

html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Add your CSS and other head elements here -->
</head>
<body>
    <div id="app-root"></div> <!-- This is your root element -->
    <script src="your-router-script.js"></script>
</body>
</html>
Step 2: Initialize Your Router
In your JavaScript code (e.g., your-router-script.js), initialize your router:

javascript
Copy code
import { setRootEl, setRoutes, navigateTo, onURLChange } from './your-router-module.js';

// Set the root element where views will be rendered
setRootEl(document.getElementById('app-root'));

// Define your routes and their associated views
const routes = {
    '/': (params) => HomeView(params),
    '/about': (params) => AboutView(params),
    '/contact': (params) => ContactView(params),
    '/error': (params) => ErrorView(params),
};

// Initialize the routes
setRoutes(routes);

// Handle initial URL and URL changes
window.addEventListener('popstate', onURLChange);
window.addEventListener('load', onURLChange);
In this code, replace HomeView, AboutView, ContactView, and ErrorView with actual view functions or components that you want to display for each route.

Step 3: Create View Functions or Components
Define your view functions or components. These functions/components should return the content to be displayed for each route. For example:

javascript
Copy code
function HomeView(params) {
    const view = document.createElement('div');
    view.textContent = 'Welcome to the Home Page!';
    return view;
}

function AboutView(params) {
    const view = document.createElement('div');
    view.textContent = 'Learn more about us on the About Page.';
    return view;
}

// Define similar functions/components for other routes
Step 4: Implement Navigation
Implement navigation in your SPA. You can use anchor links (<a>) with navigateTo to navigate to different routes:

html
Copy code
<a href="/" onclick="navigateTo('/', {}); return false;">Home</a>
<a href="/about" onclick="navigateTo('/about', {}); return false;">About</a>
<a href="/contact" onclick="navigateTo('/contact', {}); return false;">Contact</a>
The onclick attribute prevents the default behavior of anchor links and uses navigateTo to change the route.

Step 5: Handle URL Changes
Ensure that the onURLChange function handles URL changes. When a user clicks a link or navigates using the browser's back/forward buttons, this function will be called to update the displayed view.

Step 6: Styling and Additional Features
You can further enhance your SPA with CSS styles, additional views, and features as needed.

This guide provides a basic outline of how to create a router for a Single Page App. You can extend and customize it to meet your specific requirements.
