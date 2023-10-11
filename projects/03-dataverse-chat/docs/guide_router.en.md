# How to Code a Router
Before we get into coding a router, we need to cover a couple of concepts,
like the reason routers exist in the first place - the Single Page Application (SPA).

## What is a Single Page Application (SPA)
A Single Page Application (SPA) is a web application that uses a single HTML file (most likely `index.html``)
and dynamically updates the contents of that `index.html` as the user interacts with the application.
Instead of loading separate HTML pages for each interaction or navigation, SPAs use JavaScript
to fetch and render data in the same HTML page, giving the illusion that we are navigating
to separate HTML pages, when in fact it is the same page with different content rendered (drawn).

## What is a Router
In the context of SPAs, a router is a JavaScript module that manages the navigation within
the application. A router helps create a sense of multiple pages or "views" within a SPA by handling
user interactions that cause URL changes and rendering the appropriate content.

For example, if you are on the homepage of a SPA `www.website.com` and then click a `<nav>` menu item on the page
that takes you to `www.website.com/about`, the router is in charge of responding by changing the URL,
finding the appropriate content for `about`, and replacing the HTML in `index.html` with the new content.

### So what are routes and views
In their most simple form, routes are usually defined as key-value pairs, where the `key` is the route path,
and the `value` is the associated function that will render the view. 

```js
const routes = {
  "/": Home,
  "/about": About
}
```
Routes can be defined in more complex ways but the base idea is the same, a certain path relates to
a certain view function. 

In this example, `Home` and `About` are functions that when invoked, will render the html for the
page and return an HTML element that the router will add to the `index.html`.

```js
const Home = () => {
  const el = document.createElement("h1");
  el.innerHTML("I'm the Home Page");
  return el;
}
```

So if we load the webpage and the pathname is `/`, the router will know from `routes["/"]`
should invoke the `Home` function and we will see "I'm the Home Page". 
Or if we load the webpage at `/about`, the router will
know from `routes["/about"]` to call the `About` function. There are some steps in between, but
thats roughly the idea.

## window.location

Since we are mentioning `pathname` let's briefly review `window.location`.
With the `window.location` object, we can access parts of the current URL programmatically.

Example window.location:
href: https://example.org:8080/foo/bar?q=baz#bang
origin:  https://example.org:8080
port: 8080
pathname /foo/bar
search: ?q=baz
hash: #bang

[Interactively see parts of the url](https://developer.mozilla.org/en-US/play)

If you are not familiar with `window.location` and its properties `origin`, `pathname`, `search`, 
now would be a good time to read [the Location docs]https://developer.mozilla.org/es/docs/Web/API/Location. 

## Introducing the History API

As you browse webpages and load one page after another, you add to your browser history. The back
and forward arrow buttons on every browser allow you to move forward and back in your history. 
With the History API we can access and manipulate the browser's history without triggering full page reloads.
A router in a Single Page App works in conjunction with the History API to achieve this
"simulated" page loading while adding to the browser history, thus preserving the way a user can move
 back and forward using the buttons 
in their browser. If it did not, a SPA could still show new views in the same html, 
but the URL probably wouldn't update and the history would never be added to, so pressing
back on the browser would exit the website completely.

Related links : 

The key players related the History API that a router uses is:

`pushState` method - link - allows us to add a new state to the history queue of the window
`popstate` event - link - its an event the window fires when the history changes (example when someone pressed back on the browser)

Other methods of interest are replaceState, go, forward, back [See full History API docs here](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
And [working with the history API docs](https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API)
Another event of interest is `hashchange`. [See hashchange docs here](https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event)

## Router functionalities

A basic router should:

* Store the applications routes
* For a given pathname in the url, render the appropriate view 
  (and pass the appropriate arguments to the view if there are search params)
* Respond to navigation within the app (link, button clicks etc) by
  * adding a new state to the browser history to update the url 
  * then rendering the appropriate view based on the pathname 
    (and pass the appropriate arguments if there are params)
* Respond to navigation with the back and forward buttons in browser
  * analyze the new URL for the pathname and params
  * then rendering the appropriate view based on the pathname 
    (and pass the appropriate arguments if there are params)
* Loading an error page when the pathname isn't defined in the routes

There's no mistake, we mention rendering the appropriate view based on the pathname three times, 
so this means we will write a reusable function for this so we can use it multiple times.

Now we will go in depth explaining how to achieve these functionalities in code in `router.js`

### 1. Store the application routes
The router needs to know the routes of the application in order to determine which view to render for a path.
The routes should be defined in a module outside of the router but then passed to the router to store.
The router should its own "private" variable to store the routes, and a function that can be called from 
another module in order to assign or set the routes. In code that means the router should have:

* ROUTES - object {}: This variable stores information about the routes in your SPA. 
* setRoutes(routes): This function assigns the value of the routes argument to the ROUTES object. 

### 2. For a given pathname in the url, render the appropriate view
The router should have a function that when given a pathname, it renders the view.
So what does it mean to "render the view"? If you think in pseudocode, we need to clear out the current page html, 
call the new correct view function to render, and then put the new html in the page. 

```js
const renderView = (pathname, params) => {
  // clear the current html
  // find the correct view to render
  // call the view function (with the params) and get the new html element
  // put new html in the page
}
```
To be able to "clear" the html, the router also needs to know about the element of your
app which is the root or parent of all elements. We will call this the root element.
The router should have its own variable to store the root element, and a function that can be called from 
another module in order to assign or set the root element. 

To achieve this functionality in code, `router.js` should have:

* `rootEl` - DOM element: A variable to store the root element where the content will change/appear.
* `setRootEl(el)`: A function to set the root element for the router.
* `renderView(pathname, params)`: A function that renders a view in the specified root element. 
  It clears the existing content, finds the view function for the given pathname, then 
  calls that view function (also passing the params object as an argument into the view, more on that in a bit). 
  It appends the element returned by the view function to the root element. 

###  3. Respond to navigation within the app 
When a user clicks a link or button etc. in your app to navigate to another page within your app, 
the router must intervene to simulate a new page load. It needs to:

  * add a new state to the browser history to update the url 
  * render the appropriate view based on the pathname (and pass the appropriate arguments if there are params)

The router uses the History API to update the URL and push a new state onto the browser's history stack. 
This is typically done using `window.history.pushState`. Remember, its important to push a new state 
and not just render the view since we want to support back and forward in the browser and have our 
SPA behave like any other webpage.

So to achieve this in code, `router.js` should have a function to programmatically navigate to 
a new route within the SPA. 

`navigateTo(pathname, props)`: A function which receives a path, pushes a new history state, and renders the new view.

An example with some pseudocode.

```js
export const navigateTo = (pathname, params) => {
  // push new history state with window.history.pushState
  // render view passing it params
}
```
Note: we already talked about a function `renderView`, we can use that within `navigateTo` to keep the code DRY
(Don't Repeat Yourself)

This function can be imported into any view that has links, buttons or needs to load a new view and
called in an event listener.

```js
linkEl.addEventListener('click', () => navigateTo("/about", { name: "Xochitl" }))
```


#### Passing arguments to the views

Let's talk about this "and pass the appropriate arguments if there are params" 
and why it might be useful. There are times when we want to pass data to a view, so that the same view can render 
more specific information depending on what data we pass. 

For example, you may have a route to show user info 

```js
  const routes = { "/user": User }
```
For any user, we want to show the same page in general, but also with specific info, maybe the user's name,
depending on the user. Rather than having a separate route defined for every possible user 
(tedious and maybe impossible) we have one route `/user` that calls a view function `User`, but this view 
function has parameters in order to show something a bit different depending on the value. 

```js
const User = ({ name }) => {
  const el = document.createElement("p");
  el.innerHTML = `Hello ${name}`;
  return el;
}
```

But how can we get data to pass as arguments into the view function? 
With `navigateTo` its simpler since we can pass in the argument

```js
linkEl.addEventListener('click', () => navigateTo("/about", { name: "Xochitl" }))
```

But what about if the user loads the url directly, where will the value of `name` come from ?
There are a few ways to go about this and some are more sophisticated and require more code than others.
The `window.location` object has some basic functionality that we can use to communicate data.
Its called the `search` or `query` part of the URL, its what comes after the `?`.
Think of it as key/value pairs separated by `&`.

And from `www.website.com?name=Noemi&color=green` we can extract

```js
{ name: Noemi, color: green }
```

If you look around at urls as you navigate, you will see search params everywhere.

So how do we get from the url to the object?
We can use `window.location.search` to get the search string and use Web API called
[`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams).

