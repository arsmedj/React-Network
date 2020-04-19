import React from 'react'
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Field, reduxForm } from 'redux-form'
import {
  requiredField,
  maxLengthCreator,
} from '../../utils/validators/validators'
import { Textarea } from '../common/FormsControls/FormsControl'

const Dialogs = (props) => {
  let { dialogsPage } = props

  let dialogsElements = props.dialogsPage.dialogs.map((dialog) => {
    return (
      <DialogItem
        name={dialog.name}
        id={dialog.id}
        key={dialog.id}
      ></DialogItem>
    )
  })

  let messagesElements = dialogsPage.messages.map((message) => {
    return (
      <Message
        message={message.message}
        id={message.id}
        key={message.id}
      ></Message>
    )
  })
  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }
  return (
    <div>
      <div className={style.dialogs}>
        <div className={style.dialogsItems}>{dialogsElements}</div>
        <div className={style.messages}>{messagesElements}</div>
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  )
}

export default Dialogs

let maxLength100 = maxLengthCreator(100)

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          validate={[requiredField, maxLength100]}
          component={Textarea}
          name="newMessageBody"
          placeholder="Send message"
        ></Field>
      </div>
      <div>
        <button>Отправить</button>
      </div>
    </form>
  )
}
const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(
  AddMessageForm
)
// export default AddMessageForm;
