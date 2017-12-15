# Simple Notification

## Installation

To install this library, run:

```bash
$ npm i simple-notification --save
```

Copy the content of dist folder `app.js`, `app.css` and `fonts` or use other tools how **gulp**


### Methods and options

Available methods
```javascript
$.simpleNotify(options)
```
Default options
```javascript
var options = {
  type: '',
  title: '',
  content: '',
  lifetime: 5000,
  sticky: false,
  closeTrigger: true,
  iconCls: '',
};
```

| Prop | Description |
| --- | --- |
| **`type`** | success, info, warning, danger. |
| **`title`** | The title of notification. |
| **`content`** | The content of notification. |
| **`lifetime`** | The time in milliseconds to destroy the notification. |
| **`sticky`** | If **true** the notification won't be destroyed automatically. |
| **`closeTrigger`** | If **false** the close button won't be displayed. |
| **`iconCls`** | Represent the icon class of FontAwesome. For Example 'envelope', it isn't necessary to give the full name like 'fa fa-envelope'. |

## Development

To compile run:

```bash
$ gulp default
```

To serve local run:

```bash
$ npm run dev
```

## License

ISC © [Walter Ribeiro](mailto:walterjunioranalise@gmail.com)
