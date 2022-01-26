import express from 'express'; //importar o express
import swaggerUi from "swagger-ui-express";
import { router } from './routes/index';
import swaggerFile from "./swagger.json";



const app = express(); //colocar o express em uma variável, para poder acessar as features dele 

app.use(express.json()); //sempre colocar para não dar erro

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router);

app.listen(8000, () => console.log("server is running"))