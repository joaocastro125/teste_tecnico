import {Router} from 'express'
import *as ApiController from '../controller/apiController'

const router=Router()

router.post("/products",ApiController.InsercaoProducts)
router.get("/products",ApiController.listProducts)
router.get("/products/:id",ApiController.getProducts)
router.put("/products/:id",ApiController.updateProducts)
router.delete("/products/:id",ApiController.deleteProducts)


export default router