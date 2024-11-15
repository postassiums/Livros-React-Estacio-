import { useState } from "react";
import { LivroLinhaProps } from "../types";
import ButtonComponent from "./ButtonComponent";







export default function LivroLinha({livro,onDelete} : LivroLinhaProps)
{
    const [loading,setLoading]=useState<boolean>(false)
    async function onButtonClick()
    {
        try{
            setLoading(true)
            await onDelete(livro._id)
        }catch(e)
        {

        }finally{
            setLoading(false)
        }
    }

    return (
        <tr>
            <td >
                <div >
                    <div className="w-100">{livro.titulo}</div>
                    <ButtonComponent  onClick={onButtonClick} type="button" label="Excluir" className="btn btn-danger mt-3" loading={loading}>

                    </ButtonComponent>
                   
                </div>
                
            </td>
            <td>{livro.resumo}</td>
            <td>{livro.editora}</td>
            <td>
                <ul>
                    {livro.autores.map(item=><li key={item}  > {item} </li>)}
                </ul>
            </td>


        </tr>
    )
}