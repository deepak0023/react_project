import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const Home = () => {
  const [isPending, setIsPending] = useState(true);
  const [blogs, setBlogs] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {             // Added settimeout to view the loading screen
      fetch('http://localhost:8000/blogs')
      .then(res => {
        if (!res.ok) {               // error coming back from server
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setBlogs(data);
        setError(null);
      })
      .catch(err => { // auto catches network / connection error
        setIsPending(false);
        setError(err.message);
      })
    }, 1000);
  }, [])

  return (
    <div className="home">
      { error && <div>{error}</div> }
      {isPending && <div>Loading...</div>}
      {blogs && <ItemList items={blogs} />}
    </div>
  );
}
 
export default Home;