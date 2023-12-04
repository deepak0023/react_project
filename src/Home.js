import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogs(data);
      })
  }, [])

  return (
    <div className="home">
      {blogs && <ItemList items={blogs} />}
    </div>
  );
}
 
export default Home;