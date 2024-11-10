import { apiGet } from ".";
import { Editora,  LivroResponse } from "../types";




export async function getLivros()
{
    return await apiGet<Array<LivroResponse>>('/livros')
}

export async function getEditoras()
{
    return await apiGet<Array<Editora>>('/editoras')
}