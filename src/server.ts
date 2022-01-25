import express from 'express'; //importar o express
import { router } from './routes/index';

const app = express(); //colocar o express em uma variável, para poder acessar as features dele 

app.use(express.json()); //sempre colocar para não dar erro 
app.use(router);

app.listen(8000, () => console.log("server is running"))