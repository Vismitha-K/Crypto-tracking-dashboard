import CoinChart from "../../components/coinChart/CoinChart"
import CoinConvert from "../../components/coinConvert/CoinConvert"
import "./Coin.css"

function Coin() {
  return (
    <div className="coin-container">
        <CoinChart />
        <CoinConvert />
    </div>
  )
}

export default Coin;