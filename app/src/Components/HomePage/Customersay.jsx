import  { useState } from "react";
import "./Customersay.css";

const testimonials = [
  {
    id: 1,
    quote: "Amazing products and fast delivery! ShopMate is my go-to store for all my needs.",
    name: "John D.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 2,
    quote: "Great quality at affordable prices. The customer support is also very responsive.",
    name: "Sarah M.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 3,
    quote: "Very happy with my purchase. Highly recommend ShopMate to everyone!",
    name: "Michael T.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    quote: "Excellent shopping experience, wide variety of options and standard support.",
    name: "Emma W.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: 5,
    quote: "Top-notch quality products. I will definitely be ordering again very soon!",
    name: "David K.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 6,
    quote: "Fast shipping and packaging was super secure. Exceeded my expectations!",
    name: "Lisa R.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=10",
  },
  {
    id: 7,
    quote: "The user interface is smooth and checking out took less than two minutes.",
    name: "Alex P.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 8,
    quote: "Impressive customer service! They resolved my query within a few hours.",
    name: "Omar H.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: 9,
    quote: "Authentic items and great seasonal discounts. Really glad I found this store.",
    name: "Nour S.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=16",
  },
];

function Customersay() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleCards = [
    testimonials[index],
    testimonials[(index + 1) % testimonials.length],
    testimonials[(index + 2) % testimonials.length],
  ];

  return (
    <section className="container py-5 position-relative">
      <h2 className="text-center fw-bold mb-5">What Our Customers Say</h2>

      <div className="custom-carousel-wrapper px-4">
        <div className="row g-4 justify-content-center">
          {visibleCards.map((item, i) => (
            <div key={`${item.id}-${i}`} className="col-12 col-md-6 col-lg-4">
              <div className="card p-4 border-1 rounded-4 shadow-sm text-start bg-white h-100">
                <span className="quote-mark">“</span>
                <p className="testimonial-text">{item.quote}</p>

                <div className="d-flex align-items-center gap-3 mt-auto">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="rounded-circle"
                    width="50"
                    height="50"
                    style={{ objectFit: "cover" }}
                  />
                  <div>
                    <h6 className="fw-bold mb-1">{item.name}</h6>
                    <div className="stars">{"★".repeat(item.rating)}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <button className="arrow-btn prev-btn" onClick={handlePrev} type="button" aria-label="Previous">
          &#8592;
        </button>

        <button className="arrow-btn next-btn" onClick={handleNext} type="button" aria-label="Next">
          &#8594;
        </button>
      </div>
    </section>
  );
}

export default Customersay;