import React from "react";
import home from "../assets/images/download.jpeg"
const Home = () => {
  return (
    <div
      className="min-h-full w-full flex md:flex-row flex-col"
    >
      <div className="flex flex-1 mt-40 mx-32 ">
        <div className="md:text-left text-center mt-14">
          <h1 className="md:text-4xl text-2xl md:leading-normal leading-10 text-gray-600 font-bold">
              Welcome to <span className="text-[#FF00FF]">Elderly Matrimonial</span>
              <br />
          </h1>
          <p className="text-grya-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis laudantium reiciendis dolorem nulla illo laboriosam blanditiis necessitatibus dicta quae dolorum iure quo ipsum eius, id, unde quaerat eaque iste, quasi laborum commodi et iusto. Ut in facere impedit voluptatem quo amet dolor vel sapiente molestias possimus delectus eius, fuga dolore quae facilis exercitationem repudiandae saepe tenetur sint minus. Minus dignissimos placeat, voluptates odit consequatur atque quidem natus deleniti, labore rem magnam at dolorem cumque saepe? Quas sed unde nostrum ipsum quia id, sunt perferendis enim, error voluptas, libero amet magnam explicabo repellendus repudiandae numquam quidem tempore dolorem ratione fuga! Ut.</p>
        </div>
      </div>

                       {/* Home Image */}

      <div className="flex-1 mt-10 flex item-center justify-center h-full z-10">
          <img
            src={home}
            alt="image"
            className="md:w-11/12 h-full object-cover rounded-2xl mt-40"
          />
        </div>
    </div>
  );
};

export default Home;
