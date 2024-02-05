import { useState } from "react";
import {useHistory} from 'react-router-dom'

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [pending, setPending] = useState(false);
    const hist = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body, author}

        setPending(true);

        // This is asynchronous. Once the request is complete and the request returns data, we
        setTimeout(() => {
            fetch("http://localhost:8000/blogs", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                // Turn blog into a JSON string
                body: JSON.stringify(blog),
            }).then(() => {
                console.log("Added a new blog!");
                setPending(false);
                hist.push('/');
            });
        }, 1000)
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog!</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="">Blog title:</label>
                <input
                    type="text"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="">Blog body:</label>
                <textarea 
                    name="" 
                    id="" 
                    cols="30" 
                    rows="10"
                    required
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label htmlFor="">Blog author:</label>
                <select 
                    name="" 
                    id=""
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Rick">Rick</option>
                    <option value="Morty">Morty</option>
                </select>
                {!pending && <button>Add blog</button>}
                {pending && <button disabled>Addding blog ...</button>}
            </form>
        </div>
     );
}
 
export default Create;