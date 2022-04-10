import React from 'react'
import {Field, reduxForm} from 'redux-form';
import {TextArea} from "../Common/FormControl/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

export const AddMessageForm = () => {

    const maxLength50 = maxLengthCreator(50)

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={TextArea}
                   name='newMessageBody'
                   placeholder='Enter your message'
                   validate={[required, maxLength50]}
            />
        </div>
        <div>
            <button>Send message</button>
        </div>
    </form>
}

export const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)