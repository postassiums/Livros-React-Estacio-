import {  useEffect, useState } from "react"
import { LivroUpdate, LivroResponse, SessionStorageKeys } from "../types"
import LivroLinha from "./LivroLinha"
import Title from "./Title"
import { getLivros } from "../service/get"
import { deleteLivro } from "../service/delete"




export default function LivroLista()
{
    const COLUMNS=['Título','Resumo','Editora','Autores']

 

    const [livros,setLivros] =useState<Array<LivroResponse>>([])

    function getTableColumns()
    {
        return COLUMNS.map(item=>(
           
            <th key={item} scope="col">{item}</th>)
        )

          
    }
    async function onDeleteLivro(id : string)
    {
        try{
            await deleteLivro(id)
            setLivros(current_livros=>current_livros.filter(item=>item._id!=id))
        }catch(e)
        {

        }finally{
            
        }

        
    }

    useEffect(()=>{
        getLivros()
        .then((response)=>{
            setLivros(response)
        })
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


        </>

        


    )
}