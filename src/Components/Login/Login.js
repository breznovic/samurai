import { Formik, Form, Field } from 'formik'
import React from 'react'

const LoginForm = (props) => {
    return (
        <div>
            <Formik
                initialValues={{
                    login: '',
                    password: '',
                    checkbox: '',
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                    <div>
                        <label htmlFor='login' />
                        <Field id='login' name='login' placeholder='Login' />
                    </div>
                    <div>
                        <label htmlFor='password' />
                        <Field id='password' name='password' placeholder='Password' />
                    </div>
                    <div>
                        <Field type='checkbox' name='checkbox' />
                        <label>Remember Me</label>
                    </div>
                    <button type="submit">Submit</button>
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