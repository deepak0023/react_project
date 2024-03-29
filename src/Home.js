import ItemList from "./ItemList";
import useFetch from "./useFetch";
import SkeletonArticle from "./skeletons/SkeletonArticle";

const Home = () => {
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch("https://mock-server-6iau.onrender.com/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && [1, 2, 3, 4].map((n) => <SkeletonArticle key={n} />)}
      {blogs && <ItemList items={blogs} />}
    </div>
  );
};

export default Home;
