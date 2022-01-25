
## Configurações iniciais
- yarn init -y
- yarn add express
- yarn add typescript
- yarn tsc --init
- configurar o outDir:"./dist"
 

## Configurando o TS node dev para converter o typescript para js:
yarn add ts-node-dev -D

Configuração no package.json:
`"scripts": {
    "dev": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules --respawn src/server.ts"  
  },`
  --tanspile-only -> não vai acusar erro no momento do desenvolvimento, irá acusar somente no build
  --ignore-watch node_modules -> não fica olhando as mudanças da pasta de node_modules
  --respawn -> da o reload quando tiver alguma alteração no código 
  --inspect -> possibilida que o debug se conecte com a aplicação 
  
## Configuração tsconfig.json
- Comentar o strict -> a responsabilidade será do typescript

## Configuração debugger 
-ir na área de debug e "create a lauch json file"
- type:"node",
- request:"attach",
- excluir a parte de program 
- adicionar --inspect em dev dentro de packege.json

## Criando rotas
Exportar Routes do express 