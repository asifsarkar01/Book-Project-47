import { Link } from "react-router-dom";


const Book = ({book}) => {
    const {bookId,image,bookName,author,tags,category,rating} = book;
    return (
        <Link to={`books/:${bookId}`}>
               <div>
            
            <div className="card bg-base-100 w-96 border-2 p-6">
  <figure className="bg-gray-400">
    <img
    className="h-[298px] rounded-md py-8"
      src={image}
      alt="Books" />
  </figure>
  <div className="card-body">
    <div>

    </div>
    <div>
        {
            tags.map((tag,idx) => <button key={idx} className="btn btn-active btn-link">#{tag}</button>)
        }
    </div>
    <h2 className="card-title font-bold">
      {bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p className="text-lg font-medium opacity-50">By: {author}</p>
    <div className="divider">OR</div>
    <div className="card-actions justify-between">
      <div className="font-bold text-base">{category}</div>
      <div className="flex gap-x-2"> <img className="h-6" src="https://img.icons8.com/?size=100&id=104&format=png" alt="" /> <p>{rating}</p></div>
    </div>
  </div>
</div>
        </div>
        
        </Link>
 
    );
};

export default Book;