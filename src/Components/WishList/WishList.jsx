

const WishList = ({ list }) => {
    const { author, bookName, category, image, publisher, rating, review, tags, yearOfPublishing, totalPages } = list;
    return (
        <div className="flex m-auto lg:w-[1150px] border p-3  w-full gap-5 mt-5 rounded-md">
            <div className=" w-[230px] bg-[#1313130D] flex justify-center items-center rounded-lg">
                <img className="" src={image} alt="" />
            </div>
            <div className="text-left space-y-4">
                <h3 className="text-2xl font-bold">{bookName}</h3>
                <h3>By: {author}</h3>
                <div className="flex justify-between">
                    <h3><span className="font-bold">Tag</span> <span className="text-yellow-600">#{tags[1]}</span></h3>
                    <h3 className="text-yellow-600">#identity</h3>
                    <h3 className="flex"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                        Year of Publishing: {yearOfPublishing}</h3>
                </div>
                <div className="flex gap-9">
                    <h3 className="flex"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                        Publisher: {publisher}</h3>
                    <h3 className="flex"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                        Pages: {totalPages}</h3>
                </div>
                <div className="divider"></div>
                <div className="space-x-4">
                    <button className="btn w-[174px] text-[#328EFF] bg-[#328EFF4D] rounded-full">Category: {category}</button>
                    <button className="btn w-[123px] text-[#23BE0A] bg-[#FFAC334D] rounded-full">Rating: {rating}</button>
                    <button className="btn w-[150px] text-white bg-[#23BE0A] rounded-full">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default WishList;