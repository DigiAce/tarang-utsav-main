const BannerPlain = () => {
  return (
    <div
      className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/img/banner/bg.jpg')" }}
    >
      {/* Content Box */}
      <div className="bg-white/90 px-6 py-8 md:px-12 md:py-10 text-center rounded-md shadow-lg w-[90%] md:w-1/2">
        <h1 className="text-lg md:text-2xl font-medium text-gray-800 leading-relaxed">
          TO SAY I LOVE YOU FROM THIS DAY FORWARD <br />
          MEANS I WILL LOVE YOU, <br />
          <span className="font-bold text-gray-900">no matter what.</span>
        </h1>
        <button className="mt-6 px-6 py-3 bg-[#E67E22] text-white font-medium rounded-full shadow-lg hover:bg-[#d46e19] transition">
          What we can do for you &rarr;
        </button>
      </div>
    </div>
  );
};

export default BannerPlain;
