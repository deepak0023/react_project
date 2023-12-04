import { useState } from "react";
import ItemList from "./ItemList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'student_1', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'student_2', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'student_1', id: 3 }
  ])

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  return (
    <div className="home">
      <ItemList items={blogs} title="All Blogs" handleDelete={handleDelete}/>
    </div>
  );
}
 
export default Home;