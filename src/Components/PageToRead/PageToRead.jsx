import { useEffect, useState } from "react";
import { getStoredBooks } from "../../Utils/localStorage";
import { useLoaderData } from "react-router-dom";
import BookChart from "../BookChart/BookChart";


const PageToRead = () => {
    const books = useLoaderData();
    const [listedBooks, setListedBooks] = useState([]);

    useEffect(() => {
        const storedBookIds = getStoredBooks();
        if (books.length > 0) {
            const bookListed = [];
            for (const id of storedBookIds) {
                const book = books.find((book) => book.id === id);
                if (book) {
                    bookListed.push(book)
                }
            }
            setListedBooks(bookListed);
            
        }
    }, [books]);
    
    
    return (
        <div>
            {
                listedBooks.map(item => <BookChart key={item.id} item={item}></BookChart>)
            }
        </div>
    );
};

export default PageToRead;