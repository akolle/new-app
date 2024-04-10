/*
const Bloglist = ({blogs, title, handleDelete}) => {
  // const blogs = props.blogs;

  return (  
      <div className="bloglist">
        <h1>{title}</h1>
        {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <h2>{blog.title}</h2>
          <h4>{blog.body}</h4>
          <p>Written by {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
        </div>
    ))}
      </div>
  );
}
*/

const Bloglist = ({blogs, title, handleDelete}) => {
  // const blogs = props.blogs;

  return (  
      <div className="bloglist">
        <h1>{title}</h1>
        {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <h2>{blog.title}</h2>
          <h4>{blog.body}</h4>
        </div>
    ))}
      </div>
  );
}

export default Bloglist;