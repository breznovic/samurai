import React from "react";
import {Field, Form, Formik} from "formik";

export const LoginForm = () => {

    const userValodate = (values: any) => {
        const errors = {}
        return errors
    }

    return <div>

        <Formik
            initialValues={{login: '', password: ''}}
            validate={userValodate}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                }, 400);
            }}
        >
            {({
                  values,
                  handleChange,
                  handleSubmit,
              }) => (
                <Form onSubmit={handleSubmit}>
                    <div>
                        <input
                            id="login"
                            name="login"
                            type="login"
                            onChange={handleChange}
                            value={values.login}
                            placeholder='Login'
                        /></div>
                    <div>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            onChange={handleChange}
                            value={values.password}
                            placeholder='Password'
                        /></div>
                    <div>
                        <Field type='checkbox' id='rememberMe' name='rememberMe'/>Remember Me
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    </div>
};