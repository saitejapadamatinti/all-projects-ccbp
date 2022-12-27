import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

export default class App extends Component {
  state = {
    passwordsList: [],
    website: '',
    username: '',
    password: '',
    showPasswords: false,
    searchWord: '',
    filteredList: [],
  }

  getWebsite = e => {
    this.setState({website: e.target.value})
  }

  getUsername = e => {
    this.setState({username: e.target.value})
  }

  getPassword = e => {
    this.setState({password: e.target.value})
  }

  addNewDetails = e => {
    e.preventDefault()
    const {website, username, password} = this.state
    const newPassword = {website, username, password, id: uuidv4()}
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      website: '',
      username: '',
      password: '',
    }))
  }

  deleteItem = id => {
    const {passwordsList} = this.state
    const filtered = passwordsList.filter(each => each.id !== id)
    this.setState({passwordsList: filtered})
  }

  checkedStatus = () => {
    const {showPasswords} = this.state
    this.setState({showPasswords: !showPasswords})
  }

  getSearchWord = e => {
    const {searchWord, passwordsList} = this.state
    this.setState({searchWord: e.target.value})
    const updatedList = passwordsList.filter(each =>
      each.website.toLowerCase().includes(searchWord.toLowerCase()),
    )
    this.setState({filteredList: updatedList})
  }

  render() {
    const {
      website,
      username,
      password,
      passwordsList,
      showPasswords,
      searchWord,
      filteredList,
    } = this.state
    console.log(passwordsList)
    console.log(showPasswords)

    // console.log(website)
    // console.log(password)
    // console.log(username)

    return (
      <div className="container p-5">
        <div className="row">
          <div className="col-12">
            <img
              className="logo"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              alt="app logo"
            />
          </div>
        </div>
        <div className="row cardBackground mt-5">
          <div className="col-12 d-md-none">
            <img
              className="w-100"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
            />
          </div>
          <div className="col-md-6 inputCard mt-3 p-3">
            <h1 className="text-light">Add New Password</h1>
            <form>
              <div className="input-group bg-light mb-3">
                <img
                  className="input-group-addon inputIcon"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                />
                <input
                  type="text"
                  value={website}
                  onChange={this.getWebsite}
                  placeholder="Enter Website"
                  className="form-control"
                />
              </div>
              <div className="input-group bg-light mb-3">
                <img
                  className="input-group-addon inputIcon"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                />
                <input
                  type="text"
                  value={username}
                  onChange={this.getUsername}
                  placeholder="Enter Username"
                  className="form-control"
                />
              </div>
              <div className="input-group bg-light mb-3">
                <img
                  className="input-group-addon inputIcon"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                />
                <input
                  type="password"
                  value={password}
                  onChange={this.getPassword}
                  placeholder="Enter Password"
                  className="form-control"
                />
              </div>
              <div className="text-right">
                <button
                  onClick={this.addNewDetails}
                  type="submit"
                  className="btn btn-primary"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <img
              className="w-100 d-none d-md-block"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 cardBackground mt-5 text-light">
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <h1 className="mr-3">Your Passwords</h1>
                <p className="count">
                  {searchWord === ''
                    ? passwordsList.length
                    : filteredList.length}
                </p>
              </div>
              <div className="d-flex bg-light">
                <img
                  className="inputIcon"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                />
                <input
                  className="form-control"
                  onChange={this.getSearchWord}
                  type="search"
                />
              </div>
            </div>
            <hr className="bg-light" />
            <div className="text-right">
              <input
                id="showPassword"
                type="checkbox"
                onClick={this.checkedStatus}
              />
              <label className="ml-2" htmlFor="showPassword">
                Show passwords
              </label>
            </div>
            <ul>
              {filteredList.length === 0 ? (
                <div className="text-center">
                  <img
                    className="passwordImage"
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                    alt="no passwords"
                  />
                  <p className="noPasswordsText">No Passwords</p>
                </div>
              ) : null}
              {passwordsList.length === 0 ? (
                <div className="text-center">
                  <img
                    className="passwordImage"
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                    alt="no passwords"
                  />
                  <p className="noPasswordsText">No Passwords</p>
                </div>
              ) : (
                passwordsList
                  .filter(each =>
                    each.website
                      .toLowerCase()
                      .includes(searchWord.toLowerCase()),
                  )
                  .map(each => (
                    <li key={each.id}>
                      <div>
                        <p className="nameLetter mr-3">{each.website[0]}</p>
                      </div>
                      <div>
                        <p>{each.website}</p>
                        <p>{each.username}</p>
                        {showPasswords ? (
                          <p>{each.password}</p>
                        ) : (
                          <img
                            className="stars"
                            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                            alt="stars"
                          />
                        )}
                      </div>
                      <div>
                        <button
                          testid="delete"
                          type="submit"
                          onClick={() => this.deleteItem(each.id)}
                          className="delButton"
                        >
                          <img
                            className="inputIcon"
                            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                            alt="delete"
                          />
                        </button>
                      </div>
                    </li>
                  ))
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
