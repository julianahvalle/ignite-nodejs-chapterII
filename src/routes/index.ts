import { Router } from 'express';
import { categoriesRoutes } from './categories.routes';
import { specificationsRoutes } from './specifications.routes';
const router = Router();

router.use("/categories", categoriesRoutes); //podemos colocar em "" o nome da categoria para omitir ela dentro do categories route
router.use("/specifications", specificationsRoutes);

export { router };