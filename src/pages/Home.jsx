import React from "react";
import Hero from "../components/Hero";
import ProfilePic from "../assets/imgs/favprofile.png";

const Home = () => {
  return (
    <main>
      <Hero />

      <section className=" bg-primary text-white font-madimi">
        <div className="max-container flex gap-16 flex-col">
          <h1 className="head-text text-center ">About Favoured Art</h1>
          <div className="flex justify-center items-center">
            <img src={ProfilePic} className="bg-white rounded-full w-48" />
          </div>
          <p className="leading-10 text-center">
            EBUKA FAVOR Is an industrial chemist who has a passion for paints
            and art in general, he also loves bringing his imaginations to
            reality which fit into the artistic painting world, he has various
            collections of artwork done personally by him moreover he got his
            first ever inspiration from the late Leonardo da Vinci of Italy ,
            What he loves the most about paintings are the ability to touch and
            feel it . <br />
            <br /> He is also very intentional with his paintings ,FavouredArts
            is more about playing with beautiful colors to create a magnificent
            texture
          </p>
        </div>
      </section>

      <section
        className="flex items-center justify-center 
      bg-light-dot"
      >
        <div className="max-container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad saepe
          fugit dolorem tempora at est itaque doloribus quisquam vel quis
          accusantium officia corrupti sequi labore iste sint, repudiandae cum
          dolorum?
        </div>
      </section>

      <section
        className="flex items-center justify-center 
      bg-dark-dot"
      >
        <div className="max-container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad saepe
          fugit dolorem tempora at est itaque doloribus quisquam vel quis
          accusantium officia corrupti sequi labore iste sint, repudiandae cum
          dolorum?
        </div>
      </section>
    </main>
  );
};

export default Home;
