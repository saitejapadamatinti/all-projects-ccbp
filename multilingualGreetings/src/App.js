import {Component} from 'react'

import TabItem from './components/tabItem'
import LanguageItem from './components/languageItem'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {
    activeTabId: languageGreetingsList[0].id,
  }

  onClickeToChange = tabValue => {
    this.setState({activeTabId: tabValue})
  }

  getfilterdProjects = () => {
    const {activeTabId} = this.state
    const filterdProjects = languageGreetingsList.filter(
      eachDetails => eachDetails.id === activeTabId,
    )
    return filterdProjects
  }

  render() {
    const {activeTabId} = this.state
    const filterdProjects = this.getfilterdProjects()

    return (
      <div>
        <ul>
          {languageGreetingsList.map(eachItem => (
            <TabItem
              onClickeToChange={this.onClickeToChange}
              key={eachItem.id}
              eachItem={eachItem}
              activeTabId={activeTabId === eachItem.id}
            />
          ))}
        </ul>
        <ul>
          {filterdProjects.map(eachItem => (
            <LanguageItem
              onClickeToChange={this.onClickeToChange}
              key={eachItem.id}
              eachItem={eachItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
