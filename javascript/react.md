# 30.09. Session on react

Dateieindung .jsx
ein tool, mit dem wir arbeiten werden, wird die diese file-extension brauchen

im src-dir
dort sind alle Daten, die veränderlich sind und an den user ausgespielt werden

Grundhaufen - wird in der index.jsx von tools geschrieben

App-element in react ist das Elternkomponent für alle Komponeneten, die wir noch schreiben

React-Komponenten sind so geschrieben:

- dass sie mit einem Großbuchstaben geschrieben werden
- das sie etwas return-en
- zu erstellende HTML Elemete werden ähnlich wie ein html tag

wenn ich "vanillaJS" in react schreiben will, dann innerhalb von {}

```JS
function App() {
return(<Component />);
}
```

damit gibt man eine component ans DOM weiter
Allerdings braucht man immer auch parent-element

```JS
function App() {
return(
    <div>
        <Component />
    </div>
    );
}
```

Im Gegensatz zu vanillaJS, wo man entweder verbose syntax mit den elementMethods hat, oder das leicht risikobehaftete innerHTML, kann man in react relativ nativ mit html-artigen tags components erstellen, die dann im user-facing html-doc gerendert werden.

Diese html-artigen tags können dann wie in HTML direkt inline mit attributes versehen werden. Dabei gibt es aber ein paar _Besonderheiten in React_:

- `className` in react statt `class=""` in HTML, weil **Class** ein feststehender Begriff in react
- `htmlFor` in react statt `for=""` in HTML für `<label>`
- … tbc

Lebendiges Beipsiel:

```JS
function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Heading</h2>
      <label htmlFor="textInput">Write some text here:</label>
      <input id="textInput" type="text"></input>
      <a
        className="article__link"
        href="https://www.joshwcomeau.com/javascript/statements-vs-expressions/"
      >
        Check out this nice article by Josh Comeau
      </a>
    </article>
  );
}
```

vitejs.dev
build tool, das uns eine boiler plate geben kann für eine react-app
die cli commands aus der Doku unter `# Scaffolding` rausnehmen

Boiler Plate;

- vite.config.js -> ist da, ist gut, nicht tiefer einsteigen
- readme.de: enthält allgemeine Infos zum Project, welches framework, welche libraries usw
- package.json: die `"dependencies"` und die `"scripts"` sind wichtig
- 📁 node_modules: sehr groß, soll nicht ins remote repo gepushed werden, muss deshalb ins .gitignore
- 📁 public: da liegen statische assets wie favIcon, img oder vids drin
- 📁 src: da liegen alle .css und .jsx Komponenten drin
- 📃 main.jsx: kann man so lassen, weil das durch vite gegeben, die ist dafür da, dass die root-componente mit app-components im html gerendert werden
- 📃 app.jsx: hier werden die apps

# 01.10. React props

Leitfrage (auf für tech interviews): how can you make a component reusable?

quick glance of the tech stack of the project: package.json
-> like an ID card
=> gives me infos in which commands to use, whichd dependcies we have, which technologies

readme-files can also give top lvl indications of the projects

`(props)`is the properties of a component
it's a reserved word in react
It's the param of a component (which is a JS fn in the end)

**how do components communicate with each other?**
parent component is sending the props to the component
the component accepts the props send by the parent component
-> way of communcication between components

There are 2 ways to set up props

- via "props" in param: `function Pet(props)`
- via destructuring of props in param: `function Pet({sound, emoji, name, isHungry})`

Tips for diffrent types of objects:

- _booleans_: isHungry -> use is…
- _pointers to functions_: onPet -> use on to indicate, if a prop is an fn that shall be triggered upon an event

Regular interview question: how to make

# 01.10. react nesting

Wenn man mehrere elements im DOM via JSX erstellen und rendern lassen will, braucht man immer ein parent element

❌ geht nicht:

```JS
function Component() {
  return(
    <h2>lipsum</h2>
    <p>lipsum</p>
  )
}
```

✅ möglich

**parent JSX element**

```JS
function Component() {
  return(
    <div>
    <h2>lipsum</h2>
    <p>lipsum</p>
    </div>
  )
}
```

**fragment**

```JS
function Component() {
  return(
    <> // das ist ein fragment
    <h2>lipsum</h2>
    <p>lipsum</p>
    </>
  )
}
```

**Dateneingabe bei abruf von props im comp call**

strings: `name=". . ."` immer in quotation marks
alle anderen (booleans, integer etc): `isMammal={true}` immer in {} curly braces

```JS
function Animal({ emoji, name, description, isMammal}) {
  return(
    <> // das ist ein fragment
    <h2>{emoji} {name}</h2>
    <p>{description}</p>
    </>
  )
}


function App() {
  return(
    <>
    <Animal  emoji="🐕" name="Bello" description="Cute doggo" isMammal={true}  />

    </>
  )
}
```

# 07.10. use effect

wird grundsätzlich verwendet, um Logik in dem Moment auszuführen, in dem die Seite gerendert wird

**Üblicher Use Case: fetch data**

```JS
import { useEffect, useState } from "react";

function Joke({ id }) {
  const [joke, setJoke] = useState();

  useEffect(() => {
    async function startFetching() {
      const response = await fetch(
        `https://example-apis.vercel.app/api/bad-jokes/${id}`
      );
      const joke = await response.json();

      setJoke(joke);
    }

    startFetching();
  }, [id]);

  if (!joke) {
    return null;
  }

  return <h2>{joke.joke}</h2>;
}
```

Entscheidend bei useEffect ist der **dependency array**. weil hier definiert und eingegrenzt wird:

bei dem Update welcher state var der useEffect() hook erneut ausgeführt wird

Einige Beispiele

```JS
useEffect(() => {
  // This runs after every render
});

useEffect(() => {
  // This runs only on mount (when the component appears)
}, []);

useEffect(() => {
  // This runs on mount *and also* if either a or b have changed since the last render
}, [a, b]);
```
