# General

This .md is to collect snippets of info, concepts, code
I'll collect info I learned after I made mistakes
Also general info I find to be very useful and applicable to a wide range of situations and scenarios

## What you should include in every global.css

```CSS
* {
display: border box
}
```

```css
body {
}
```

```CSS
ul {
list-style: none;
padding: 0;
}
```

## How to adress html elements with more than one class

```html
<p class="content p1"></p>
```

```css
.content.p1 {
  color: green;
}
```

## General rule of thumb onm how to make a flexbox with items wrapping in -x collums

If you have a _flex-container_ with _flex-wrap_, set the flex-items to be <50% width.
This will make the _flex-items_ take up less then half of the width of the whole _flex-container_, thus creating a two-column layout within the _flex-container_.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <ul class="flex-container">
      <li class="flex-item">Item 1</li>
      <li class="flex-item">Item 2</li>
      <li class="flex-item">Item 3</li>
      <li class="flex-item">Item 4</li>
    </ul>
  </body>
</html>
```

```css
.flex-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}

.flex-item {
  width: 46%;
}
```

## media queries - what needs to be declared and what don't needs to be declared within them

Example:
We want to change _font-size_ of _h1_ in case the viewport has a min-width of 1200px. Color shall stay the same.
In this case, we only need to make a declaration for the _font-size_. We don't need to write out the declaration

```CSS
h1 {
color: blue;
}
```

again, because this shall stay the same.

```CSS
h1 {
  color: blue;
  font-size: 12rem;
}

@media screen and (min-width: 1200px) {
  h1 {
    font-size: 20rem;
  }
}
```
