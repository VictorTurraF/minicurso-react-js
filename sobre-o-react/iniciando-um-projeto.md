# Iniciando um projeto React simples

## Node 
Certifique-se de ter o Node.js e o npm (ou yarn) instalados em seu sistema antes de começar.
```bash
$ node -v
```

## Yarn (Recomendado)
O Yarn é um gerenciador de pacotes para projetos JavaScript. 
As vantagens do Yarn incluem:

**Velocidade**: Uma das principais vantagens do Yarn é a sua velocidade. Ele utiliza um cache local para armazenar os pacotes já baixados, reduzindo significativamente o tempo de download e instalação de pacotes, especialmente em comparação com versões mais antigas do npm.

**Resolução de dependências**: O Yarn tem um algoritmo mais avançado para resolver as dependências dos pacotes, o que pode levar a menos conflitos e problemas em comparação com o npm. Isso é especialmente útil em projetos maiores com muitas dependências.

**Compatibilidade com o npm**: O Yarn é compatível com o ecossistema npm, o que significa que você pode usar pacotes do npm diretamente no Yarn e vice-versa. Isso permite que você aproveite as vantagens do Yarn sem se preocupar com problemas de 
compatibilidade.

Instalando o yarn:
```bash
$ npm install --global yarn
```

Verificando a instalação:
```bash
$ yarn --version
```

> Lembrando de sempre alinhar com time, ou documentar a escolha do gerenciador de pacotes pois quando estamos desenvolvendo é sempre bom que todos estejam utilizando o mesmo gerenciador de pacotes pra aquele projeto.

## Vite
Vite.js é um ambiente de desenvolvimento ultrarrápido e uma estrutura de compilação para a criação de aplicações web front-end. Ele foi projetado para otimizar o processo de desenvolvimento, oferecendo uma experiência de desenvolvimento mais ágil, eficiente e produtiva, especialmente para projetos Vue.js e outras bibliotecas front-end, como React e Preact.

Criando um projeto em React com Vite:
```bash
$ yarn create vite pomodoro-with-todo-list --template react
```

> Vamos utilizar o Vite por ser rápido e por ser um exemplo dos conceitos mais específicos do React. Lembrando que em projetos reais a escolhas das feramentas ou framework deveram atender as expectativas desse projeto real.







