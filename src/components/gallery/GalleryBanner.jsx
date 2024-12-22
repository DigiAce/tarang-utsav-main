const GalleryBanner = () => {
  return (
    <section className="overflow-hidden bg-[url('/img/banner/banner-gallery.jpg')] bg-cover bg-top bg-no-repeat mb-10 mt-24">
      <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            Our Events
          </h2>

          <p className="hidden max-w-lg text-white/90 md:mt-6 md:flex md:text-lg md:leading-relaxed flex-col justify-center items-center">
            At Your Tarang Utsav, we create unforgettable events tailored to
            your unique needs. From intimate gatherings to grand celebrations,
            we handle every detail with creativity and precision. Our services
            include birthdays, weddings, corporate events, and more, ensuring a
            seamless experience. Let us craft memories filled with joy and
            laughter, so you can focus on enjoying the moment.
          </p>

          <div className="mt-4 sm:mt-8">
            <a
              href="#"
              className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Yours Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryBanner;
