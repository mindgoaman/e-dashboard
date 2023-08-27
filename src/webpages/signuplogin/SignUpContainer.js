import React, { useState } from "react";
import Strings from "../../res/Strings";
import SignUpPage from "./SignUpPage";

const SignUpContainer = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //onClickSigUp
    const onClickSingUp = () => {
         console.log("onClickSigUp",name,email,password)
    }

    return (
        <div>
            <SignUpPage
                onChangeName={setName}
                onChangeEmail={setEmail}
                onChangePassword={setPassword}
                onClickSingUp={onClickSingUp}
                name={name}
                email={email}
                password={password}

            />
        </div>
    )
}

export default SignUpContainer;