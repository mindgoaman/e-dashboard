import React from "react";
import Strings from "../../res/Strings";
import '../../pagestyles/PageStyles.css'

const SignUpPage = (props) => {
  
    return (
        <div className={'input_box_container'}>
            <h1>{Strings.REGISTER}</h1>
            <input
                onChange={(name) => props?.onChangeName(name.target.value)}
                value={props?.name}
                className={'input_box'}
                type={'text'}
                placeholder={Strings.ENTER_NAME}
            />
            <input
                onChange={(email) => props?.onChangeEmail(email.target.value)}
                value={props?.email}
                className={'input_box'}
                type={'text'}
                placeholder={Strings.ENTER_EMAIL}
            />
            <input
                onChange={(password) => props?.onChangePassword(password.target.value)}
                value={props?.password}
                className={'input_box'}
                type={'password'}
                placeholder={Strings.ENTER_PASSWORD}
            />
            <button
                onClick={props?.onClickSingUp}
                className={'sign_up_button'}
                type={'button'}
            >
                {Strings.SIGNUP}
            </button>
        </div>
    )
}

export default SignUpPage;