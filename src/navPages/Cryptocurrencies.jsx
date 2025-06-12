import "./Cryptocurrencies.css";

const Cryptocurrencies = () => {
  return (
    <div className="crypto-page">
      <h1>Cryptocurrencies</h1>

      <section>
        <h2>What Are Cryptocurrencies?</h2>
        <p>
          Cryptocurrencies are decentralized digital assets that use blockchain technology to secure transactions. Unlike traditional currencies, they are not controlled by any central authority, making them borderless and accessible worldwide.
        </p>
      </section>

      <section>
        <h2>Market Trends</h2>
        <p>
          The cryptocurrency market is highly volatile, with prices fluctuating due to supply, demand, and global events. Bitcoin and Ethereum are the largest cryptocurrencies by market cap, influencing market trends.
        </p>
      </section>

      <section>
        <h2>Use Cases</h2>
        <p>
          Cryptocurrencies are used for various purposes, including peer-to-peer payments, decentralized finance (DeFi), NFTs, and even as a hedge against inflation. Many businesses now accept cryptocurrencies as payment.
        </p>
      </section>

      <section>
        <h2>Security & Risks</h2>
        <p>
          While blockchain technology ensures security, cryptocurrencies are still susceptible to hacking, scams, and extreme price volatility. Users must store their assets safely in secure wallets and stay informed about risks.
        </p>
      </section>

      <section>
        <h2>Future of Cryptocurrencies</h2>
        <p>
          The crypto space continues to evolve with innovations like Central Bank Digital Currencies (CBDCs), smart contracts, and improved regulations. The future looks promising, with mass adoption on the rise.
        </p>
      </section>
    </div>
  );
};

export default Cryptocurrencies;
