import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {
    const {bookId} = useParams()
    const data = useLoaderData()
    console.log(data)
    const id =Number(bookId)
    const book = data.find(book => book.bookId==id)
    console.log(id)
  
    return (
        <div>
            <h2>Book Details here</h2>
            
        </div>
    );
};

export default BookDetails;