import React, { FunctionComponent } from "react";

interface ErrorMessageProps {
    children: React.ReactNode
}
 
const ErrorMessage: FunctionComponent<ErrorMessageProps> = ({children}) => {
    return (<p  className="text-red-500 text-xs">{children}</p>  );
}
 
export default ErrorMessage;