# kor

**kor** is a UI component library built with LitElement / lit-html. It is based on the web components standards which makes it browser-, framework- and OS-agnostic.

## Installation

Install the library in your project's folder:
```
npm install kor-ui
```

## Integration of Components

There are three main ways of integrating the components into your app.

1. You can include the JS bundle and CSS styles in your `index.html` file:

```html
<script type="text/javascript" charset="utf-8" src="node_modules/kor-ui/kor.js"></script>
<link rel="stylesheet" type="text/css" href="node_modules/kor-ui/kor-styles.css">
```

2. If you are using Angular, you can alternatively include the assets in your `angular.json` file:

```json
"styles": [
    // ...    
    "node_modules/kor-ui/kor-styles.css"
],
"scripts": [
    // ...
    "node_modules/kor-ui/kor.js"
]
```

3. Importing the ES module directly:

```js
import { kor } from 'kor-ui/kor.js' 
```

## Happy coding 😄

Start using the components in your HTML templates:

```html
<kor-button label="Hello World" color="secondary" disabled></kor-button>
<!-- data binding -->
<kor-accordion [label]="myVar" (expanded-changed)="myFunction()"></kor-accordion>
```

