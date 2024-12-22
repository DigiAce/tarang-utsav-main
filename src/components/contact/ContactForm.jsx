import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Display success toast
    toast.success("Your enquiry has been sent successfully!", {
      position: "top-right", // Using the string 'top-right' instead of toast.POSITION.TOP_RIGHT
    });

    // Reset form state (clear the fields)
    setName("");
    setPhone("");
    setService("");
  };

  return (
    <section className="bg-gray-100 mt-10">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-black mb-10">
          Contact Form
        </h2>
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          {/* Left Section */}
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg">
              At the same time, the fact that we are wholly owned and completely
              independent from any venue or vendor networks gives you confidence
              that we will only recommend what is truly right for your
              celebration—whether its a birthday, engagement, bridal shower, or
              any other special event
            </p>
            <div className="mt-8">
              <a
                href="tel:01514754450"
                className="text-2xl font-bold text-pink-600"
              >
                +91 99626 01510
              </a>
              <address className="mt-2 not-italic">
                41 Santhosh nagar, Water Canal Rd, near royal car wash, next to
                vaishnavi auto garage, Varasakthi Nagar, annex, Kolathur,
                Chennai, Tamil Nadu 600099
              </address>
            </div>
          </div>

          {/* Form Section */}
          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form
              onSubmit={handleSubmit}
              action="https://formspree.io/f/xovqzjrp"
              method="POST"
              className="space-y-4"
            >
              {/* Name Input */}
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border-gray-300 p-3 text-sm outline-gray-400 focus:outline focus:outline-2 focus:outline-black"
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* Phone Input */}
              <div>
                <label className="sr-only" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  id="phone"
                  name="phone" // This should be "phone" instead of "name"
                  value={phone} // Bind it to the phone state variable
                  onChange={(e) => setPhone(e.target.value)} // Update state on change
                  required
                  className="w-full rounded-lg border-gray-300 p-3 text-sm outline-gray-400 focus:outline focus:outline-2 focus:outline-black"
                />
              </div>

              {/* Services Dropdown */}
              <div>
                <label
                  htmlFor="services"
                  className="block text-sm font-medium text-gray-700"
                >
                  Select a Service
                </label>
                <select
                  id="services"
                  name="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  required
                  className="w-full rounded-lg border-gray-300 p-3 text-sm outline-gray-400 focus:outline focus:outline-2 focus:outline-black"
                >
                  <option value="">-- Select a Service --</option>
                  <option value="Birthday Party">Birthday Party</option>
                  <option value="Cocktail Party">Cocktail Party</option>
                  <option value="Mehndi">Mehandi</option>
                  <option value="House Warming">House Warming</option>
                  <option value="Haldi Ceremony">Haldi Ceremony</option>
                  <option value="Wedding">Sangeet</option>
                  <option value="Anniversary Celebration">
                    Anniversary Celebration
                  </option>
                  <option value="Corporate Event">Corporate Event</option>
                  <option value="Baby Shower">Baby Shower</option>
                  <option value="Bridal Shower">Bridal Shower</option>
                  <option value="Engagement">Engagement</option>
                  <option value="Bachelorette Party">Bachelorette Party</option>
                </select>
              </div>

              {/* Hidden _next Input for Formspree */}
              <input
                type="hidden"
                name="_next"
                value="https://your-redirect-url.com" // Replace with your actual redirect URL after submission
              />
              <input type="hidden" name="_subject" value="New Enquiry" />

              {/* Submit Button */}
              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </section>
  );
};

export default ContactForm;