```js
const params = new URLSearchParams("foo=1&bar=2");
```
will give us a `URLSearchParams` object with the given params that we can iterate through to form a 
regular object. (Hint: [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) or
 [`fromEntries`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)

When your SPA loads, before calling `renderView` the router should analyze the URL and 
extract the pathname and the params to pass to the view. The same goes when the user
uses the forward and back buttons `popstate`.

### 4. Respond to navigation with the back and forward buttons in browser
When a user uses the forward or back buttons on the browser withing your SPA
the router needs to know when this happens, parse the `window.location` for the `pathname` and `search` params
then call the appropriate view for the pathname passing in any params as arguments.

In `router.js`, we would add 

 `onURLChange(location)`: A function to handle URL changes with `popstate`.
  When the URL changes, it parses the `pathname` and `search` from `location` (`window.location`)
  and then calls `renderView`. 

We need to hook up this function to get triggered when the user goes forward or back.
To achieve this we can to listen for the `window`'s `popstate` event. 
When `popstate` fires, it means the URL has changed due to user navigation or interaction.

[More on `popstate` here](https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event)

### 5. Loading an error page when the pathname isn't defined in the routes
When the user loads a url that doesn't exist in the app, the app should show a view
that tells the user there is an error of some kind, or not found. In order to support this
behavior, an app's `routes` should have a route with a view defined for "/error" or "/not-found". 
At the moment the router goes to render the view and looks to find the view for a route, 
if none exists - it can use the "/error" or "/not-found" as a fallback.

```js
const renderView = (pathname, params) => {
  // clear the current html
  find the correct view to render **or if there is none, use the error view**
  // call the view function (with the params) and get the new html element
  // put new html in the page
}
```

## Basic Router API 

Here is a complete API of a basic router that has the functionality we just covered.

* `ROUTES` - object {}: This variable stores information about the routes in your SPA. 
  Each route is associated with a path and a corresponding view or component. 
  If a user navigates to a specific path, the router will display the corresponding view.

* `rootEl` - DOM element: This variable stores the element where the SPA content will change/appear.

* `setRootEl(el)`: This function has one parameter (element). 
  It sets the root element where the views/components will be rendered, which allows you 
  to specify where in your HTML document the SPA content will appear.

* `setRoutes(routes)`: This function assigns the value of the routes argument to the ROUTES object. 
  `routes` should be an object (consider checking that it is an object and throw and error if not). 
  Use this function to define the routes for your SPA.

* `queryStringToObject(queryString)`: A utility function to convert a query string 
  (e.g., `?param1=value1&param2=value2`) into a JavaScript object for easy access to query parameters.
  It takes a `queryString` as an argument and returns an object of key value pairs created from the string
  (e.g., `{ param1: value1, param2: value2 }`). It can do this by using `URLSearchParams` to convert the string
  into an iterable datatype. You can then use `for...of` or `Object.fromEntries` to create the object from the iterable
  
* `renderView(pathname, props)`: This function renders a view in the specified root element.
  It clears the existing content, finds the view function for the pathname, then looks for the view
  function in `ROUTES` and calls the view function passing the `props` value as an argument into the view.
  It appends the DOM element returned by the view function to the root element. 

* `navigateTo(pathname, props)`: This function is used to programmatically navigate to a new route
  within the SPA (example clicking on buttons or links within the app). It updates the URL using 
  `window.history.pushState` and then calls `renderView` with the given `pathname` and `props`
  to display the corresponding view.

* `onURLChange(location)`: This function is intended to handle URL changes with `popstate`.
  When the URL changes, it parses the `pathname` and `search` from `location` (`window.location`)
  and then calls `renderView`. You will have to use `queryStringToObject` to get the params in object
  format from the search string to pass to `renderView`.


## Coding a SPA and router

Let's put together the router along with some simple views to make a SPA:

1. Set Up Your HTML Structure
Create an HTML file with the basic structure of your SPA. 
Define a root element (e.g., a `<div>` with an id) where your views will be rendered.

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Add your CSS and other head elements here -->
</head>
<body>
    <div id="app-root"></div> <!-- This is your root element -->
    <script src="your-app-script.js"></script>
</body>
</html>

```

2. Create Views

Define your views. These are functions that create
the content of the view for each route and should return a DOM element for the router
to use. 
For example:

```js
// src/views/Home.js

function Home(props) {
    const view = document.createElement('div');
    view.textContent = 'Welcome to the Home Page!';
    return view;
}

// src/views/About.js

function About(props) {
    const view = document.createElement('div');
    view.textContent = 'Learn more about us on the About Page.';
    return view;
}

// Define similar functions/components for other routes
```

3. Code the Router 

In its own file `router.js`, implement the parts of the router following [the API outlined above](##Basic Router API).
The API defines two variables (`ROUTES` and `rootEl`) and six functions. 
Consider writing tests in parallel for each function to better understand their intent.

Export the functions that will be used by other modules `setRoutes`, `onURLChange`, `setRootEl`, `navigateTo`.


Here is an outline of `router.js` laid out with pseudocode

```js

let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  // assign rootEl
}

