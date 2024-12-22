const ValueCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-20 bg-[#f5f0eb]">
      {/* Podcast */}
      <div className="flex items-center justify-center w-full md:w-1/3 h-32 bg-[#dde1d6] rounded-l-full">
        <p className="text-center text-l font-medium">
          Crafting unique and personalized events that stand out.
          <br />
          <span className="font-extrabold text-1xl">Innovative</span>
        </p>
      </div>

      {/* Services */}
      <div className="flex items-center justify-center w-full md:w-1/3 h-32 bg-[#d8cdc0] rounded-none">
        <p className="text-center text-l font-medium">
          Delivering flawless execution, every time. <br />
          <span className="font-extrabold text-1xl">Reliable</span>
        </p>
      </div>

      {/* Journal */}
      <div className="flex items-center justify-center w-full md:w-1/3 h-32 bg-[#eadad3] rounded-r-full">
        <p className="text-center text-l font-medium">
          Bringing sophistication to every celebration.
          <br />
          <span className="font-extrabold text-1xl">Elegant</span>
        </p>
      </div>
    </div>
  );
};

export default ValueCard;
