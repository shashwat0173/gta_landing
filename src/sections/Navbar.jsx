const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center md:p-16 p-5 z-[100];">
      <img src="/images/nav-logo.svg" className="scale-90" />
      <img src="/images/menu.svg" className="w-10" />
    </nav>
  );
};

export default Navbar;
