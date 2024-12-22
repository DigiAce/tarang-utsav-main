const reviews = [
  {
    id: 1,
    name: "Sita Venkat",
    title: "Memories That Last a Lifetime!",
    content:
      "Our daughter’s birthday party was a huge success, thanks to Tarang Utsav. Their attention to detail and fun-filled themes made the event unforgettable. Highly recommend them for any occasion!",
    stars: 5,
  },
  {
    id: 2,
    name: " Ananya & Rahul",

    title: "A Fairytale Wedding Come True.",
    content:
      "Tarang Utsav turned our wedding into a magical fairytale! From planning to execution, every detail was handled with such care and professionalism. They truly are the best event planners in Chennai!",
    stars: 5,
  },
  {
    id: 3,
    name: "Karthik Sharma",
    title: "Corporate Events, Redefined!",
    content:
      "We trusted Tarang Utsav with our corporate annual meet, and they exceeded all expectations. The creativity, punctuality, and flawless arrangements were beyond impressive!",
    stars: 4,
  },
];

const TrustedPartner = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Header Section */}
        <div className="md:flex md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Read trusted reviews from our customers
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-gray-700">
              Celebrate life’s finest moments with Tarang Utsav, the best event
              planner in Chennai – your trusted partner for seamless
              celebrations and unforgettable experiences.
            </p>
          </div>
          <a
            href="#"
            className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-rose-600 px-5 py-3 text-rose-600 transition hover:bg-rose-600 hover:text-white md:mt-0"
          >
            <span className="font-medium"> Read all reviews </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 rtl:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <blockquote
              key={review.id}
              className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8"
            >
              <div>
                {/* Stars */}
                <div className="flex gap-0.5 text-green-500">
                  {Array(review.stars)
                    .fill(0)
                    .map((_, index) => (
                      <svg
                        key={index}
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                </div>
                {/* Review Title and Content */}
                <div className="mt-4">
                  <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
                    {review.title}
                  </p>
                  <p className="mt-4 leading-relaxed text-gray-700">
                    {review.content}
                  </p>
                </div>
              </div>
              {/* Footer */}
              <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                &mdash; {review.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartner;
