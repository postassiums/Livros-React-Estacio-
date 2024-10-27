import {  useState } from "react"
import { Livro, SessionStorageKeys } from "../types"
import LivroLinha from "./LivroLinha"
import Title from "./Title"




export default function LivroLista()
{
    const COLUMNS=['Título','Resumo','Editora','Autores']

    let livros_on_storage=sessionStorage.getItem(SessionStorageKeys.LIVROS)
    let existing_livros : Array<Livro> =[]

    if(livros_on_storage!=null)
    {
        existing_livros=JSON.parse(livros_on_storage)
    }

    const [livros,setLivros] =useState<Array<Livro>>(existing_livros)

    function getTableColumns()
    {
        return COLUMNS.map(item=>(
           
            <th key={item} scope="col">{item}</th>)
        )

          
    }
    function onDeleteLivro(index : number)
    {
        let livros_on_storage=sessionStorage.getItem(SessionStorageKeys.LIVROS)
        if (livros_on_storage==null)
        {
            return
        }
        let livros : Array<Livro>=JSON.parse(livros_on_storage)
        livros.splice(index,1)
        setLivros(livros)
        sessionStorage.setItem(SessionStorageKeys.LIVROS,JSON.stringify(livros))
    }



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
            {livros.map((item,index)=><LivroLinha onDelete={onDeleteLivro} index={index} key={index} livro={item}>

            </LivroLinha>)}
            
        </tbody>
        </table>


        </>

        


    )
}