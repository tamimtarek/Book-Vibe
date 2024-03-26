import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../../Utils/localStorage";
import { RiArrowDropDownLine } from "react-icons/ri";
import ReadBook from "../ReadBook/ReadBook";


const ListedBooks = () => {

    const books = useLoaderData();
    const [listedBooks, setListedBooks] = useState([]);

    useEffect(() => {
        const storedBookIds = getStoredBooks();
        if (books.length > 0) {
            const bookListed = [];
            for (const id of storedBookIds) {
                const book = books.find(book => book.id == id);
                if (book) {
                    bookListed.push(book)
                }
            }
            setListedBooks(bookListed);
        }
    }, [books])

    return (
        <div className="lg:w-[1280px] m-auto mt-10 text-center">
            <h4 className="text-3xl font-bold">Books</h4>
            <div className="dropdown dropdown-hover mt-7">
                <div tabIndex={0} role="button" className="btn text-white m-1 bg-[#23BE0A]">Sort By<RiArrowDropDownLine></RiArrowDropDownLine></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
            <h4>Book listed: {listedBooks.length}</h4>
            <div>
                {
                    listedBooks.map(list => <ReadBook key={list.id} list={list}></ReadBook>)
                }
            </div>
        </div>
    );
};

export default ListedBooks;