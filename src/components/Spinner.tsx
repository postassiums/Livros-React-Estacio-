import { SpinnerProps } from "../types";


export default function Spinner({show} : SpinnerProps)
{
    function getLoading()
    {
        return show ?
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        : ''
    }
    return ( 
        getLoading()
    )
}