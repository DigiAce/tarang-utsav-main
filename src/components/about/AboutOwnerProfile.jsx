const AboutOwnerProfile = () => {
  const cardData = [
    {
      id: 1,
      title: "Hey 👋 I am Haritha Mohan Rao",
      subTitle: "Tarang Utsav , Founder",
      description:
        "At Tarang Utsav, we turn your ideas into reality. Founded by Haritha Ghattamaneni, our company brings a fresh perspective to event planning. With a keen eye for design and a deep understanding of what makes events truly special, we are dedicated to delivering excellence every step of the way. Whether it’s a corporate event, a wedding, or a milestone celebration, we ensure every element reflects your personality and purpose.",
      question: "Have a question?",
      linkText: "Instagram",
      link: "https://www.instagram.com/haritha_ghattamaneni/",
      imageSrc: "/img/about-img/2-bgr.png",
      blobShapeSrc:
        "https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg",
    },
    {
      id: 2,
      title: "Welcome 🎉 I am Priya Ranganathan",
      subTitle: "Tarang Utsav , Co-Founder",
      description:
        "Hello! I’m Priya Ranganathan, co-founder of Tarang Utsav. My journey in event planning started with a love for creating meaningful and memorable experiences. I thrive on designing spaces and moments that capture the essence of each client’s vision. Collaborating with our incredible team has been a dream, and I’m proud to bring my expertise and passion to every event we plan.",
      question: "Reach out to me!",
      linkText: "Instagram",
      link: "https://www.instagram.com/_priya_ranganathan/",
      imageSrc: "/img/about-img/1-bgr.png",
      blobShapeSrc:
        "https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg",
    },
  ];

  return (
    <section className="pt-10 overflow-hidden bg-gray-50 sm:pt-16 2xl:pt-16 mt-12 md:mt-10">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {cardData.map((card, index) => (
          <div
            key={card.id}
            className={`flex flex-col-reverse md:flex-row items-center gap-10 mb-16 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Content */}
            <div className="w-full md:w-1/2">
              <h2 className="text-xl font-bold leading-tight text-black sm:text-lg lg:text-3xl">
                {card.title}
              </h2>
              <h3 className="text-xl font-bold leading-tight text-pink sm:text-xl lg:text-2xl">
                {card.subTitle}
              </h3>
              <p className="max-w-lg mt-3 text-l leading-relaxed text-gray-600 md:mt-8">
                {card.description}
              </p>
              <p className="mt-4 text-xl text-gray-600 md:mt-8">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                  <span className="relative"> {card.question} </span>
                </span>
                <br className="block sm:hidden" />
                Ask me on{" "}
                <a
                  href={card.link}
                  className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
                  target="_blank"
                >
                  {card.linkText}
                </a>
              </p>
            </div>

            {/* Image Content */}
            <div className="relative w-full md:w-1/2 flex justify-center items-center">
              {/* Background Shape */}
              <div className="relative overflow-hidden rounded-full bg-gradient-to-br from-yellow-200 to-yellow-500 w-72 h-72">
                <img
                  className="absolute w-full h-full object-cover"
                  src={card.imageSrc}
                  alt="Business Person"
                />
              </div>

              {/* Decorative Blob Shape */}
              <img
                className="absolute -z-10 w-[300px] h-[300px] opacity-50"
                src={card.blobShapeSrc}
                alt="Blob Shape"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutOwnerProfile;
