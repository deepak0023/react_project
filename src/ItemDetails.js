import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const ItemDetails = () => {
  const { id } = useParams();
  const { data: item, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

  return (
    <div className="item-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { item && (
        <article>
          <h2>{ item.title }</h2>
          <p>Written by { item.author }</p>
          <div>{ item.body }</div>
        </article>
      )}
    </div>
  );
}

export default ItemDetails;