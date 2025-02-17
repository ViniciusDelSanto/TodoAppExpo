# To do App

# 1. Visão Geral
O TodoAppExpo é um aplicativo de gerenciamento de tarefas (To-Do) desenvolvido com React Native e Expo.\
Ele permite adicionar, mover e arquivar tarefas, além de suportar tema escuro (dark mode).

# 2. FuncionalidadesAdicionar Tarefas: Crie novas tarefas com título e descrição.
1. Mover Tarefas: Mova tarefas entre os status "Todo", "Doing" e "Done".
2. Arquivar Tarefas: Arquivar tarefas concluídas.
3. Tema Escuro: Alternar entre tema claro e escuro.
4. Hotbar e Títulos Dinâmicos: A barra de navegação inferior e os títulos das páginas mudam de cor com o tema.

# 3. Tecnologias Utilizadas
1. React Native: Framework para desenvolvimento de aplicativos móveis.
2. Expo: Plataforma para desenvolvimento rápido de aplicativos React Native.
3. Styled Components: Biblioteca para estilização de componentes.
4. React Navigation: Biblioteca para navegação entre telas.
5. React Context: Gerenciamento de estado global (tarefas e tema).

# 4. Estrutura do Projeto
```
TodoAppExpo/
├── src/
│   ├── components/
│   │   ├── TaskCard.js
│   ├── context/
│   │   ├── TaskContext.js
│   │   ├── ThemeContext.js
│   ├── screens/
│   │   ├── TodoScreen.js
│   │   ├── DoingScreen.js
│   │   ├── DoneScreen.js
├── App.js
├── .gitignore
├── README.md
├── package.json
```

## Descrição dos Arquivos
src/components/: Contém componentes reutilizáveis, como o TaskCard.\

src/context/: Contém os contextos globais para gerenciar tarefas (TaskContext) e tema (ThemeContext).\

src/screens/: Contém as telas do aplicativo (TodoScreen, DoingScreen, DoneScreen).\

App.js: Ponto de entrada do aplicativo, onde a navegação e o tema são configurados.\

.gitignore: Ignora arquivos desnecessários, como node_modules e builds.\

README.md: Documentação do projeto (este arquivo).\

package.json: Lista as dependências e scripts do projeto.\

# 5. Como Executar o Projeto

### Siga os passos abaixo para executar o projeto localmente:

Pré-requisitos
1. Node.js (versão LTS recomendada)

2. Expo CLI

```npm install -g expo-cli```

3. Git (opcional)

## Passos

### Clone o repositório:
```
git clone https://github.com/ViniciusDelSanto/TodoAppExpo.git
```

### Navegue até a pasta do projeto:

```
cd TodoAppExpo
```

### Instale as dependências:

```
npm install
```

### Execute o projeto:

```
npm start
```

### Escaneie o QR code com o aplicativo Expo Go no seu celular ou use um emulador.


# 6. Como o Tema Escuro Funciona

O tema escuro é gerenciado pelo ThemeContext, que fornece as cores e o estado do tema para toda a aplicação.\
Ao alternar o tema:\
As cores de fundo, texto e componentes são atualizadas.\
A barra de navegação inferior (BottomTabNavigator) e os títulos das páginas mudam de cor.

## Cores do Tema

### Tema Claro

| Item  | Código Hex |
| ------------- |:-------------:|
| Fundo     | #FFFFFF    |
| Texto     | #000000     |
| Fundo dos cards      | #F5F5F5    |
| Botões      | #007BFF    |

### Tema Escuro

| Item  | Código Hex |
| ------------- |:-------------:|
| Fundo     | #121212   |
| Texto     | #FFFFFF   |
| Fundo dos cards      | #1E1E1E   |
| Botões      | #BB86FC    |


# 7. Como Contribuir

## Contribuições são bem-vindas! Siga os passos abaixo:

### Faça um fork do projeto.

1. Crie uma branch para sua feature

```git checkout -b feature/nova-feature```

2. Commit suas mudanças

```git commit -m 'Adiciona nova feature'```

3. Faça push para a branch 
```git push origin feature/nova-feature```

4. Abra um Pull Request.

# 8. Contato

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato:


GitHub: https://github.com/ViniciusDelSanto

E-mail: [vinimail7@gmail.com]

Desenvolvido com ❤️ por Vinicius Del Santo.


# 9. Capturas de Tela

_**Ainda a adicionar**_