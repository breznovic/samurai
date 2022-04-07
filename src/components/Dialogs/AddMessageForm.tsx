import React from 'react'
import {Field, reduxForm} from 'redux-form';

export const AddMessageForm = () => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={'textarea'} name='newMessageBody' placeholder='Enter your message'/>
        </div>
        <div>
            <button>Send message</button>
        </div>
    </form>
}

export const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)