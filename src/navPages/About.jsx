import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <h1>About This Project</h1>
      <p>
        This cryptocurrency tracking dashboard is built using modern web technologies 
        to provide real-time price updates and historical data visualization.
      </p>

      <h2>Technologies Used</h2>
      <ul>
        <li><strong>React.js:</strong> Frontend framework for building a dynamic UI</li>
        <li><strong>Redux Toolkit:</strong> State management for handling global data</li>
        <li><strong>React Router:</strong> Client-side navigation for a seamless experience</li>
        <li><strong>Tailwind CSS:</strong> Styling for a clean and responsive design</li>
        <li><strong>CoinGecko API:</strong> Fetching real-time cryptocurrency data</li>
        <li><strong>Express.js:</strong> Backend for handling API requests</li>
        <li><strong>Node.js:</strong> Server-side runtime for backend functionality</li>
      </ul>

      <h2>Project Goal</h2>
      <p>
        The main objective of this project is to display cryptocurrency market data 
        in an easy-to-understand format while implementing fundamental frontend and 
        backend concepts.
      </p>
    </div>
  );
};

export default About;
