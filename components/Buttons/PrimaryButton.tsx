import { FunctionComponent } from "react";

interface PrimatyButtonProps {
    children: React.ReactNode,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    className?: string
}
 
const PrimatyButton: FunctionComponent<PrimatyButtonProps> = ({children, onClick, className}) => {
    const onClickHandler= typeof onClick !=='undefined' ? onClick : ()=>'';
    return ( <button onClick={onClickHandler} className={"bg-amber-600 text-white p-2 rounded "+(typeof className !== 'undefined' ? className:'')}>
        {children}
    </button> );
}
 
export default PrimatyButton;