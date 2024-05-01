# Javascript Dropdown

A very basic customizable dropdown menu implementation.

## Usage

### html

```html
<nav class="myMenu">
  <button class="trigger">
    My Menu
    <ul class="menu">
      <li><a href="#1">Menu Item 1</a></li>
      <li><a href="#2">Menu Item 2</a></li>
      <li><a href="#3">Menu Item 3</a></li>
      <li><a href="#4">Menu Item 4</a></li>
      <li><a href="#5">Menu Item 5</a></li>
      <li><a href="#6">Menu Item 6</a></li>
    </ul>
  </button>
</nav>
```

### javascript

```javascript
import { dropdown } from './dropdown';

const myMenu = document.querySelector('.myMenu');

dropdown(myMenu, { click: true, retractAfterClick: true });
```
