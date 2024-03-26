import React from 'react';

const Banner = () => {
    return (
        <div className="hero w-[1280px] m-auto bg-[#1313130D] rounded-lg">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/hx5psHd/pngwing-1.png" className="max-w-sm rounded-lg" />
                <div>
                    <h1 className="text-6xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                    <button className="btn text-white font-bold bg-[#23BE0A] mt-6">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;