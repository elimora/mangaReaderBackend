import express from 'express';
import morgan from 'morgan';
import productsRoutes from "./routes/products.routes";


const app=express(); 

app.use(express.json())
app.use(morgan('dev')); 

app.get('/', (req,res)=>{
    res.json({
        author:'Eli Mora', 
        description:'mi api rest', 
        version:'1'
    })
}); 

app.use('/products',productsRoutes)
export default app; 