export const setRoutes = (routes) => {
  // assign ROUTES
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
}

const queryStringToObject = (queryString) => {
  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
}

const renderView = (pathname, props={}) => {
  // clear the root element
  // find the correct view for the pathname
  // in case not found render the error view
  // render the correct view passing the value of props
  // add the view element to the DOM root element
} 

export navigateTo = (pathname, props={}) => {
  // update window history with pushState
  // render the view with the pathname and props
}

export onURLChange = (location) => {
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
}
```

4. Initialize Your Router
In your JavaScript code (e.g., `index.js`), initialize your router by 
defining your routes and setting the root element:

```js
import HomeView from './views/HomeView';
// ... import other views
import { setRootEl, setRoutes, onURLChange } from './router.js';


// Define your routes and their associated views
const routes = {
  '/': HomeView,
  // ...
};

// Initialize the routes
setRoutes(routes);

// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  setRootEl(/** root element **/);
});
```

5. Handle first page load

Be sure to handle the initial page load by calling `onURLChange` with the `window.location`.

```js
// Handle initial URL load
window.addEventListener("DOMContentLoaded", () => {
  // set root element
  // invoke onURLChange 
});
```
Test to see if no matter what valid URL of your SPA you start with,
the correct view loads.

6. Implement Navigation in the SPA

In your views, you can use anchor links `<a>` or `<button>`
with `navigateTo` to navigate to different routes. 
Remember `navigateTo` should take arguments for the `pathname` and `props` object.

```js
// import navigateTo


