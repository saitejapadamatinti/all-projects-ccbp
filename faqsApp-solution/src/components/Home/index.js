import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import Slider from 'react-slick'

import Header from '../Header'

import PostItem from '../PostItem'

import SearchContext from '../../context/SearchContext'

import SearchPosts from '../SearchPosts'

import './index.css'

const apiConstantStories = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  progress: 'IN_PROGRESS',
}

const apiConstantPosts = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  progress: 'IN_PROGRESS',
}

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
  ],
}

class Home extends Component {
  state = {
    storiesApiStatus: apiConstantStories.initial,
    storiesList: [],
    postsApiStatus: apiConstantPosts.initial,
    postsList: [],
  }

  componentDidMount() {
    this.getStoriesList()
    this.getPostsList()
  }

  getPostsList = async () => {
    this.setState({postsApiStatus: apiConstantPosts.progress})
    const url = 'https://apis.ccbp.in/insta-share/posts'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const {posts} = data
      const fetchedData = posts.map(e => ({
        createdAt: e.created_at,
        likesCount: e.likes_count,
        postId: e.post_id,
        profilePic: e.profile_pic,
        userId: e.user_id,
        userName: e.user_name,
        postDetails: {
          caption: e.post_details.caption,
          imageUrl: e.post_details.image_url,
        },
        comments: e.comments.map(ei => ({
          comment: ei.comment,
          userId: ei.user_id,
          userName: ei.user_name,
        })),
      }))
      this.setState({postsList: fetchedData})
      this.setState({postsApiStatus: apiConstantPosts.success})
    } else {
      this.setState({postsApiStatus: apiConstantPosts.failure})
    }
  }

  postsSuccess = () => {
    const {postsList} = this.state
    return (
      <div className="post-success">
        <ul className="posts-list-container">
          {postsList.map(e => (
            <PostItem key={e.postId} post={e} />
          ))}
        </ul>
      </div>
    )
  }

  postsSuccessDark = () => {
    const {postsList} = this.state
    return (
      <div className="post-success dark-cont">
        <ul className="posts-list-container">
          {postsList.map(e => (
            <PostItem key={e.postId} post={e} />
          ))}
        </ul>
      </div>
    )
  }

  failurePostsButton = () => {
    this.getPostsList()
  }

  postsFailure = () => (
    <div className="posts-failure-container">
      <img
        src="https://res.cloudinary.com/ddxkcazf7/image/upload/v1666350349/alert-triangle_3_rat0j9.png"
        alt="failure view"
        className="triangle"
      />
      <p>Something went wrong. Please try again</p>
      <button
        type="button"
        className="nf-button"
        onClick={this.failurePostsButton}
      >
        Try again
      </button>
    </div>
  )

  postsFailureDark = () => (
    <div className="posts-failure-container">
      <img
        src="https://res.cloudinary.com/ddxkcazf7/image/upload/v1666350349/alert-triangle_3_rat0j9.png"
        alt="failure view"
        className="triangle"
      />
      <p className="wh">Something went wrong. Please try again</p>
      <button
        type="button"
        className="nf-button"
        onClick={this.failurePostsButton}
      >
        Try again
      </button>
    </div>
  )

  postsRender = () => (
    <div className="loader-success-container">
      <Loader type="TailSpin" color="#4094EF" height={50} width={50} />
    </div>
  )

  postsRenderDark = () => (
    <div className="loader-success-container">
      <Loader type="TailSpin" color="white" height={50} width={50} />
    </div>
  )

  getStoriesList = async () => {
    this.setState({storiesApiStatus: apiConstantStories.progress})
    const url = 'https://apis.ccbp.in/insta-share/stories'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const fetchedObject = {
        usersStories: data.users_stories,
      }
      const {usersStories} = fetchedObject
      const fetchedArray = usersStories.map(e => ({
        storyUrl: e.story_url,
        userId: e.user_id,
        userName: e.user_name,
      }))
      this.setState({storiesList: fetchedArray})
      this.setState({storiesApiStatus: apiConstantStories.success})
    } else {
      this.setState({storiesApiStatus: apiConstantStories.failure})
    }
  }

  storiesSuccess = () => {
    const {storiesList} = this.state
    return (
      <Slider {...settings}>
        {storiesList.map(eachLogo => {
          const {userId, storyUrl, userName} = eachLogo
          return (
            <li className="li-item-slider" key={userId}>
              <img
                className="slider-item-img"
                src={storyUrl}
                alt="user story"
              />
              <p className="slider-para">{userName}</p>
            </li>
          )
        })}
      </Slider>
    )
  }

  storiesSuccessDark = () => {
    const {storiesList} = this.state
    return (
      <Slider {...settings}>
        {storiesList.map(eachLogo => {
          const {userId, storyUrl, userName} = eachLogo
          return (
            <li className="li-item-slider" key={userId}>
              <img
                className="slider-item-img"
                src={storyUrl}
                alt="user story"
              />
              <p className="slider-para wh">{userName}</p>
            </li>
          )
        })}
      </Slider>
    )
  }

  storiesRender = () => (
    <div className="loader-container">
      <Loader type="TailSpin" color="#4094EF" height={50} width={50} />
    </div>
  )

  storiesRenderDark = () => (
    <div className="loader-container">
      <Loader type="TailSpin" color="white" height={50} width={50} />
    </div>
  )

  failureStoriesButton = () => {
    this.getStoriesList()
  }

  storiesFailure = () => (
    <div className="failure-stories-container">
      <img
        src="https://res.cloudinary.com/ddxkcazf7/image/upload/v1666370726/Group_7522_4_iabvky.png"
        alt="failure view"
        className="stories-failure-img"
      />
      <p className="h-last">Something went wrong. Please try again</p>
      <button
        type="button"
        className="nf-button"
        onClick={this.failureStoriesButton}
      >
        Try again
      </button>
    </div>
  )

  storiesFailureDark = () => (
    <div className="failure-stories-container">
      <img
        src="https://res.cloudinary.com/ddxkcazf7/image/upload/v1666370726/Group_7522_4_iabvky.png"
        alt="failure view"
        className="stories-failure-img"
      />
      <p className="h-last wh">Something went wrong. Please try again</p>
      <button
        type="button"
        className="nf-button"
        onClick={this.failureStoriesButton}
      >
        Try again
      </button>
    </div>
  )

  storiesAllMethods = () => {
    const {storiesApiStatus} = this.state

    switch (storiesApiStatus) {
      case apiConstantStories.success:
        return this.storiesSuccess()
      case apiConstantStories.failure:
        return this.storiesFailure()
      case apiConstantStories.progress:
        return this.storiesRender()
      default:
        return null
    }
  }

  storiesAllMethodsDark = () => {
    const {storiesApiStatus} = this.state

    switch (storiesApiStatus) {
      case apiConstantStories.success:
        return this.storiesSuccessDark()
      case apiConstantStories.failure:
        return this.storiesFailureDark()
      case apiConstantStories.progress:
        return this.storiesRenderDark()
      default:
        return null
    }
  }

  postsMethods = () => {
    const {postsApiStatus} = this.state
    switch (postsApiStatus) {
      case apiConstantStories.success:
        return this.postsSuccess()
      case apiConstantStories.failure:
        return this.postsFailure()
      case apiConstantStories.progress:
        return this.postsRender()
      default:
        return null
    }
  }

  postsMethodsDark = () => {
    const {postsApiStatus} = this.state
    switch (postsApiStatus) {
      case apiConstantStories.success:
        return this.postsSuccessDark()
      case apiConstantStories.failure:
        return this.postsFailureDark()
      case apiConstantStories.progress:
        return this.postsRenderDark()
      default:
        return null
    }
  }

  render() {
    return (
      <SearchContext.Consumer>
        {value => {
          const {isSearchValue, searchVal, isDarkTheme} = value
          const res = searchVal.length !== 0 && isSearchValue
          return (
            <>
              {isDarkTheme ? (
                <div className="dark-cont">
                  <Header />
                  {res ? (
                    <SearchPosts inputSearch={searchVal} />
                  ) : (
                    <>
                      <div className="home-card-1">
                        {this.storiesAllMethodsDark()}
                      </div>
                      <div>{this.postsMethodsDark()}</div>
                    </>
                  )}
                </div>
              ) : (
                <>
                  <Header />
                  {res ? (
                    <SearchPosts inputSearch={searchVal} />
                  ) : (
                    <>
                      <div className="home-card-1">
                        {this.storiesAllMethods()}
                      </div>
                      <div>{this.postsMethods()}</div>
                    </>
                  )}
                </>
              )}
            </>
          )
        }}
      </SearchContext.Consumer>
    )
  }
}

export default Home
