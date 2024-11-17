import { SelectComponentProps } from "../types"


export default function SelectComponent({label,options,setState,value,is_required=false,loading=false} : SelectComponentProps)
{
    const random_id=String(new Date().getTime())
    function getOptions()
    {
        return options.map((option,index)=><option value={option.value} key={index} >{option.label} </option>)
    }

    return (
        <>
            <label htmlFor={random_id}>{label}</label>
            <select disabled={loading} required={is_required} onChange={data=>setState(String(data.target.value))} value={value} className="form-select" id={random_id}>
                {getOptions()}
            
            </select>
        </>
    )
}