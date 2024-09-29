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

## Element Creation/Injection

### innerHTML: creating Elements in the DOM via injecting HTML as string

```JS
const cityName = "Lissabon";

article.innerHTML = `
	<h2> ${cityName} </h2>
	<p class="card__content">
		${cityName} is a very beautiful city in Portugal.
		Go there and enjoy the stay!
	</p>
	<button type='button' class="card__booking-button">
		Book Trip
	</button>
`;
```

### createElement(): creating elements in the DOM via element object properties and methods

```JS
function createPost() {
  // post itself

  const newPost = document.createElement("article");
  newPost.classList.add("post");
  // newPost.textContent = "Lipsum"; -> not needed, there is an element for that
  document.body.append(newPost);
  // content of post
  const newPostConent = document.createElement("p");
  newPostConent.classList.add("post__content");
  newPostConent.textContent =
    "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ";
  newPost.append(newPostConent);
  // footer of post
  const newPostFooter = document.createElement("footer");
  newPostFooter.classList.add("post__footer");
  newPost.append(newPostFooter);
  // username in footer in post
  const newPostFooterUsername = document.createElement("span");
  newPostFooterUsername.classList.add("post__username");
  newPostFooterUsername.textContent = "@username2";
  newPostFooter.append(newPostFooterUsername);
  // like-button in footer in post
  const newPostFooterLikeButton = document.createElement("button");
  newPostFooterLikeButton.classList.add("post__button");
  newPostFooterLikeButton.textContent = "♥ Like";
  newPostFooter.append(newPostFooterLikeButton);
  newPostFooterLikeButton.addEventListener("click", handleLikeButtonClick);
}

createPost();
```
