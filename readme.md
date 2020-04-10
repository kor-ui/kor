![](http://kor-ui.com/assets/favicon_light.png) 
# kor

### Visit [www.kor-ui.com](https://www.kor-ui.com/) for samples, APIs and other design/development documentation

A design system / UI component library built with LitElement. Based on the web components standards, kor is browser-, framework- and OS-agnostic and can be used to build web, desktop and mobile applications using Angular, Vue, React, plain JS and so on.

---

## Installation

Install the core library through npm:

```
npm install @kor-ui/kor --save
```

---

## Integration of Components

The most simple and common way of including the components into an application is by **loading the whole bundle**:

- **Include the whole JS bundle** and CSS styles:

```js
// include js bundle through js import instead
import 'kor-ui/kor' 
```

*or*

```html
<!-- include whole js bundle in index.html -->
<script type="text/javascript" charset="utf-8" src="node_modules/@kor-ui/kor/index.js"></script>

<!-- include stylesheet in index.html -->
<link rel="stylesheet" type="text/css" href="node_modules/@kor-ui/kor/kor-styles.css">
```

As an alternative, you can also **lazy load individual components** to reduce the bundle size and loading time (stylesheed needs to be included in addition to the following steps):

```
npm install @kor-ui/button --save
npm install @kor-ui/accordion --save
```

```html
<!-- include component in index.html -->
<script type="text/javascript" charset="utf-8" src="node_modules/@kor-ui/button/index.js"></script>
```

*or*

```js
// include individual components 
import { korButton } from '@kor-ui/button' 
import { korAccordion } from '@kor-ui/accordion' 
```

---

## Usage

Use the kor components as if they were native HTML tags. All components allow one and two-way data binding and the attributes fire an `attribute-changed` event when modified:

```html
<kor-button label="Hello World" color="secondary" disabled></kor-button>
<!-- data binding -->
<kor-accordion [label]="myVar" (expanded-changed)="myFunction()"></kor-accordion>
```
