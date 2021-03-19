import pool from '../database'

export  const creatProduts= async(req,res)=>{
    try {
        const {nombre,categoria,nunCap,imgUrl}=req.body; 
        // const newTodo=await pool.query("INSERT INTO productos(nombre, categoria, nunCap, imgUrl) VALUES ($1,$2,$3,$4) RETURNING *",
        //  [nombre,categoria,nunCap,imgUrl]
        //  ); 
        const newTodo=await pool.query(`INSERT INTO productos(nombre, categoria, "nunCap", "imgUrl") VALUES ('${nombre}','${categoria}',${nunCap},'${imgUrl}') RETURNING *`);
        res.json(newTodo.rows[0]); 

       // console.log(`INSERT INTO productos(nombre, categoria, "nunCap", "imgUrl") VALUES ('${nombre}','${categoria}',${nunCap},'${imgUrl}')`)
       

    } catch (error) {
        console.error(error.message)
    }
}

export  const getProduts=(req,res)=>{
    res.json('selecionando comics')
}

export  const getProdutById=(req,res)=>{
    
}

export  const updateProdutById=(req,res)=>{
    
}

export  const deleteProdutById=(req,res)=>{
    
}