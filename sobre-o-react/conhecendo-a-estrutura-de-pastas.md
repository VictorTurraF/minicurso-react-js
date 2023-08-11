# Conhecendo a estrutura de pastas

## Projeto Node
Para compilar o nosso código para ser executado como uma página web utilizamos os node. Com ele configuramos o nosso ambiente de desenvolvimento, fazemos o build de produção. Emfim, todas as tarefas referentes ao ciclo de desenvolvimento de software.

Para rodar o projeto em seu computador (local):
```bash
$ yarn dev
```

Para compilar o projeto para produção:
```bash
$ yarn build
```

Para visualizar um "preview" do build de produção:
```bash
$ yarn preview
```

**Os seguintes arquivos e pastas são comuns para projetos em NodeJS:**

📁 **`node_modules/`**
É uma pasta padrão de projetos Node para armazenar

📄 **`package.json`**
Json de configuração de projetos em NodeJS, como ele especifcamos dependência e suas respectivas versões, scripts, e outras informações do pacote.

📄 **`yarn.lock`** ou 📄 `package.lock`
Serve para garantir que as versões exatas dos pacotes sejam instaladas. Isso ajuda a evitar problemas de incompatibilidade que podem ocorrer quando diferentes desenvolvedores têm versões diferentes das dependências em seus projetos.

Os seguintes arquivos são referentes a aplicação:

📄 **`vite.config.js`**
Arquivo de configurações do ViteJS

📄 **`.eslintrc.cjs`**
Arquivo de configurações do ES Lint

📁 **`public/`**
Contentem arquivos estáticos publicos que serão servidos pelo servidor web

📁 **`src/`**
"Source". Arquivos do código fonte (source code). Todos os arquivos desta pasta serão compilados para estáticos de produção.

