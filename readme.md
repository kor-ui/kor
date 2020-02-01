# kor

## Visit [www.kor-ui.com](https://www.kor-ui.com/) for samples, APIs and other design/development documentation

A design system / UI component library built with LitElement. Based on the web components standards, kor is browser-, framework- and OS-agnostic and can be used to build web, desktop and mobile applications using Angular, Vue, React, plain JS and so on.

## Installation

Install the library in your project's folder:
```
npm install kor-ui
```

## Integration of Components

There are three main ways of integrating the components into your app:

1. Include the JS bundle and CSS styles directly in your `index.html` file:

```html
<script type="text/javascript" charset="utf-8" src="node_modules/kor-ui/kor.js"></script>
<link rel="stylesheet" type="text/css" href="node_modules/kor-ui/kor-styles.css">
```

2. Import the ES module directly:

```js
import { kor } from 'kor-ui/kor.js' 
```

3. If you are using Angular, include the assets in your `angular.json` file:

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

## Usage

Use the kor components as if they were native HTML tags. All components allow one and two-way data binding and the attributes fire an `attribute-changed` event when modified:

```html
<kor-button label="Hello World" color="secondary" disabled></kor-button>
<!-- data binding -->
<kor-accordion [label]="myVar" (expanded-changed)="myFunction()"></kor-accordion>
```

