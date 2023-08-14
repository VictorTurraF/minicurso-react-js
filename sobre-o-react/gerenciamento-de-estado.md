# Gerenciamento de Estado

Além das props, os componentes também podem ter um estado interno. O estado é mutável e pode ser usado para armazenar dados que podem mudar ao longo do tempo. Quando o estado de um componente muda, o React atualiza automaticamente a representação visual desse componente.

Claro! O estado de um componente no React é uma parte importante para armazenar e gerenciar dados que podem mudar ao longo do tempo. Vou lhe dar um exemplo simples para ilustrar como o estado de um componente funciona.

Suponha que você esteja construindo um contador. Vamos criar um componente `Counter` que exibe um número e um botão para incrementar esse número:

1. `Counter.js`:

```jsx
import React, { useState } from 'react';

function Counter() {
  // Definindo o estado inicial 'count' como 0
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div className="counter">
      <h2>Contador: {count}</h2>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default Counter;
```

Neste exemplo, estamos usando o hook `useState` do React para adicionar estado ao componente `Counter`. O estado inicial do contador é definido como 0.

A função `increment` atualiza o estado do contador quando o botão é clicado, adicionando 1 ao valor atual.

Agora, vamos usar o componente `Counter` no componente `App`:

2. `App.js`:

```jsx
import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <div className="app">
      <h1>Exemplo de Estado no React</h1>
      <Counter />
    </div>
  );
}

export default App;
```

Ao renderizar o componente `Counter`, você verá um número inicial de 0 e um botão "Incrementar". Cada vez que você clicar no botão, o número irá aumentar.

Neste exemplo, o estado do componente `Counter` é usado para controlar o valor do contador. A função `useState` fornece o valor atual do estado (`count`) e uma função (`setCount`) para atualizar o valor do estado. Isso ilustra como o estado é usado para armazenar e refletir mudanças nos dados em componentes React.

> Observe que se a pagina for atualizada o estado do contador irá reiniciar com o valor que foi definino como valor inical do estado no parametro da chamada `useState(0)`. 
> 
> Isso acontece pois os estados do react apenas guardam os valores enquanto ou após a execução do JavaScript atual, ou seja, quando requisitamos novamente a página todo o JavaScript irá executar novamente do zero.
> 
> Caso haja a nessecidade de persistir os dados entre as sessões do cliente então será necessária a utilização de um armazenamento, seja ele *client side* como local storage, cookies ou indexed DB; ou *server side* por meio de uma Rest API.

## Reatualização Condicional

A componentização permite que você renderize diferentes componentes ou elementos com base em condições específicas. Isso possibilita a criação de interfaces dinâmicas e reativas, onde o conteúdo é atualizado com base nas alterações no estado ou nas props.

Suponha que você queira exibir uma mensagem de boas-vindas personalizada para usuários logados e uma mensagem genérica para usuários não logados. Vamos criar um componente `WelcomeMessage` que renderiza uma mensagem condicionalmente com base no status de login:

1. `WelcomeMessage.js`:

```jsx
import React from 'react';

function WelcomeMessage(props) {
  const isLoggedIn = props.isLoggedIn;

  return (
    <div className="welcome-message">
      {isLoggedIn ? (
        <h2>Bem-vindo, Usuário Logado!</h2>
      ) : (
        <h2>Olá, Visitante!</h2>
      )}
    </div>
  );
}

export default WelcomeMessage;
```

Neste exemplo, o componente `WelcomeMessage` recebe uma prop chamada `isLoggedIn`, que é usada para determinar qual mensagem exibir.

Se `isLoggedIn` for verdadeiro, o componente renderiza a mensagem "Bem-vindo, Usuário Logado!". Caso contrário, renderiza a mensagem "Olá, Visitante!".

Agora, vamos usar o componente `WelcomeMessage` no componente `App`:

2. `App.js`:

```jsx
import React from 'react';
import WelcomeMessage from './WelcomeMessage';

function App() {
  const isLoggedIn = true; // Altere para false para ver a mensagem de visitante

  return (
    <div className="app">
      <h1>Exemplo de Atualização Condicional no React</h1>
      <WelcomeMessage isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
```

Ao definir `isLoggedIn` como `true`, você verá a mensagem de boas-vindas para usuário logado. Se você mudar `isLoggedIn` para `false`, a mensagem de visitante será exibida.

Este exemplo demonstra como você pode usar a atualização condicional para renderizar diferentes partes da interface com base em condições específicas. Isso permite criar interfaces dinâmicas e personalizadas para os usuários, proporcionando uma experiência mais relevante.