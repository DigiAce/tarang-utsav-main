const AboutCard = () => {
  const cards = [
    {
      id: 1,
      episode: "Key 1",
      title: "Creativity",
      description:
        "We believe every event is a blank canvas, and we bring fresh, innovative ideas to make your vision come to life in the most extraordinary ways.",
      duration: "48:32 minutes",
      featuring: ["Barry", "Sandra", "August"],
      iconSrc: "/img/about-img/star-key.png",
    },
    {
      id: 2,
      episode: "Key 2",
      title: "Attention to Detail",
      description:
        "Every detail matters. From the grandest elements to the smallest touches, we ensure perfection to create a seamless and unforgettable experience.",
      duration: "52:15 minutes",
      featuring: ["John", "Emily", "Sophia"],
      iconSrc: "/img/about-img/star-key.png",
    },
    {
      id: 3,
      episode: "Key 3",
      title: "Client-Centric Approach",
      description:
        "Your satisfaction is our priority. We listen, understand, and collaborate to tailor every aspect of your event to reflect your unique personality and needs.",
      duration: "37:45 minutes",
      featuring: ["Alice", "Bob", "Clara"],
      iconSrc: "/img/about-img/star-key.png",
    },
    {
      id: 4,
      episode: "Key 4",
      title: "Reliability and Professionalism",
      description:
        "We are committed to delivering excellence with integrity. You can trust us to handle your event with professionalism and deliver on our promises.",
      duration: "43:22 minutes",
      featuring: ["James", "Ella", "Oliver"],
      iconSrc: "/img/about-img/star-key.png",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {cards.map((card) => (
          <article
            key={card.id}
            className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8"
          >
            <div className="flex items-start sm:gap-8">
              {/* PNG Icon */}
              <div className="hidden sm:block sm:h-20 sm:w-20 sm:shrink-0">
                <img
                  src={card.iconSrc}
                  alt={card.title}
                  className="object-contain w-full h-full"
                />
              </div>

              <div>
                <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
                  {card.episode}
                </strong>

                <h3 className="mt-4 text-lg font-medium sm:text-xl">
                  <a href="#" className="hover:underline">
                    {card.title}
                  </a>
                </h3>

                <p className="mt-1 text-sm text-gray-700">{card.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default AboutCard;
