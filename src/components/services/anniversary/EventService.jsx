const EventService = () => {
  const cards = [
    {
      id: 1,
      image: "/images/initial-discussion.png", // Replace with your actual image path
      title: "Initial Discussion",
      description:
        "We will have discussions on the requirements to ensure your MVP is ready for the initial launch.",
    },
    {
      id: 2,
      image: "/images/deal-finalized.png", // Replace with your actual image path
      title: "Deal Finalized",
      description:
        "Once we agree on what to build, we will start working on it right away.",
    },
    {
      id: 3,
      image: "/images/development.png", // Replace with your actual image path
      title: "Development",
      description:
        "Our development team ensures the product is delivered with the highest quality standards.",
    },
    {
      id: 4,
      image: "/images/delivery-launch.png", // Replace with your actual image path
      title: "Delivery & Launch",
      description:
        "We deliver the product on time and assist you with the launch process.",
    },
  ];

  return (
    <div className="bg-gray-700 p-10 h-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="md:w-2/3 lg:w-1/2">
          <img
            src="/images/how-we-work.png" // Replace with your section icon image
            alt="How we work"
            className="w-12 h-12"
          />
          <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">
            How we work?
          </h2>
          <p className="text-gray-300">
            We follow our process to get you started as quickly as possible.
          </p>
        </div>
        <div className="mt-16 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10"
            >
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-[100px] w-[100px] mx-auto"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                    {card.title}
                  </h5>
                  <p className="text-gray-300">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventService;
