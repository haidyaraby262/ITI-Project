
import "./Offer.css"
import offerImg from "../../assets/product offer.jpeg";

function Offer() {
  return (
    <section className="offer">
      <div className="offer-content">
        <span className="offer-subtitle">
          SPECIAL OFFER
        </span>
        <h1>
          Up to <span>50% Off</span>
        </h1>
        <p>
          Limited time offer on selected items.
          Hurry up and grab the best deals!
        </p>
        <button className="offer-btn">
          Shop the Sale →
        </button>
      </div>

      <div className="offer-image">
        <img src={offerImg} alt="special offer" />

        <div className="offer-discount">
          <strong>50%</strong>
          <span>OFF</span>
        </div>
      </div>

      
    </section>
  );
}

export default Offer