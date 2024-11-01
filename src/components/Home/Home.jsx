import Banner from "../Banner/Banner";
import Books from "../Books/Books";


const Home = () => {
    return (
        <div className="mb-10">
            <h1 className="text-3xl text-center">This is Home page</h1>
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;