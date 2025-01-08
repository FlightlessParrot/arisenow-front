'use client'

import PrimatyButton from "@/components/Buttons/PrimaryButton";
import ErrorMessage from "@/components/Errors/ErrorMessage";
import TextInput from "@/components/Forms/TextInput";
import SecondaryHeader from "@/components/SecondaryHeader";
import { useState } from "react";

function Login(){
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');
    return (<div>
        <form onSubmit={e=>e.preventDefault()}>
        <SecondaryHeader>Log into your account</SecondaryHeader>   
        <TextInput value={username} onChange={setUsername} label="Username"  />
        <ErrorMessage>Coś poszło nie tak</ErrorMessage>
        <TextInput value={password} onChange={setPassword} label="Password" type="password"  />
        <ErrorMessage>Coś poszło nie tak</ErrorMessage>
        <div className="flex justify-end">
        <PrimatyButton className="my-2 " onClick={()=>console.log(username+password)}>Log in</PrimatyButton>
        </div>
    </form></div>)
}

export default Login;