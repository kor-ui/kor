# wa

*wa (和)* is a UI component library built with LitElement / lit-html. It is based on the web components standards which makes it browser-, framework- and OS-agnostic.

## Installation

Install the library in your project's folder:
```
npm install wa-baukasten
```

## Integration of Components

To integrate the components there are 2 options. You can either include the entire library **(1)** at once or import each component individually **(2)**.

1. To load all components at once when your app is initialized, you can include the JS bundle and CSS styles in your app's `index.html` file:
```html
<script type="text/javascript" charset="utf-8" src="node_modules/wa-baukasten/wa.js"></script>
<link rel="stylesheet" type="text/css" href="node_modules/wa-baukasten/wa-styles.css">
```

If you are using Angular, you can alternatively include the assets in your `angular.json` file:
```json
"styles": [
    ...    
    "node_modules/wa-baukasten/wa-styles.css"
],
"scripts": [
    ...
    "node_modules/wa-baukasten/wa.js"
]
```

2. If instead you would prefer including only the components required, you could import each of them individually:
```js
import { waAccordion } from 'wa-baukasten/wa.js' 
import { waButton } from 'wa-baukasten/wa.js' 
```

3. Start using the components in your HTML templates:
```html
<wa-button label="Hello World" color="secondary" disabled></wa-button>
<!-- data binding -->
<wa-accordion [label]="myVar" (expanded-changed)="myFunction()"></wa-accordion>
```

Happy coding 😄