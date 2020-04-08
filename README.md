<h1 align="center">Welcome to simple-notification 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/simple-notification" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/simple-notification.svg">
  </a>
  <a href="https://github.com/walteribeiro/simple-notification#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/walteribeiro/simple-notification/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/walteribeiro/simple-notification/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/walteribeiro/simple-notification" />
  </a>
  <a href="https://twitter.com/walter19921" target="_blank">
    <img alt="Twitter: walter19921" src="https://img.shields.io/twitter/follow/walter19921.svg?style=social" />
  </a>
</p>

> Simple Notifications for web aplications

### ✨ [Demo](https://jsfiddle.net/walter1992/awt5mLk9/)

## Install

```sh
yarn add simple-notification
```

## Usage

Available methods
```javascript
simpleNotify.basic("message", "title", options)
simpleNotify.info("message", "title", options)
simpleNotify.danger("message", "title", options)
simpleNotify.success("message", "title", options)
simpleNotify.warning("message", "title", options)
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

### Dependencies

This library needs the JQuery.

FontAwesome is not required, only if you like using icons.

## Development

To compile run:

```bash
$ gulp default
```

To serve local run:

```bash
$ npm run dev
```

## Author

👤 **Walter Ribeiro**

* Twitter: [@walter19921](https://twitter.com/walter19921)
* Github: [@walteribeiro](https://github.com/walteribeiro)
* LinkedIn: [@walterribeiroti](https://linkedin.com/in/walterribeiroti)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/walteribeiro/simple-notification/issues). You can also take a look at the [contributing guide](https://github.com/walteribeiro/simple-notification/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Walter Ribeiro](https://github.com/walteribeiro).<br />
This project is [MIT](https://github.com/walteribeiro/simple-notification/blob/master/LICENSE) licensed.