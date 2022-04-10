import React from 'react'
import {Field, reduxForm} from 'redux-form';
import {Input} from "../Common/FormControl/FormControls";
import {required} from "../../utils/validators/validators";

const LoginForm = () => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field type="text"
                   placeholder={'Login'}
                   component={Input}
                   name={'login'}
                   validate={[required]}
            />
        </div>
        <div>
            <Field type="text"
                   placeholder={'Password'}
                   component={Input}
                   name={'password'}
                   validate={[required]}/>
        </div>
        <div>
            <Field type="checkbox" component={Input} name={'rememberMe'}/> Remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = () => {

    const onSubmit = (formData) => {

    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login

