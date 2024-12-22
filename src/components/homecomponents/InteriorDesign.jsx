const InteriorDesign = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
        {/* Images Section */}
        <div className="relative">
          {/* First Image */}
          <div className="relative w-[350px] h-[400px] mx-auto md:mx-0">
            <div className="absolute left-0 bottom-0 w-[80px] h-[80px] bg-[#E67E22] rounded-md -z-10"></div>
            <img
              src="/img/banner/wd.jpg"
              alt="Couple"
              className="w-[350px] h-[400px] object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Second Image */}
          <div className="relative w-[350px] h-[400px] mx-auto mt-6 md:absolute md:top-8 md:right-0">
            <div className="absolute -z-10 w-[150px] h-[150px] bg-[#f4f4f4] top-4 left-4 rounded-md shadow"></div>
            <img
              src="/img/banner/wd.jpg"
              alt="Decor"
              className="w-[350px] h-[400px] object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center text-center md:text-left">
          {/* Tagline */}
          <span className="inline-block bg-[#E67E22] text-white px-3 py-1 rounded-full text-sm mb-4 w-fit">
            Love & Care
          </span>
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-relaxed">
            Interior design <br /> that matters
          </h2>
          {/* Statistics */}
          <div className="flex flex-col md:flex-row gap-8 mt-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#E67E22]">1k +</h3>
              <p className="text-sm text-gray-600 mt-2">
                Regular Customer in <br /> every month
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#E67E22]">5 +</h3>
              <p className="text-sm text-gray-600 mt-2">
                Years of <br /> Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteriorDesign;
