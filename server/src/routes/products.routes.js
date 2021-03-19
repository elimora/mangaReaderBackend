import { Router } from "express";
const router= Router(); 

import * as productsCtrl from '../controllers/products.controller';

router.post('/',productsCtrl.creatProduts); 

router.get('/',productsCtrl.getProduts); 

router.get('/:productId',productsCtrl.getProdutById); 

router.put('/:productId',productsCtrl.getProdutById);

router.delete('/:productId',productsCtrl.deleteProdutById); 

export default router; 