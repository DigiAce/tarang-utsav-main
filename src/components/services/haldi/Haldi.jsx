const Anniversary = () => {
  return (
    <section className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0 mt-10">
      <section className="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1">
        <img
          className="xl:max-w-6xl"
          src="/img/services/2.jpg"
          alt="Product Review"
        />
        <div className="content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-5">
          <h2 className="text-3xl font-semibold mt-4 md:mt-10">
            Haldi Ceremony
          </h2>
          <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">
            Create a bright and cheerful Haldi ceremony with vibrant themes,
            floral decor, and joyful arrangements that match the occasion.
          </p>
          <a
            href="https://wa.link/8ta1ca"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800 inline-block"
          >
            Enquiry Now
          </a>
        </div>
      </section>
    </section>
  );
};

export default Anniversary;
