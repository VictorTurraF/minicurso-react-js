# Componentização

A componentização é um dos conceitos centrais do React e desempenha um papel fundamental na maneira como as interfaces de usuário são construídas. Ela se baseia na ideia de dividir uma interface de usuário em componentes independentes e reutilizáveis, permitindo uma abordagem modular para o desenvolvimento. Cada componente representa uma parte específica da interface e seu comportamento.

Aqui está uma explicação mais detalhada de como a componentização funciona no React:

## Definindo Componentes
No React, os componentes são definidos como funções ou classes. Eles encapsulam a lógica e a representação visual de uma parte da interface. Os componentes devem retornar elementos JSX, que descrevem como o componente deve ser renderizado.

Suponha que você tenha um projeto React configurado e um arquivo chamado Button.js para definir o componente de botão. Aqui está como você poderia definir um componente de botão básico:

```jsx
import React from 'react';

// Definindo o componente Button
function GreeterButton() {
  function handleClick() {
    alert("Bem vindo!")
  }

  return (
    <button className="button" onClick={handleClick}>
      Mostrar saudação
    </button>
  );
}

export default GreeterButton;
```

## Reutilização
A principal vantagem da componentização é a reutilização de código. Você pode criar componentes genéricos que encapsulam funcionalidades específicas e reutilizá-los em várias partes da sua aplicação. Isso economiza tempo e esforço, pois você não precisa reescrever o mesmo código repetidamente.

Suponha que você tem dois componentes diferentes onde deseja usar o botão de saudação:

1. `WelcomePage.js`: Uma página de boas-vindas que usa o botão de saudação.
2. `UserProfile.js`: Um perfil de usuário que também precisa do botão de saudação.

Aqui está como você poderia fazer a reutilização do componente `GreeterButton` em ambas as partes:

1. `WelcomePage.js`:

```jsx
import React from 'react';
import GreeterButton from './GreeterButton';

function WelcomePage() {
  return (
    <div>
      <h1>Bem-vindo à Página de Boas-Vindas</h1>
      <GreeterButton />
    </div>
  );
}

export default WelcomePage;
```

2. `UserProfile.js`:

```jsx
import React from 'react';
import GreeterButton from './GreeterButton';

function UserProfile(props) {
  return (
    <div>
      <h2>Perfil de Usuário: {props.username}</h2>
      <p>Email: {props.email}</p>
      <GreeterButton />
    </div>
  );
}

export default UserProfile;
```

Ambos os componentes, `WelcomePage` e `UserProfile`, importam e usam o componente `GreeterButton` para mostrar a saudação.

Ao reutilizar o componente `GreeterButton`, você pode manter uma aparência e um comportamento consistentes em diferentes partes da sua aplicação, sem duplicação de código. Isso facilita a manutenção, pois se você quiser fazer alterações no botão de saudação, só precisará fazê-las em um único lugar (no componente `GreeterButton`).

## Props (Propriedades): 
As props são as entradas dos componentes. Elas permitem que os componentes recebam dados do componente pai. As props são somente leitura, o que significa que um componente não pode alterar suas próprias props. Isso ajuda a manter um fluxo de dados unidirecional e previsível.

Suponha que você tenha um componente chamado `Person` que exibe informações sobre uma pessoa. Você pode passar as informações sobre essa pessoa para o componente `Person` usando props. Aqui está como você pode fazer isso:

1. `Person.js`:

```jsx
import React from 'react';

function Person(props) {
  return (
    <div className="person">
      <h2>{props.name}</h2>
      <p>Idade: {props.age}</p>
      <p>Gênero: {props.gender}</p>
    </div>
  );
}

export default Person;
```

Aqui, criamos um componente chamado `Person` que recebe três props: `name`, `age` e `gender`. O componente exibe essas informações usando JSX.

Agora, vamos usá-lo em outro componente chamado `App`:

2. `App.js`:

```jsx
import React from 'react';
import Person from './Person';

function App() {
  return (
    <div className="app">
      <h1>Exemplo de Props no React</h1>
      <Person name="Alice" age={30} gender="Feminino" />
      <Person name="Bob" age={28} gender="Masculino" />
    </div>
  );
}

export default App;
```

No componente `App`, estamos renderizando duas instâncias do componente `Person`. Estamos passando as informações sobre a pessoa como props. Por exemplo, para a primeira pessoa, passamos `name="Alice"`, `age={30}` e `gender="Feminino"`.

O resultado será algo assim:

```
Exemplo de Props no React

Alice
Idade: 30
Gênero: Feminino

Bob
Idade: 28
Gênero: Masculino
```

Neste exemplo, as props permitem que você compartilhe informações entre componentes de maneira eficiente. Cada instância do componente `Person` recebe suas próprias props e exibe as informações corretas. Isso torna seu código mais reutilizável e modular.

## Hierarquia de Componentes 
Os componentes podem ser compostos hierarquicamente, formando uma árvore de componentes. Componentes pais podem renderizar componentes filhos, passar propriedades para eles e controlar seu estado. Isso permite a criação de interfaces complexas divididas em partes menores e gerenciáveis.

Vamos considerar uma aplicação simples que exibe informações sobre usuários.

Neste exemplo, teremos três componentes:

1. `App`: O componente raiz que renderiza a aplicação como um todo.
2. `UserProfile`: Um componente que exibe o perfil de um usuário.
3. `UserList`: Um componente que exibe uma lista de usuários, usando vários perfis `UserProfile`.

Vamos começar definindo os componentes:

1. `UserProfile.js`:

```jsx
import React from 'react';

function UserProfile(props) {
  return (
    <div className="user-profile">
      <h2>{props.name}</h2>
      <p>Email: {props.email}</p>
    </div>
  );
}

export default UserProfile;
```

2. `UserList.js`:

```jsx
import React from 'react';
import UserProfile from './UserProfile';

function UserList(props) {
  const users = props.users;

  return (
    <div className="user-list">
      <h1>Lista de Usuários</h1>
      {users.map((user, index) => (
        <UserProfile key={index} name={user.name} email={user.email} />
      ))}
    </div>
  );
}

export default UserList;
```

3. `App.js`:

```jsx
import React from 'react';
import UserList from './UserList';

const usersData = [
  { name: 'Alice', email: 'alice@example.com' },
  { name: 'Bob', email: 'bob@example.com' },
  { name: 'Carol', email: 'carol@example.com' }
];

function App() {
  return (
    <div className="app">
      <h1>Aplicação de Exemplo</h1>
      <UserList users={usersData} />
    </div>
  );
}

export default App;
```

Neste exemplo, temos uma hierarquia de componentes:

- `App` é o componente raiz que renderiza toda a aplicação.
- `UserList` é um componente que renderiza uma lista de usuários usando vários perfis `UserProfile`.
- `UserProfile` é um componente que exibe as informações de um usuário.

O componente `App` renderiza o componente `UserList`, que por sua vez renderiza múltiplos componentes `UserProfile`. Essa é uma representação simplificada de como a hierarquia de componentes funciona no React, permitindo a composição de componentes menores para construir interfaces mais complexas.
