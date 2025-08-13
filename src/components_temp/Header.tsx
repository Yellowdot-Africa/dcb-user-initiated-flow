const Header = () => {
  return (
    <header className="bg-white shadow-lg border-b border-yellow-400">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 animate-fadeIn">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="https://yellowdotafrica.com/wp-content/uploads/2023/01/yellowdot1.png"
            alt="Logo"
            className="h-14 w-auto drop-shadow-md transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Heading */}
        {/* <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 tracking-wide italic underline decoration-yellow-400 decoration-2 underline-offset-4 drop-shadow-sm text-center sm:text-left">
          DCB User Initiated Flow 🚀
        </h1> */}
        
      </div>
    </header>
  );
};

export default Header;
