This project was created by [Create React App](https://github.com/facebookincubator/create-react-app).

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    actions/
    assets/
     images/
     fonts/
    config/
    constants/
     actionTypes/
     utiles/
    containers/
    reducers/
    stores/
```

## How to install all dependencies

Install all the dependencies:

```
  `npm install`
```

or

```
  `yarn`
```

## How to add packages

Install the packages:

```
  `npm install --save package_name`
```

or

```
  `yarn add package_name`
```

## How To run your app

```
  `npm start`
```

# Architecture/Design
  * React.js
  * Redux

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.