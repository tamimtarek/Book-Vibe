
const Rating = ({rat}) => {
    const {bookName, rating} = rat;
    return (
        <div className="flex flex-col p-10 text-center mt-5 justify-center gap-4 border rounded-lg shadow-lg">
            <h4 className="text-4xl font-bold">{bookName}</h4>
            <h1 className="text-3xl font-black">{rating}</h1>
        </div>
    );
};

export default Rating;