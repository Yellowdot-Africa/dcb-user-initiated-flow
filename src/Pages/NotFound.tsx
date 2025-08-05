
const NotFound = () => {
  return (
    <>
      <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center text-white px-4 text-center">
        <div>
          <h1 className="text-[80px] font-['RethinkSans-Bold'] font-bold text-[#FF7900]">
            404
          </h1>
          <h2 className="text-[24px] font-[Inter] font-semibold mb-4">
            Page Not Found
          </h2>
          <p className="text-[#8F8F8F] font-[Inter] mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
