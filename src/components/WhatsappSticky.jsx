import { FaPhone, FaWhatsapp } from "react-icons/fa";

const WhatsAppSticky = () => {
  const phoneNumber = ""; // Replace with your WhatsApp number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-6 right-6 md:bottom-12 md:right-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-transform hover:scale-110"
      title="Chat with us on WhatsApp"
    >
      <FaPhone className="text-2xl" />
    </a>
  );
};

export default WhatsAppSticky;
