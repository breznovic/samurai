import React from "react";
import {useFormik, Field, Form, Formik} from "formik";

export function LoginForm() {
    const formik = useFormik({
        initialValues: {
            login: '',
            password: ''
        }
        })

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
                console.log({ values, actions });
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
            }}
        >
        <Form>
            <div>
                <Field type='text' id='login' name='login' placeholder='Login'/>
            </div>
            <div>
                <Field type='password' id='password' name='password' placeholder='Password'/>
            </div>
            <div>
                <div>
                    <Field type='checkbox' id='rememberMe' name='rememberMe'/>Remember Me
                </div>
                <button type='submit'>Login</button>
            </div>
        </Form>
        </Formik>
    )
}