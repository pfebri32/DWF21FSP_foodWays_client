// Components.
import Hero from '../components/Hero';
import NearestRestaurant from '../components/NearestRestaurant';
import PopularRestaurant from '../components/PopularRestaurant';

const Home = () => {
    return (
        <>
            <Hero/>
            <PopularRestaurant style={{marginTop: 59}}/>
            <NearestRestaurant style={{marginTop: 91, marginBottom: 62}}/>
        </>
    )
}

export default Home;
