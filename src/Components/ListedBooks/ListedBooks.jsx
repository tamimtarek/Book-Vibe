import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../../Utils/localStorage";
import { RiArrowDropDownLine } from "react-icons/ri";
import ReadBook from "../ReadBook/ReadBook";
import WishList from "../WishList/WishList";
import { getStoredWishBooks } from "../../Utils/wishlist";


const ListedBooks = () => {

    const books = useLoaderData();
    const [listedBooks, setListedBooks] = useState([]);
    const [toggleState, setToggleState] = useState(1);
    const [wishList, setWishList] = useState([]);

    const toggleTab = (idx) => {
        setToggleState(idx)
    }

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
            setWishList(bookListed);
        }
    }, [books])
    useEffect(() => {
        const storedBookIds = getStoredWishBooks();
        if (books.length > 0) {
            const bookListed = [];
            for (const id of storedBookIds) {
                const book = books.find(book => book.id == id);
                if (book) {
                    bookListed.push(book)

                }
            }
            setWishList(bookListed);
        }
    }, [books])
    

    return (
        <div className="lg:w-[1280px] m-auto mt-10 text-center">
            <h4 className="text-3xl font-bold">Books</h4>
            <div className="dropdown dropdown-hover mt-7">
                <div tabIndex={0} role="button" className="btn text-white m-1 bg-[#23BE0A]">Sort By<RiArrowDropDownLine></RiArrowDropDownLine></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Ratings</a></li>
                    <li><a>Pages</a></li>
                </ul>
            </div>
            <div>
                <div role="tablist" className="tabs w-96 tabs-lifted ">
                    <Link role="tab" onClick={()=>toggleTab(1)} className={toggleState === 1 ? "tab tab-active": "tab"}>Read Books</Link>
                    <Link onClick={()=>toggleTab(2)} role="tab" className={toggleState === 2 ? "tab tab-active": "tab"}>Wishlist Books</Link>
                </div>
            </div>
            <div className={toggleState === 1 ? "blok": "hidden"}>

                {
                    listedBooks.map(list => <ReadBook key={list.id} list={list}></ReadBook>)
                }
            </div>
            <div className={toggleState === 2 ? "blok": "hidden"}>
            {
                    wishList.map(list => <WishList key={list.id} list={list}></WishList>)
                }
            </div>
        </div>
    );
};

export default ListedBooks;