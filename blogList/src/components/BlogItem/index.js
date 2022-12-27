import './index.css'

const BlogItem = props => {
  const {blogItem, unqId} = props
  const {title, description, publishedDate} = blogItem
  return (
    <li className="list-item">
      <div className="blog-item">
        <h4>{title}</h4>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
      <hr />
    </li>
  )
}

export default BlogItem
