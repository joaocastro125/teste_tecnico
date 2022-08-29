import express, { Request, Response } from 'express';
import path from 'path'
import validator from 'validator'
import dotenv from 'dotenv'
import routerApi from './Router/api'

const app=express();
 app.use(express.static(path.join(__dirname,'../public')))
 app.use(express.json())
 app.use(express.urlencoded({extended:true}))
 app.use("/api",routerApi)
 app.use((req:Request,res:Response)=>{
    res.status(404)
    res.json({error:"Endpoint não encontrado"})
 })

app.listen(process.env.PORT||4000)