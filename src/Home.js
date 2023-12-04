import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'student_1', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'student_2', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'student_1', id: 3 }
  ])

  const [name, setName] = useState('student_5');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {                  // If no second parameter then run on every render
    console.log('use effect ran');
    console.log(blogs);
  }, [name])                         // empty array means only on first render

  return (
    <div className="home">
      <ItemList items={blogs} title="All Blogs" handleDelete={handleDelete}/>
      <button onClick={() => setName('Student_6')}>change name</button>
      <p>{name}</p>
    </div>
  );
}
 
export default Home;