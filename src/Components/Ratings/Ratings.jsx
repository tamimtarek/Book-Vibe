import { useEffect, useState } from "react";
import Rating from "./Rating";


const Ratings = () => {
    const [display, setDisplay] = useState([]);
    useEffect(() =>{
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setDisplay(data))
    },[])
    return (
        <div className="lg:w-[789px] m-auto">
            {
                display.map(rat => <Rating key={rat.id} rat={rat}></Rating>)
            }
        </div>
    );
};

export default Ratings;