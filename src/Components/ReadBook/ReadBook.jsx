

const ReadBook = ({ list }) => {
    const { author, bookName, category, image, publisher, rating, review, tags, yearOfPublishing, totalPages } = list;
    console.log(list)
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className="max-w-sm rounded-lg" />
                <div>
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <p className="py-6">By: {author}</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
        
    );
};

export default ReadBook;