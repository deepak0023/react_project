const ItemList = ({ items, title}) => {
// const ItemList = (props) => {
    // const blogs = props.blogs;
    // const title = props.title;
    // console.log(blogs);
  
    return (
      <div className="item-list">
        <h2>{ title }</h2>
        {items.map(item => (
          <div className="item-preview" key={item.id} >
            <h2>{ item.title }</h2>
            <p>Written by { item.author }</p>
            <button>delete item</button>
          </div>
        ))}
      </div>
    );
  }
   
  export default ItemList;