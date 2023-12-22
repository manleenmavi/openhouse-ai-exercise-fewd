const Footer = () => {
  return (
    <footer className="bg-white py-4 text-center border-t-2 border-gray-200">
      <div className="container mx-auto">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} OpenHouse.AI
        </p>
        <div className="flex justify-center flex-wrap space-x-4 mt-2">
          <a
            href="/about"
            className="text-gray-600 hover:text-gray-900 transition duration-300"
          >
            About Us
          </a>
          <a
            href="/privacy"
            className="text-gray-600 hover:text-gray-900 transition duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="text-gray-600 hover:text-gray-900 transition duration-300"
          >
            Terms of Service
          </a>
        </div>
        <div className="flex justify-center mt-4">
          {/* Add social media icons or links here */}
          {/* Example: LinkedIn, Twitter, GitHub */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
