import logo from "../assets/Logo 1.png";
import search from "../assets/search.png";
import menu from "../assets/Menu.png";
function Header() {
  return (
    <div className="flex justify-between items-center px-20 pb-12 ">
      <img src={logo} alt="My Image" className="w-20 h-16 object-contain" />
      <img src={search} alt="search" className="w-10 h-6 object-contain" />
      <img src={menu} alt="menu" className="w-10 h-6 object-contain" />
    </div>
  );
}

export default Header;
