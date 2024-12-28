import { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll"; // Import Link from react-scroll
import logo2 from "../assets/image/logo2.jpg";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // State to track active section

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <nav className="p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Brand Logo */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-950 dark:text-white text-lg font-bold"
          >
            <img src={logo2} alt="Company Logo" className="w-20 h-auto rounded-full" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
           className={`text-3xl lg:hidden ${
            theme === "light" ? "text-black" : "text-white"
          }`}
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Navigation Links */}
          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } absolute top-16 right-0 w-52 mr-3 bg-zinc-400 flex-col items-center z-20
            lg:flex lg:static lg:w-auto lg:bg-transparent lg:flex-row`}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-11 font-serif text-lg p-6 leading-10">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  onSetActive={() => setActiveSection("home")} // Set active section
                  className={`cursor-pointer ${
                    activeSection === "home"
                      ? "text-yellow-400 font-serif sm:text-lg lg:text-2xl px-4 py-3"
                      : `${theme === "light" ? "text-black" : "text-white"} font-serif sm:text-lg lg:text-2xl`
                  } hover:text-yellow-400`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="movies"
                  smooth={true}
                  duration={500}
                  onSetActive={() => setActiveSection("movies")} // Set active section
                  className={`cursor-pointer ${
                    activeSection === "movies"
                      ? "text-yellow-400 font-serif sm:text-lg lg:text-2xl px-4 py-3"
                      : `${theme === "light" ? "text-black" : "text-white"} font-serif sm:text-lg lg:text-2xl`
                  } hover:text-yellow-400`}
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  to="genres"
                  smooth={true}
                  duration={500}
                  onSetActive={() => setActiveSection("genres")} // Set active section
                  className={`cursor-pointer ${
                    activeSection === "genres"
                      ? "text-yellow-400 font-serif sm:text-lg lg:text-2xl px-4 py-3"
                      : `${theme === "light" ? "text-black" : "text-white"} font-serif sm:text-lg lg:text-2xl`
                  } hover:text-yellow-400`}
                >
                  Genres
                </Link>
              </li>
            </ul>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-black dark:bg-yellow-500 text-white dark:text-black rounded-lg flex items-center"
          >
            {theme === "light" ? <FaMoon className="mr-2" /> : <FaSun className="mr-2" />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
