import { useLoaderData, useParams } from "react-router-dom";
// import { addToStoredReadList } from "../Utility/addToDb";


const BookDetails = () => {
    const {bookId} = useParams()
    const data = useLoaderData()
    // console.log(data)
    const id =Number(bookId)
    const book = data.find(book => book.bookId==id)
    // console.log(book)
    const {bookId:cuurentbookId,image}= book;

//     const handleMarkRead = (id) =>{
//   addToStoredReadList(id)
//     }
  
    return (
        <div className="my-4">
            <h2>Book Details here: {bookId}</h2>
            <img className="w-36" src={image} alt="" /> <br/>
            <button className="btn btn-accent btn-outline mr-4">Mark as Read</button>
            <button className="btn btn-accent">Add to Wish-List</button>
            
        </div>
    );
};

export default BookDetails;