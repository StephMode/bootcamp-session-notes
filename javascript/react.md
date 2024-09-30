30.09. Session on react

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
