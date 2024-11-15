

export class LivroUpdate{

    titulo : string
    resumo : string
    codEditora: number
    autores: string[]

    constructor(titulo : string,resumo: string,codEditora: number,autores: string[])
    {
        this.titulo=titulo
        this.resumo=resumo
        this.codEditora=codEditora
        this.autores=autores
    }
}

export interface LivroResponse{
    _id: string
    titulo: string
    resumo: string
    editora: string
    autores: string[]
}

export interface Editora{
    nome: string
    codigo: number
}




export interface InputComponentProps{
    label: string,
    placeholder?: string,
    value: any,
    setState: React.Dispatch<React.SetStateAction<string>>,
    is_required: boolean
}

export enum SessionStorageKeys{
    LIVROS='livros'
}
export interface SpinnerProps{
    show: boolean
    style?: any
}
export interface ButtonProps{
    loading: boolean,
    label: string,
    type: 'submit' | 'button'
    className: string
    onClick: ()=>any
}

export interface TextAreaComponentProps extends Pick<InputComponentProps,'label' | 'placeholder' | 'value'>{
    setState:  React.Dispatch<React.SetStateAction<string>>
    is_required: boolean
}

export interface SelectComponentProps{
    label: string,
    value: any,
    setState:  React.Dispatch<React.SetStateAction< string>>
    options: {label: string,value: string}[],
    is_required: boolean
}

export interface TitleProps{
    title: string
}

export class NavBarLink{
    to: string
    label: string
    constructor(to: string,label: string)
    {
        this.to=to
        this.label=label
    }
}

export interface LivroLinhaProps{
    livro: LivroResponse
    onDelete: (_id: string)=>Promise<void>
}