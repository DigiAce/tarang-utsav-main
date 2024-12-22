const EventMemories = () => {
  const images = [
    "/img/events/1.avif",
    "/img/events/2.jpg",
    "/img/events/3.jpg",
    "/img/events/4.jpg",
    "/img/events/5.jpg",
    "/img/events/6.jpg",
    "/img/events/7.avif",
    "/img/events/8.jpg",
    "/img/events/9.jpg",
    "/img/events/10.avif",
    "/img/events/11.jpg",
    "/img/events/12.jpg",
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Event Memories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="rounded-lg overflow-hidden">
            <img
              src={image}
              alt={`Event Memory ${index + 1}`}
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventMemories;
