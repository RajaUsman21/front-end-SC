const HeroSection = () => {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="md:flex md:justify-between items-center">
            {/* Left Side */}
            <div className="md:w-1/2">
              <h1 className="font-black text-3xl md:text-5xl leading-tight mb-4">
                Connect with <span className="bg-blue-500 text-white px-3 py-1 rounded">Startups</span>
              </h1>
              <h4 className="font-semibold text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                Empower your startup with the tools and connections needed to succeed. Explore opportunities and grow your network.
              </h4>
            </div>
            {/* Right Side */}
            <div className="md:w-1/2 md:pl-10">
              <img
                src="https://i.imgur.com/sxbxff5.jpg"
                alt="Startup Connect Image"
                className="max-w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  