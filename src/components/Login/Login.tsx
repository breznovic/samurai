import React from 'react'
import {Field, reduxForm} from 'redux-form';
import {Input} from "../Common/FormControl/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/appReducer";
import {Redirect} from "react-router-dom";
import classes from '../Common/FormControl/FormControl.module.css'

const LoginForm = () => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field type="text"
                   placeholder={'Email'}
                   component={Input}
                   name={'email'}
                   validate={[required]}
            />
        </div>
        <div>
            <Field type={'password'}
                   placeholder={'Password'}
                   component={Input}
                   name={'password'}
                   validate={[required]}
            />
        </div>
        <div>
            <Field type="checkbox" component={Input} name={'rememberMe'}/> Remember me
        </div>
        {props.error && <div className={classes.formSummaryError}>
            {props.error}
        </div>
        }
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = () => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)

