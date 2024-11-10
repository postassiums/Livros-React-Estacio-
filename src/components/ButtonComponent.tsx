import { ButtonProps } from "../types"
import Spinner from "./Spinner"


export default function ButtonComponent({label,loading=false,type='submit'} : ButtonProps)
{
   
    return (
        <button type={type} className="btn btn-primary text-center">
            <Spinner show={loading}>

            </Spinner>
            <span> {label}</span>
           

        </button>
    )
}