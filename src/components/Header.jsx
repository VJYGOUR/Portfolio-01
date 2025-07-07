function Header() {
  return (
    <header className="w-full  bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo / Site Name */}
        <a
          href="#"
          className="text-2xl font-bold text-gray-900 hover:text-black transition-colors"
        >
          YourName
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-gray-700 text-sm font-medium">
          <a href="#about" className="hover:text-black transition-colors">
            About
          </a>
          <a href="#work" className="hover:text-black transition-colors">
            Work
          </a>
          <a href="#services" className="hover:text-black transition-colors">
            Services
          </a>
          <a href="#contact" className="hover:text-black transition-colors">
            Contact
          </a>
        </nav>

        {/* Mobile Nav Placeholder */}
        <div className="md:hidden">
          {/* TODO: Add mobile menu toggle (e.g. Hamburger icon) */}
          {/* Consider using Headless UI or Radix UI for accessibility */}
        </div>
      </div>
    </header>
  );
}

export default Header;
