import {Request,Response} from 'express'

import {Products} from '../models/Products'


export const InsercaoProducts=async(req:Request,res:Response)=>{
    let {name,cod}=req.body
   let products= await Products.create({name,cod})
   res.status(200)
    res.json({id:products.id,name,cod})
}
export const listProducts=async(req:Request,res:Response)=>{
   
   let list= await Products.findAll()
   
    res.json({list})
}

export const getProducts=async(req:Request,res:Response)=>{
     let {id}=req.params
    let getProducts= await Products.findByPk(id)
    if(getProducts){
        res.json({getProducts})
    }else{
        res.json({error:"Produto não encontrar!"})
    }
    
    
 }

 export const updateProducts=async(req:Request,res:Response)=>{
    let {id}=req.params
    let {name,cod}=req.body
   let updateProducts= await Products.findByPk(id)
   if(updateProducts){
      updateProducts.name=name
      updateProducts.cod=cod
      await updateProducts.save()
       res.json({updateProducts})
   }else{
       res.json({error:"Produto não encontrar!"})
   }
   
   
}

export const deleteProducts=async(req:Request,res:Response)=>{
    let {id}=req.params
    await Products.destroy({where:{id}})
    res.json({})
   
   
}