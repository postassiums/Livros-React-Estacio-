import { apiPost } from ".";
import { LivroUpdate } from "../types";


export async function createLivro(livro : LivroUpdate)
{
    let response=await apiPost('/livros',livro)
    return response.data
}