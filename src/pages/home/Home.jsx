import { useDispatch, useSelector } from 'react-redux'
import './Home.css'
import { useEffect, useState } from 'react'
import { fetchAllCoins } from '../../redux/cryptoSlice'
import Pagination from '../../components/pagination/Pagination';
import { Link } from "react-router-dom";

function Home() {

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllCoins(currentPage));
    }, [dispatch, currentPage]);

    const { allCoins } = useSelector((state) => state.crypto);
    return (
        <div className='home'>
            <div className='card-grid'>
                {allCoins.map((coin, index) => (
                    <Link key={index} to={`/coin/${coin.id}`}>
                        <div className='card'>
                            <img src={coin.image} alt="" className='card-image' />
                            <h3 className='card-headline'>{coin.name}</h3>
                            <p className='card-text'>₹{coin.current_price_inr?.toFixed(2)}</p>
                        </div>
                    </Link>
                ))}
            </div>

            <Pagination 
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}

export default Home;
