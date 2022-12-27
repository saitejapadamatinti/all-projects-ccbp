import BlogItem from '../BlogItem'
import './index.css'

const BlogsList = props => {
  const {blogsList} = props
  return (
    <div className="blog-list-div">
      <ul className="ul-item">
        {blogsList.map(each => (
          <BlogItem key={each.id} blogItem={each} />
        ))}
      </ul>
    </div>
  )
}

export default BlogsList
