import {useParams, useHistory} from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {

    // Use a hook to extract the query parameters from the route
    const{id} = useParams();
    const{handleClick, handleDelete, name, age, data: blog, pending, err} = useFetch('http://localhost:8000/blogs/' + id);
    const hist = useHistory();

    const handle_delete_click = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: "DELETE",
        }).then(() => {
            hist.push('/')
        });
    }

    return ( 
        <div className="blog-details">
            {err && <div>Received the error: {err}</div>}
            {pending && !err && (
            <div>
                <p>Loading... </p>
                <p>Fun fact: Character {name} from the Rick and Morty universe is {age} years old!</p>
                {/* Hook automatically updates name */}
                {/* Note: you can also use an anonymous lambda function */}
                {/* <button onClick={(e) => {
                handleAgain('Mario', e)
                }}>Click me again</button> */}
                <button onClick={handleClick}>Next fact! </button>
            </div>
            )}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Blog no. {id}</p>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handle_delete_click}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;