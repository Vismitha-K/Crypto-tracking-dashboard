import "./Learn.css";

const Learn = () => {
  return (
    <div className="learn-page">
      <h1>Learn About Cryptocurrency</h1>

      <section>
        <h2>What is Cryptocurrency?</h2>
        <p>
          Cryptocurrency is a type of digital currency that operates on blockchain technology. It is decentralized, meaning it is not controlled by any central authority like banks or governments. Instead, transactions are verified by a distributed network of computers.
        </p>
      </section>

      <section>
        <h2>How Does Blockchain Work?</h2>
        <p>
          A blockchain is a distributed ledger that records all cryptocurrency transactions securely and transparently. Each block contains a group of transactions, and once verified, it is added to the chain, making the data immutable and tamper-proof.
        </p>
      </section>

      <section>
        <h2>Popular Cryptocurrencies</h2>
        <ul>
          <li><strong>Bitcoin (BTC):</strong> The first and most well-known cryptocurrency.</li>
          <li><strong>Ethereum (ETH):</strong> Known for its smart contract functionality.</li>
          <li><strong>Binance Coin (BNB):</strong> Used in the Binance ecosystem.</li>
          <li><strong>Solana (SOL):</strong> Popular for its high-speed transactions.</li>
        </ul>
      </section>

      <section>
        <h2>Why Invest in Cryptocurrency?</h2>
        <p>
          Investing in crypto provides opportunities for high returns, financial freedom, and diversification. However, it also comes with risks due to market volatility, security threats, and regulatory changes.
        </p>
      </section>

      <section>
        <h2>Getting Started with Crypto</h2>
        <ul>
          <li>Choose a reliable cryptocurrency exchange.</li>
          <li>Set up a secure wallet for storing assets.</li>
          <li>Research and analyze before investing.</li>
          <li>Stay updated with market trends and news.</li>
        </ul>
      </section>
    </div>
  );
};

export default Learn;
