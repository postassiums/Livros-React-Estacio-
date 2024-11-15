import {  useEffect, useState } from "react"
import { LivroUpdate, LivroResponse, SessionStorageKeys } from "../types"
import LivroLinha from "./LivroLinha"
import Title from "./Title"
import { getLivros } from "../service/get"
import { deleteLivro } from "../service/delete"
import Spinner from "./Spinner"




export default function LivroLista()
{
    const COLUMNS=['Título','Resumo','Editora','Autores']

 

    const [livros,setLivros] =useState<Array<LivroResponse>>([])
    const [loading,setLoading]=useState<boolean>(true)
    

    function getTableColumns()
    {
        return COLUMNS.map(item=>(
           
            <th key={item} scope="col">{item}</th>)
        )

          
    }
    async function onDeleteLivro(id : string)
    {
    
        await deleteLivro(id)
        setLivros(current_livros=>current_livros.filter(item=>item._id!=id))

      
        

        
    }

    useEffect(()=>{
        getLivros()
        .then((response)=>{
            setLoading(true)
            setLivros(response)
        })
        .finally(()=>setLoading(false))
    },[])

    return (
        <>
        <Title title="Catálogo de Livro" >

        </Title>
        <table className="table table-striped">
        <thead className="table-dark">
            
            <tr>
            {getTableColumns()}
            </tr>
        </thead>
        <tbody>
        

            {livros.map((item)=><LivroLinha onDelete={onDeleteLivro} key={item._id} livro={item}>

            </LivroLinha>)}
            
        </tbody>
        </table>
            <div className="d-flex justify-content-center">
                <Spinner style={{width: '4em',height: '4em'}} show={loading}>

                </Spinner>

            </div>


        </>

        


    )
}