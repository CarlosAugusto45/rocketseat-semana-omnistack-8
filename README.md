# Rocketseat Semana Omnistack 8
### O que é a Semana Omnistack?
A Semana Omnistack é um treinamento online, no qual iremos construir uma aplicação do zero, utilizando NodeJS no back-end, ReactJS no front-end e React Native no mobile. Também entenderemos como cada uma dessas tecnologias funcionam e como elas se integram, além de todos os critérios para a escolha dessas ferramentas. E finalmente, entender como essa stack pode levar as aplicações e a sua carreira de programador para o próximo nível.

### Porque utilizaremos a stack de NodeJS & React & React Native?
Depois de 2015, o JavaScript passou por uma série de mudança para se consolidar como uma das linguagens mais moderna e desde então, sempre há atualizações melhorando os padrões de códigos e eliminando várias bibliotecas que eram triviais. A possibilidade de desenvolver Apps nativos e multiplataformas com uma linguagem moderna, como JavaScript, trazendo produtividade sem abrir mão da performance.

### Aplicação à ser desenvolvida
Uma versão do Tinder para desenvolvedor (Tindev). Um aplicativo com princípio para encontrar outros desenvolvedores que trabalham com a mesma stack e tem os objetivos adjacente, desta forma, criando a possibilidade de networking. A aplicação irá utilizar a API pública do GitHub para capturar os dados.

## Configurando o ambiente de desenvolvimento

### Node
O Node.js é uma plataforma para linguagem Javascript que permite rodar a aplicação em back-end, não sendo necessário o uso de um browser. Roda em uma VM JavaScript V8. <br>
A versão que devemos utilizar, sempre deve ser a LTS (Long Term Support). Para o download do mesmo, é melhor fazer a instalação através do gerenciador de pacotes. 

#### Instalação
Para o Windows, você deve ter instalado o Chocolatey (gerenciador de pacote do Windows). Após isso, deve executar no terminal o seguinte comando: `$ cinst nodejs.install --version 10.16.1` <br>
Lembrando que ao instalar o Node, vem incluso com o gerenciador de pacotes do Node (NPM). <br>
Para os outros sistemas operacionais, seguir o passo-a-passo do seguinte [link](https://nodejs.org/en/download/package-manager/).
 
### NPM (Node Package Manager)
NPM é o nome reduzido de Node Package Manager (Gerenciador de Pacotes do Node). A NPM é duas coisas: Primeiro, e mais importante, é um repositório online para publicação de projetos de código aberto para o Node.js; segundo, ele é um utilitário de linha de comando que interage com este repositório online, que ajuda na instalação de pacotes, gerenciamento de versão e gerenciamento de dependências.

### YARN
O Yarn também é um gerenciador de pacote como o NPM, lançado pelo Facebook em 2016. Para uma comparação mais exaustiva teríamos de comparar versão a versão de NPM e Yarn. Mas basicamente fazem o mesmo, e são compatíveis pois ambas usam o package.json como fonte de informação de que pacotes e versões o projeto precisa.

#### Instalação
Para o Windows, você deve executar no terminal o seguinte comando: `$ choco install yarn`

### Visual Studio Code
Em 2015 foi lançado pela Microsoft um editor de código destinado ao desenvolvimento de aplicações web chamado de Visual Studio Code, ou simplesmente VSCode. Anunciada durante o Build, evento voltado a desenvolvedores que ocorre nos Estados Unidos anualmente, trata-se de uma ferramenta leve e multiplataforma que está disponível tanto para Windows, quanto para Mac OS e Linux e atende a uma gama enorme de projetos, não apenas ASP.NET, como também Node.js. Adicionalmente, o editor possui suporte à sintaxe de diversas linguagens como Python, Ruby, C++. Para a instalação, só fazer o download no seguinte [link](https://code.visualstudio.com/download).

#### Extensões para o VSCode

- Dracula Official <br>
Apenas um tema, não muda nada para o desenvolvimento.

- Material Icon Theme <br>
Adiciona ícones aos arquivos dos projetos para facilitar a visualização.

- Rocketseat ReactJS <br>
Snippets para facilitar o desenvolvimento no React.

- Rocketseat React Native <br>
Snippets para facilitar o desenvolvimento no React Native.

#### Fonte Fira Code
Para a instalação do FireCode só fazer o download nesse [link](https://github.com/tonsky/FiraCode). <br>
Porém para fazer a font-ligature, deve ser feito o seguinte: <br>
Entrar nas opções: File > Preferences > Settings > JSON Settings. (Ou Ctrl+Shift+P e escrever ´ >Settings (JSON) ´ ) <br>
E deve colocar o seguinte código dentro do objeto:
````javascript
"editor.fontFamily": "Fira Code",
"editor.fontLigatures": true
````
