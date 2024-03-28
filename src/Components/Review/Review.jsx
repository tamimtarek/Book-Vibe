import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Rev from "../Rev/Rev";


const Review = () => {
    const [display, setDisplay] = useState([]);
    useEffect(() =>{
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setDisplay(data))
    },[])

    return (
        <div>
            {
                display.map(rev => <Rev key={rev.id} rev={rev}></Rev>)
            }
        </div>
    );
};

export default Review;