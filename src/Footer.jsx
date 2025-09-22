import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className='footer'>
      <div><a href="https://github.com/NahidKameli/">© 2025 Developed By Nahid Kameli</a></div>
      <ul className="flex gap-6">
        <li>
          <a href="/about" className="hover:text-green-400">
            about
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:text-green-400">
            contact
          </a>
        </li>
        <li>
          <a href="/terms" className="hover:text-green-400">
            terms
          </a>
        </li>
      </ul>
      <div className="flex gap-4">
        <a href="#" className="hover:text-green-400">
          <FaInstagram size={24} />
        </a>
        <a href="#" className="hover:text-green-400">
          <FaTwitter size={24} />
        </a>
        <a href="#" className="hover:text-green-400">
          <FaFacebook size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;