const Home = (props) => {
  // ...
  linkEl.addEventListener('click', () => navigateTo("/about", { name: "Xochitl" }))
  // return el
}

```

7. Handle back and forward
Ensure that you are listening to `popstate` in `index.js` and call the `onURLChange` function
when there is a `popstate`. When a user clicks a link or navigates using the browser's back/forward buttons, 
this function will be called to update the displayed view.

```js
// Handle URL changes
window.addEventListener('popstate', ( { target }) => {
  onURLChange(/* ... */);
});
```

Test it by using your back and forward buttons.

8. Test query param functionality

In one of your views, experiment with reading the search params from the url and using them in the
view. The view functions should have a parameter, lets call it `props`, that is an object
where we can pass information to the views.

```js
const Home = (props) => {
    const el = document.createElement('div');
    el.textContent = `Welcome to the Home Page ${props.name}!`;
    console.log(props.id);
    return el;
}
```

Then in the url, add the search params `localhost[PORT]/?name=Xochitl&id=100`.
Remember you can pass `props` as well with `navigateTo` with the second argument
```js
navigateTo("/", { name: "Xochitl", id: "100"});
```
9. Handling routing errors

A common use case is that your router presents an Error page when it can't find 
defined resource for the URL. To achieve this, add a route for error orr not found
 to your routes object (example `{ "/error": ErrorView }`) and in `renderView` using it as a fallback if
`routes[pathname]` yields nothing.

10. Done!

Test your SPA's behavior manually by clicking and entering URLs.
Write tests for the router.js functionality if you haven't already done so.

