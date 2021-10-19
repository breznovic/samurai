import { Formik, Form, Field } from 'formik'
import React from 'react'

const LoginForm = (props) => {
    return (
        <div>
    <Formik
    initialValues={{
        login: '',
        password: '',
        checkbox: ''
      }}
    >
        <Form>
            <div>
                <Field id='login' name='login' placeholder={'Login'} />
            </div>
            <div>
                <Field id='password' name='password' placeholder={'Password'} />
            </div>
            <div>
            <Field type={'checkbox'} name='Remember Me' /> Remember Me
            </div>
            <div>
                <button>Log in</button>
            </div>
            </Form>
        </Formik>
        </div>
    )
}

const Login = (props) => {
    return <div>
        <h1>Login</h1>
       <LoginForm />
    </div>
}

export default Login