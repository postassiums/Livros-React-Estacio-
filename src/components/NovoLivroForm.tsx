import { FormEvent, useEffect, useState } from "react";
import InputComponent from "./InputComponent";
import Title from "./Title";
import TextAreComponent from "./TextAreaComponent";
import SelectComponent from "./SelectComponent";
import { Editora, LivroUpdate, SessionStorageKeys } from "../types";
import { useNavigate } from "react-router-dom";
import { getEditoras } from "../service/get";
import { createLivro } from "../service/post";
import ButtonComponent from "./ButtonComponent";



export default function NovoLivroForm()
{
    
    const [editora_options,setEditoraOptions] = useState<{label: string,value: string}[]>([]);
   

      
    const [titulo,setTitle]=useState<string>('')
    const [resumo,setResumo]=useState<string>('')
    const [autores,setAutores]=useState<string>('')
    const [editora,setEditora]=useState<string>('')
    const [saving,setSaving]=useState<boolean>(false)
    const [editoraLoading,setEditoraLoading]=useState<boolean>(false)

    useEffect(()=>{
        getEditoras()
        .then(editoras_result=>{
            setEditoraLoading(true)
            let options=editoras_result.map(item=>({label: item.nome,value: String(item.codigo)}))
            setEditoraOptions(options)
            setEditora(options[0].value)
    
        }
        )
        .finally(()=>setEditoraLoading(false))

    },[])


    const navigate=useNavigate()
    async function onSubmitForm(e : FormEvent)
    {
        
        e.preventDefault()
        if(!(titulo && resumo && autores && editora))
        {
            return
            
        }
        try{
            setSaving(true)
            let new_livro=new LivroUpdate(titulo,resumo,Number(editora),autores?.split('\n'))
            await createLivro(new_livro)

            
            
            navigate('/catalogo')
        }catch(e)
        {

        }finally{
            setSaving(false)
        }
    }

    return (
        <>
            <Title title="Dados do Livro">

            </Title>
            <form onSubmit={onSubmitForm} >

            
                <div className="form-group mb-3">
                    <InputComponent is_required={true} setState={setTitle} value={titulo} label="Titulo"  >
                    </InputComponent>
                   
                </div>
                <div className="form-group mb-3">
                    <TextAreComponent is_required={true} setState={setResumo} value={resumo} label="Resumo" >

                    </TextAreComponent>
                </div>
                <div className="form-group mb-3">
                    <SelectComponent loading={editoraLoading} is_required={true} label="Editora" setState={setEditora} value={editora} options={editora_options} >

                    </SelectComponent>
                </div>

                <div className="form-group mb-3">
                    <TextAreComponent is_required={true} label="Autores (1 por linha)" value={autores} setState={setAutores}  >

                    </TextAreComponent>
                </div>
                <ButtonComponent onClick={()=>{}} type="submit" label="Salvar Dados" loading={saving}>

                </ButtonComponent>
           
        
            </form>
        </>
    )
}