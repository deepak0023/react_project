import { useState } from "react";
import ItemList from "./ItemList";

const Home = () => {
  const [blogs, setBlog] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'student_1', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'student_2', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'student_1', id: 3 }
  ])

  return (
    <div className="home">
      <ItemList items={blogs} title="All Blogs" />
      <ItemList items={blogs.filter(blog => blog.author === 'student_1' )} title="Student 1 Blogs" />
    </div>
  );
}
 
export default Home;