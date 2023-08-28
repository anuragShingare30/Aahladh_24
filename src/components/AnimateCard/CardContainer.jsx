import React from "react";
import Animate from "./Animate";

import "./AnimateCard.css";
import profile1 from "../../Assets/secretary.jpg";
import profile2 from "../../Assets/IMG2.png";

const cardData = [
  {
    name: "K.Varun Chandra",
    job: "Cultural Secretary",
    image: profile1,
    phone: "9346101109",
    email: "201118@iiitt.ac.in",
    instagramUrl: "https://www.instagram.com/varun.sunny.10/",
    linkedinUrl: "https://www.linkedin.com/in/varun-chandra-809b97282",
  },
  {
    name: "Mahitha",
    job: "Vice Cultural Secretary",
    image: profile2,
    phone: "9705697956",
    email: "211113@iiitt.ac.in",
    instagramUrl: "https://www.instagram.com/_mahitha__k/",
    linkedinUrl: "www.linkedin.com/in/mahitha-kancharla-a78637255",
  },
];

const CardContainer = () => {
  return (
    <div>
      <div className="animate-card-container">
        {cardData.map((card, index) => (
          <Animate
            key={index}
            name={card.name}
            job={card.job}
            image={card.image}
            phone={card.phone}
            email={card.email}
            instagramUrl={card.instagramUrl}
            linkedinUrl={card.linkedinUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
