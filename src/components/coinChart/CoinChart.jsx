import { useDispatch, useSelector } from "react-redux";
import "./CoinChart.css";
import { useEffect } from "react";
import { fetchCoinDetails, fetchCoinHistory } from "../../redux/cryptoSlice";
import { IoIosStarOutline } from "react-icons/io";
import { MdIosShare, MdOutlineFileDownload } from "react-icons/md";
import { useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function CoinChart() {
    const days = 10;
    const { id } = useParams();  // ✅ Fix useParams()
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("Fetching Coin History for:", id);
        dispatch(fetchCoinHistory({ id, days }));
    }, [dispatch, id, days]);

    useEffect(() => {
        console.log("Fetching Coin Details for:", id);
        dispatch(fetchCoinDetails(id));
    }, [dispatch, id]);

    const { coinHistory } = useSelector((state) => state.crypto);
    const { selectedCoin } = useSelector((state) => state.crypto);

    const data = coinHistory?.prices
        ? {
            labels: coinHistory.prices.map((item) => new Date(item[0]).toLocaleDateString()),
            datasets: [
                {
                    label: "Price (INR)",
                    data: coinHistory.prices.map((item) => item[1]),
                    fill: false,
                    borderColor: "#66fcf1",
                    tension: 0.1
                },
            ],
        }
        : null;

    const formatNumber = (number) => {
        if (!number) return "N/A";  // ✅ Handle undefined values
        if (number >= 10000000) return (number / 10000000).toFixed(2) + " Cr";
        if (number >= 100000) return (number / 100000).toFixed(2) + " L";
        return number;
    };

    return (
        <div className="chart-container">
            <div className="coin-info">
                <div className="coin-heading">
                    {selectedCoin?.image?.small && (
                        <img src={selectedCoin.image.small} alt="" className="coin-image" />
                    )}
                    <span className="coin-text">{selectedCoin?.name} <span>{selectedCoin?.symbol}</span></span>
                </div>

                <div className="coin-items">
                    <div className="coin-item">
                        <IoIosStarOutline size={32} />
                        <span>Add to WatchList</span>
                    </div>
                    <div className="coin-item">
                        <MdIosShare size={32} />
                        <span>Share</span>
                    </div>
                    <div className="coin-item">
                        <MdOutlineFileDownload size={32} />
                        <span>Download</span>
                    </div>
                </div>
            </div>

            <div className="chart-details">
                <div className="chart">
                    <div className="chart-wrapper">
                        {data ? <Line data={data} options={{ responsive: true }} /> : <p>Loading Chart...</p>}
                    </div>
                </div>

                <div className="stats">
                    <div className="stat-item">
                        <span>Price</span>
                        <span>₹{formatNumber(selectedCoin?.market_data?.current_price?.inr)}</span>
                    </div>
                    <div className="stat-item">
                        <span>Volume</span>
                        <span>₹{formatNumber(selectedCoin?.market_data?.total_volume?.inr)}</span>
                    </div>
                    <div className="stat-item">
                        <span>Market Cap</span>
                        <span>₹{formatNumber(selectedCoin?.market_data?.market_cap?.inr)}</span>
                    </div>
                    <div className="stat-item">
                        <span>Total Supply</span>
                        <span>{formatNumber(selectedCoin?.market_data?.total_supply)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoinChart;
