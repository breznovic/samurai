import React from 'react'
import {Field, reduxForm} from 'redux-form';

const LoginForm = () => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field type="text" placeholder={'Login'} component={'input'} name={'login'}/>
        </div>
        <div>
            <Field type="text" placeholder={'Password'} component={'input'} name={'password'}/>
        </div>
        <div>
            <Field type="checkbox" component={'input'} name={'rememberMe'}/> Remember me
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

