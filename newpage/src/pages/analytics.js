import "../styles/analytics.css";
import chart from "../images/chart.png";


const Analytics = () => {
    return (
        <section>
            <div id="charts" className="two">
                <section className="chart">
                    <img src={chart} alt="chart1"></img>
                    <h4>Number of Books by Month</h4>
                </section>
                <section className="chart">
                    <img src={chart} alt="chart2"></img>
                    <h4>Reading Time Per Month</h4>
                </section>
                <section className="chart">
                    <img src={chart} alt="chart3"></img>
                    <h4>Genres by Month</h4>
                </section>
                <section className="chart">
                    <img src={chart} alt="chart4"></img>
                    <h4>Star Rating</h4>
                </section>
            </div>
            <section id="more" className="one">
                <button id="load">Load More</button>
            </section>
        </section>
    );
};

export default Analytics;