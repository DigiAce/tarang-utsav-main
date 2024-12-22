const Banner = () => {
  return (
    <section className="bg-gray-900 text-white relative">
      {/* Uncomment the below line to add a background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src="img/banner/bannerbg.mp4" type="video/mp4" />
      </video>
      {/* Black Tint Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Add background image here */}
      {/* <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: 'url("/img/banner/bg.jpg")' }}
      ></div> */}

      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="w-fit flex m-auto p-5">
            <h2
              className="bg-gradient-to-tr from-red-300 via-pink-500 to-purple-600 
  bg-clip-text text-transparent bg-[length:200%_200%] bg-[position:0%_50%] 
  text-5xl font-extrabold sm:text-8xl text-center animate-gradient-shift leading-[1.2]"
            >
              Taran<span className="leading-tight">g</span> Utsav
            </h2>
          </div>

          <p className="mx-auto mt-4 max-w-l sm:text-xl sm:leading-relaxed ">
            Celebrate life’s finest moments with Tarang Utsav, the best event
            planner in Chennai – your trusted partner for seamless celebrations
            and unforgettable experiences.
          </p>

          {/* <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="#"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
