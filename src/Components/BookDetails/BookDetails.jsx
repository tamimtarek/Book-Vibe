import { useLoaderData, useParams } from "react-router-dom";
import { saveBooks } from "../../Utils/localStorage";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const BookDetails = () => {
    const books = useLoaderData();
    const {id} = useParams();
    const book = books.find(book => book.id == id);
    const { author, bookName, category, image, publisher, rating, review, tags, yearOfPublishing, totalPages } = book;

    const handleReadBooks = () => {
        saveBooks(id);
        toast('Read');
    }

    console.log(book);
    return (
        <div className="lg:w-[1280px] m-auto grid lg:grid-cols-2 gap-1 mt-9 p-5">
            <div>
                <img className="w-[425px]" src={image} alt="" />
            </div>
            <div className="space-y-7">
                <h3 className="lg:text-4xl font-bold">{bookName}</h3>
                <h3>By: {author}</h3>
                <p>{category}</p>
                <p><span className="font-bold mr-2">Review:</span>{review}</p>
                <div className="flex">
                    <h3 className="font-bold">Tags:</h3>
                    <h3 className="space-x-3 ml-1 mr-20 text-[#23BE0A]"><span>#{tags[0]}</span><span>#{tags[1]}</span><span>#{tags[2]}</span></h3>
                    <h3 className="text-[#23BE0A]">#{publisher}</h3>
                </div>
                <div className="grid grid-cols-2">
                    <div className="space-y-2">
                        <h3>Number of Pages:</h3>
                        <h3>Publisher:</h3>
                        <h3>Year Of Publishing:</h3>
                        <h3>Rating:</h3>
                    </div>
                    <div className="font-bold space-y-2">
                        <h3>{totalPages}</h3>
                        <h3>{publisher}</h3>
                        <h3>{yearOfPublishing}</h3>
                        <h3>{rating}</h3>
                    </div>
                </div>
                <div className="space-x-6">
                    <button onClick={handleReadBooks} className="btn w-[100px]">Read</button>
                    <button className="btn btn-info text-white w-[100px]">Wishlist</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default BookDetails;