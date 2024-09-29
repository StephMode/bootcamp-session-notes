# Purpose of this MD

JS Syntax Teile, die ich genau so immer wieder einsetzen kann und im aktuellen scope meines lernens genau so nutzen kann/soll.

Diese fn werde ich so auch immer wieder brauchen.

## Forms

### default behavior form submission unterbinden

```js
const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
});
```

### form input value in object bündeln und nutzbar machen

```js
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);
});
```

### Input field nach submisson wieder fokussieren

```js
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // [...] handle form data
  event.target.elements.message.focus();
});
```

This will focus a form field with the attribute `name="message"`.

### forms zurücksetzen

```js
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // [...] handle form data
  event.target.reset();
});
```
