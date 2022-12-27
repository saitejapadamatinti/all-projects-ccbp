import './index.css'
import BlogList from '../BlogList'
import UserInfo from '../UserInfo'

const Home = () => (
  <div className="home-container">
    <UserInfo testid="loder" />
    <BlogList />
  </div>
)

export default Home
