import {useState} from 'react'
import HistoryItem from './components/HistoryItem'
import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
const App = () => {
  const [list, setList] = useState(initialHistoryList)
  const [searchword, setSearchword] = useState('')

  const searchTerm = e => {
    const searchedWord = e.target.value
    setList(
      list.filter(each =>
        each.title.toLowerCase().includes(searchedWord.toLowerCase()),
      ),
    )
  }

  const deleteItem = id => {
    setList(list.filter(each => each.id !== id))
    console.log(id)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="p-3 header d-flex">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
                alt="app logo"
              />
            </div>
            <div className="searchBox m-auto">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
              <input
                onChange={searchTerm}
                className="searchbar"
                type="search"
              />
            </div>
          </div>
        </div>
        <div className="col-12 mt-3">
          {list.length === 0 ? <p>There is no history to show</p> : null}
          <ul className="historyItems p-3">
            {list.map(each => (
              <HistoryItem
                deleteItem={deleteItem}
                key={each.id}
                details={each}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default App
