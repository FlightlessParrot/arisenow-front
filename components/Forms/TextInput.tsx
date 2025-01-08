import { FunctionComponent, useId } from "react";
type inputType='text' | 'email' | 'password';
interface TextInputProps {
    onChange: React.Dispatch<React.SetStateAction<string>>,
    value: string,
    setIsDirty?: React.Dispatch<React.SetStateAction<boolean>>,
    label: string,
    type?: inputType
    }

const TextInput: FunctionComponent<TextInputProps> = ({onChange, value, label, setIsDirty,type}) => {
    const id=useId();
    const inputType = typeof type === 'string' ? type : 'text';
    return ( <div className="relative top-0">
          <input id={id} type={inputType} onFocus={()=>typeof setIsDirty !== 'undefined' ? setIsDirty(true):''} value={value}
           onChange={e=>onChange(e.target.value)}  className="peer border-b border-gray-400 mt-4 mb-2 focus:outline-none" placeholder=""/>
        
        <label htmlFor={id} 
        className="transition duration-150 ease-out absolute peer-placeholder-shown:translate-y-4 peer-focus:translate-y-0 scale-75 peer-focus:scale-75 origin-top-left  peer-placeholder-shown:scale-100 left-0 top-0 text-gray-400 ">
            {label}</label>
            </div> );
}
 
export default TextInput;