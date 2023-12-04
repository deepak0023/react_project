import { useParams } from "react-router-dom";

const ItemDetails = () => {
  const { id } = useParams();

  return (
    <div className="blog-details">
      <h2>Item details - { id }</h2>
    </div>
  );
}

export default ItemDetails;