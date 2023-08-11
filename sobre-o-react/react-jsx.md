# JSX

> *HTML in JS*

É uma forma descrever interfaces de uma forma bem parecida com XML/XHTML

Para aplicações web, o código em JSX será tranformado em scripts para insersão dos elementos do nosso DOM de acordo com a forma como escrevemos ele.

## Exemplo:

```jsx
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
```

Isso irá gerar um script em JavaScript que irá inserir o seguinte html na nossa interface.

```html
<html lang="en">
    <head>
        <!-- Scripts and Styles -->
    </head>
    <body>
        <div id="root">
            <h1>Vite + React</h1>
            <div class="card">
                <button>count is 2</button>
                <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
            </div>
            <p class="read-the-docs">Click on the Vite and React logos to learn more</p>
        </div>
        <!-- Other scripts -->
    </body>
</html>
```

> Note que a UI foi gerada dentro da `div#root`, esse é o *entry point* da nossa aplicação react.

## Entry Point
É ponto de inicio nossa DOM, ou seja, uma div vazia no qual nossa aplicação irá inserir a interface dentro dela.

No arquivo `src/main.jsx` contem a configuração do entry point
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

No JSX os atributos padrão do html são escritos em camelCase ao invés de slug-case.
e os valores entre

Por exemplo em html:
```html
<button type="submit" onclick="myFunction()">Botão</button>
<input type="text" onchange="otherFunction()" />
```

Ficariam assim em JSX:
```jsx
<button type="submit" onClick={myFunction}>Botão</button>
<input type="text" onChange={otherFunction} />
```