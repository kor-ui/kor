# wa

*wa (和)* is a library of user interface components built using LitElement / lit-html library. It is based on the web components standards which makes it browser-, framework- and OS- agnostic.

## Integrating the library

1. Install the library in your project's folder:
```
npm install wa-baukasten
```

2. Include the JS bundle and CSS styles in your app's `index.html` file:
```html
<script type="text/javascript" charset="utf-8" src="node_modules/wa-baukasten/wa.js"></script>
<link rel="stylesheet" type="text/css" href="node_modules/wa-baukasten/wa-styles.css">
```

If you are using angular, you can alternatively include the assets in your `angular.json` file:

```json
...
"styles": [
    "src/styles.css",
    ...    
    "node_modules/wa-baukasten/wa-styles.css"
],
"scripts": [
    ...
    "node_modules/wa-baukasten/wa.js"
]
...
```

3. Start using the components in your HTML templates:
```html
<wa-button label="Hello World" color="secondary" disabled></wa-button>
```

Happy coding 😄