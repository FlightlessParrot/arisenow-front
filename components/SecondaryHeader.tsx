import { FunctionComponent } from "react";

interface SecondaryHeaderProps {
    children: React.ReactNode
}

const SecondaryHeader: FunctionComponent<SecondaryHeaderProps> = ({children}) => {
    return (<h2 className="text-amber-600 black:text-amber-200 text-xl my-2">{children} </h2> );
}  


export default SecondaryHeader;