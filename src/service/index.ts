import axios from "axios";

const getAxiosInstance=()=>axios.create({baseURL: import.meta.env.VITE_API_URL,responseType: 'json'})

export async function apiGet<T>(url : string)
{
    const response= await getAxiosInstance().get<T>(url)
    return response.data
}

export async function apiPost<T>(url: string,body : any)
{
    const response= await getAxiosInstance().post<T>(url,body)
    return response.data
}
export async function apiDelete<T>(url: string)
{
    const response= await getAxiosInstance().delete<T>(url)
    return response.data
}