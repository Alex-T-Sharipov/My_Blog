import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const {handleClick, handleDelete, name, age, data: blogs, pending, err} = useFetch("http://localhost:8000/blogs");

  // Automatically gains an event object e


  return (
    <div className="home">
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
      {/* Before the left side of the logical and evaluates to True, the right hand side is not evaluated */}
      {blogs && <BlogList blogs={blogs} title="Popular Blogs:" handleDelete={handleDelete}/>}
      {blogs && <BlogList blogs={blogs.filter((blog) => blog.author ==='Andrew Ng')} title="Andrew's Blogs:" />}
    </div>
  );
}
 
export default Home;