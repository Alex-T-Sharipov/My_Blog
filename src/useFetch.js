import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [name, setName] = useState('Rick');
    const [age, setAge] = useState(60);
    const [data, setData] = useState(null)
    const [pending, setPending] = useState(true)
    const [err, setErr] = useState(null)

    const handleClick = (e) => {
        if(name==='Rick'){setName('Morty'); setAge(14)};
        if(name==='Morty'){setName('Rick'); setAge(60)};
        console.log("Hello! Welcome ;)\n", e)
      }
    
    const handleDelete = (id) => {
        const newBlogs = data.filter((blog) => blog.id !== id);
        setData(newBlogs);
    }
    

    // What is useEffect hook?
    // Pass the function to run on every page refresh or rerender
    // Care to avoid the continuous loop! If we update and rerender inside the useeffect, this would cause inf loop!
    // Use dependency array to only run on certain rerenders
    // Empty dependency array = run function only after initial render (page refresh), not after state changes
    // If we want to run useEffect if name changes, we add name as the dependency and add it to the second argument
    // Can be used to fetch data to render the component
    useEffect(()=>{
        console.log('We rendered the page!');
        // Fires a function in then once the promise is resolved and the response is obtained
        // Use catch to catch any kind of network error!
        const abort = new AbortController();
        setTimeout(() => {
              fetch(url, {signal: abort.signal}).then(res => {
                console.log(res);
                if(!res.ok){
                  console.log("Failed to received the data!")
                  throw Error("Data could not be fetched!")
                };
                return res.json();
              }).then(data => {
                console.log(data);
                setData(data);
                setPending(false);
                setErr(null);
              }).catch(err => {
                if(err.name==='AbortError'){
                    console.log("Fetch aborted!");
                } else {
                    console.log(err.message);
                    setErr(err.message);
                }
              })
        }, 1000)
        return () => {
            console.log("cleanup");
            abort.abort();
        }
      }, [name, url])

      return {handleClick, handleDelete, name, age, data, pending, err}
}

export default useFetch