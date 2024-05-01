# Javascript Dropdown

A very basic customizable dropdown menu implementation.

## Example

### index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="script.js" defer></script>
  </head>
  <body>
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
  </body>
</html>
```

### script.js

```javascript
import { dropdown } from './dropdown';

const myMenu = document.querySelector('.myMenu');

dropdown(myMenu, { click: true, retractAfterClick: true });
```
