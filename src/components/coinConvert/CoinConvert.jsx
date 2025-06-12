import { useEffect, useState } from 'react';
import './CoinConvert.css';
import { TbArrowsDownUp } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoinDetails } from "../../redux/cryptoSlice";
import inr from "../../assets/inr.png";
import { useParams } from "react-router-dom";

function CoinConvert() {
    const [amount, setAmount] = useState(1);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(fetchCoinDetails(id));
        }
    }, [dispatch, id]);

    const { selectedCoin } = useSelector((state) => state.crypto);

    // Safely access coin price in INR, fallback to 0 if undefined
    const coinPrice = selectedCoin?.market_data?.current_price?.inr || 0;
    const convertedAmount = amount * coinPrice;

    return (
        <div className='currency-container'>
            <div className='currency-converter'>
                <h3>Currency Converter</h3>

                <div className='converter-item'>
                    <div className='converter-coin'>
                        <div className='icon-container'>
                            {selectedCoin?.image?.small && (
                                <img src={selectedCoin.image.small} alt='' className='icon-image' />
                            )}
                        </div>
                        <p>{selectedCoin?.symbol?.toUpperCase() || "N/A"}</p>
                    </div>
                    <div className='input-section'>
                        <input 
                            type='number' 
                            value={amount} 
                            onChange={(e) => setAmount(Number(e.target.value) || 0)} 
                            className='amount-input' 
                            min={0}
                        />
                    </div>
                </div>

                <div className='converter-item'><TbArrowsDownUp /></div>

                <div className='converter-item'>
                    <div className='converter-coin'>
                        <div className='icon-container'>
                            <img src={inr} alt='' className='icon-image' />
                        </div>
                        <p>INR</p>
                    </div>
                    <div className='input-section'>
                        <input 
                            type='number' 
                            value={convertedAmount} 
                            readOnly 
                            className='amount-input' 
                        />
                    </div>
                </div>

                {selectedCoin?.symbol && (
                    <div className='converter-item'>
                        <span>
                            1 {selectedCoin.symbol.toUpperCase()} = {coinPrice} INR
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CoinConvert;
