import { apiDelete } from ".";


export async function deleteLivro(id : string)
{
    return await apiDelete(`/livros/${id}`)
}