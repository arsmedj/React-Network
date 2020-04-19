import React from 'react'
import style from './ProfileInfo.module.css'
class ProfileStatus extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editMode: false,
      status: this.props.status,
    }
  }

  activateEditMode = () => {
    this.setState({ editMode: true })
  }
  deActivateEditMode = () => {
    this.setState({ editMode: false })
    this.props.updateStatus(this.state.status)
  }
  onStatusChange = (e) => {
    this.setState({ status: e.target.value })
    console.log(this.state.status)
  }
  render() {
    if (this.state.editMode === false) {
      // debugger
      return (
        <div>
          <div>
            <span
              className={style.status}
              onDoubleClick={this.activateEditMode}
            >
              {this.props.status}
            </span>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <input
            onChange={this.onStatusChange}
            autoFocus={true}
            onBlur={this.deActivateEditMode}
            value={this.state.status}
          />
        </div>
      )
    }
  }
}

export default ProfileStatus
