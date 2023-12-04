import { useState } from "react";
import ItemList from "./ItemList";

const Home = () => {
  const [blogs, setBlog] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  return (
    <div className="home">
      <ItemList items={blogs} title="All Blogs" />
    </div>
  );
}
 
export default Home;