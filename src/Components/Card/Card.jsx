import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const Card = ({ item }) => {
    const { author, bookName, category, id, image, publisher, rating, tags } = item;
    return (
        <div >
            <Link to={`/book/${id}`} className="card bg-base-100 border-2 ">
                <figure><img className="mt-5" src={image} alt="Book" /></figure>
                <div className="card-body">
                    <div className="flex gap-9">
                        <h2 className="text-[#23BE0A] font-semibold">#{tags[1]}</h2>
                        <h2 className="text-[#23BE0A] font-semibold">{publisher}</h2>

                    </div>
                    <h2 className="card-title">
                        {bookName}
                    </h2>
                    <p>By: {author}</p>
                    <div className="card-actions justify-between">
                        <div className="">{category}</div>
                        <div className=" flex items-center justify-center gap-2"><span className="text-base">{rating}</span><FaRegStar /></div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;