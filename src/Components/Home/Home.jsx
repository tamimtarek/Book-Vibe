import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
import Banner from "../Banner/Banner";


const Home = () => {

    const data = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <h3 className="text-center mt-9 text-3xl lg:text-5xl font-bold mb-4">Books</h3>
            <div className="grid lg:grid-cols-3 gap-3 lg:w-[1280px] m-auto">
                {
                    data.map((item) => <Card key={item.id} item={item}></Card>)
                }
            </div>
        </div>
    );
};

export default Home;