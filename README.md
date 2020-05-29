# vanilla-html

> Size 400b

## Install

```sh
$ npm install --save vanilla-htmljs
```

## Use BEM css

```js
import html from "vanilla-htmljs";

const box = document.getElementById("box");
box.innerHTML = html`<div>hello world</div>`;

document.body.append(box);
```

## VSCode Plugin

you can install lit-html:

https://marketplace.visualstudio.com/items?itemName=bierner.lit-html](https://marketplace.visualstudio.com/items?itemName=bierner.lit-html)
