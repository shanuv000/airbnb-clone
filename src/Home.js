import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/4d353c80-e73a-4b04-9e15-ec3d8381b106.jpg?im_w=720"
          title="Online Experience"
          description="Travel the world without leaving home."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/e81fce5f-2f51-4342-938e-5bc18ae237f4.jpg?im_w=720"
          title="Experiences"
          description="Things to do wherever you are."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/b9adfc39-6e2a-4e5f-b6f3-681b306fae5c.jpg?im_w=720"
          title="Adventures"
          description="Multi-day trips with meals and stays."
        />
      </div>
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/812fc709-7aa1-43e9-9fce-20ae09f80c14.jpg?im_w=720"
          title="Cuba"
          description="Explore Western Cuba's hidden gems."
          price="₹27,940/person"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/16c3ffb2-c9dd-43f2-8743-189d375f4e35.jpg?im_w=720"
          title="Sweden"
          description="Rugged forest camping in Sweden"
          price="₹29,466/person"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/f028a8ad-1404-4e06-b75d-c090e08722b1.jpg?im_w=720"
          title="Cuba"
          description="Explore Western Cuba's hidden gems."
          price="₹66,027/person"
        />
      </div>
    </div>
  );
};
export default Home;
