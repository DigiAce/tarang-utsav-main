import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const GalleryImg = () => {
  const cardData = [
    {
      title: "Birthday Party",
      description:
        "Celebrate your special day with loved ones, complete with decorations, cake, and unforgettable memories.",
      image: "/img/services/1.jpg",
      path: "/services/birthday",
    },
    {
      title: "Cocktail Party",
      description:
        "An elegant evening filled with delicious drinks, music, and great company. Perfect for unwinding and socializing.",
      image: "/img/services/4.jpg",
      path: "/services/cocktail",
    },
    {
      title: "Mehndi",
      description:
        "A vibrant and colorful tradition featuring intricate henna designs, music, and festivities for all.",
      image: "/img/services/3.jpg",
      path: "/services/mehandi",
    },
    {
      title: "Haldi",
      description:
        "A joyful pre-wedding ceremony where loved ones gather to bless the couple with turmeric and happiness.",
      image: "/img/services/2.jpg",
      path: "/services/haldi",
    },
    {
      title: "Bachelor Party",
      description:
        "A fun-filled night to celebrate the bride-to-be with laughter, games, and unforgettable memories.",
      image: "/img/services/5.jpg",
      path: "/services/bachelor",
    },
    {
      title: "House Warming",
      description:
        "Welcome friends and family into your new home with a cozy and heartwarming celebration.",
      image: "/img/services/9.png",
      path: "/services/housewarming",
    },
    {
      title: "Corporate Event",
      description:
        "Host a professional gathering to connect, collaborate, and celebrate milestones with your team.",
      image: "/img/services/11.jpg",
      path: "/services/corporate",
    },
    {
      title: "Engagement",
      description:
        "Mark the beginning of a lifelong journey together with a beautiful and heartfelt celebration.",
      image: "/img/services/12.jpg",
      path: "/services/engagement",
    },
    {
      title: "Sangeet",
      description:
        "An evening of music, dance, and celebration to honor the couple and their love story.",
      image: "/img/services/13.jpg",
      path: "/services/sangeet",
    },
    {
      title: "Bridal Shower",
      description:
        "A special day to pamper the bride-to-be with love, gifts, and heartfelt wishes.",
      image: "/img/services/15.webp",
      path: "/services/bridalshower",
    },
    {
      title: "Baby Shower",
      description:
        "Celebrate the joy of welcoming a new life with games, gifts, and love from friends and family.",
      image: "/img/services/8.jpg",
      path: "/services/babyshower",
    },
    {
      title: "Anniversary",
      description:
        "Commemorate years of love and togetherness with a romantic and meaningful celebration.",
      image: "/img/services/7.jpg",
      path: "/services/anniversary",
    },
  ];

  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {cardData.map((card, index) => (
          <Link
            key={index}
            to={card.path}
            className="group relative block bg-black text-white"
          >
            <img
              alt={card.title}
              src={card.image}
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <div className="bg-gradient-box w-fit p-0.5">
                <p className="text-xl font-medium uppercase tracking-widest text-pink-500 overflow-hidden">
                  {card.title}
                </p>
              </div>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">{card.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GalleryImg;
