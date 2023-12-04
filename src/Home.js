import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const Home = () => {
  const [isPending, setIsPending] = useState(true);
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    setTimeout(() => {             // Added settimeout to view the loading screen
      fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setBlogs(data);
      });
    }, 1000);
  }, [])

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {blogs && <ItemList items={blogs} />}
    </div>
  );
}
 
export default Home;