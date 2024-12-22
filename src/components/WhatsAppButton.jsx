// src/components/WhatsAppButton.jsx

const WhatsAppButton = () => {
  const phoneNumber = "9962601510"; // Replace with your WhatsApp number
  const message = "Hello, I have a query!"; // Default message

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 transform transition-transform hover:scale-110 block md:hidden"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-12 h-12" // Adjust size as needed
      />
    </a>
  );
};

export default WhatsAppButton;
