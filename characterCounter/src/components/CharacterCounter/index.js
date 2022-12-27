import {Component} from 'react'
import {v4} from 'uuid'

import WordItem from '../Items'

import {
  MainContainer,
  InnerContainer,
  LeftContainer,
  RightContainer,
  LeftHeading,
  RightHeading,
  Button,
  InputItem,
  Img,
  WordsListContainer,
} from './styledComponents'

class CharacterCounter extends Component {
  state = {wordsList: [], wordInput: ''}

  onAddWord = event => {
    event.preventDefault()
    const {wordInput} = this.state

    const newWord = {
      id: v4(),
      word: wordInput,
    }

    this.setState(prevState => ({
      wordsList: [...prevState.wordsList, newWord],
      wordInput: '',
    }))
  }

  onChangeWordInput = event => {
    this.setState({wordInput: event.target.value})
  }

  render() {
    const {wordInput, wordsList} = this.state

    return (
      <MainContainer>
        <InnerContainer>
          <LeftContainer>
            <LeftHeading>Count the characters like a Boss...</LeftHeading>
            {wordsList.length === 0 ? (
              <Img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            ) : (
              <WordsListContainer>
                {wordsList.map(eachWord => (
                  <WordItem key={eachWord.id} wordDetails={eachWord} />
                ))}
              </WordsListContainer>
            )}
          </LeftContainer>
          <RightContainer>
            <RightHeading>Character Counter</RightHeading>
            <form onSubmit={this.onAddWord}>
              <InputItem
                type="text"
                id="word"
                value={wordInput}
                placeholder="Enter the Characters here"
                onChange={this.onChangeWordInput}
              />
              <Button type="submit">Add</Button>
            </form>
          </RightContainer>
        </InnerContainer>
      </MainContainer>
    )
  }
}

export default CharacterCounter
