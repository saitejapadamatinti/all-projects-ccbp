import {Component} from 'react'
import './index.css'

class TextEditor extends Component {
  state = {
    inputText: '',
    saveBtnClicked: false,
  }

  inputContent = event => {
    this.setState({inputText: event.target.value})
  }

  saveBtn = () => {
    this.setState(prevState => ({saveBtnClicked: !prevState.saveBtnClicked}))
  }

  //   editbtn = () => {
  //     this.setState({saveBtnClicked: false, editBrnClicked: true})
  //   }

  //   saveBtn = () => {
  //     this.setState({saveBtnClicked: true, editBrnClicked: false})
  //   }

  render() {
    const {inputText, saveBtnClicked} = this.state

    return (
      <div className="main-div">
        <div className="text-div">
          <h1>Editable Text Input</h1>
          {saveBtnClicked ? (
            <div>
              <p>{inputText}</p>
              <button type="button" onClick={this.saveBtn}>
                Edit
              </button>
            </div>
          ) : (
            <div>
              <input
                value={inputText}
                onChange={this.inputContent}
                type="text"
              />
              <button type="button" onClick={this.saveBtn}>
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default TextEditor
