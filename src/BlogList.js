import {Link} from 'react-router-dom'

// const BlogList = (props) => {
const BlogList = ({blogs, title, handleDelete}) => {
    // const blogs = props.blogs;

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    {/* <Link to={'/blogs/' + blog.id}> */}
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                    </Link>
                    <p>Written by {blog.author}</p>
                    {/* <button onClick={() => handleDelete(blog.id)}>Delete blog</button> */}
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;

// {
//     "blogs": [
//         { "title": "Tips for finding an internship", "body": "lorem ipsum...", "author": "Alexander Sharipov", "id": 1 },
//         { "title": "General AI", "body": "lorem ipsum...", "author": "Andrew Ng", "id": 2 },
//         { "title": "Improving sustainability", "body": "lorem ipsum...", "author": "Greta Thunberg", "id": 3 }
//     ]
// }