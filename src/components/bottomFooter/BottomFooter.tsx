const BottomFooter = () => {
  return (
    <div className="bg-[#002f33] text-white py-6">
      {/* Main Footer Content */}
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row px-4 gap-6">
        {/* Left Section: Logo */}
        <div className="flex items-center gap-3 h-24">
          <img
            src="https://statics.olx.in/external/base/img/cartrade/logo/cartrade_tech.svg?v=1"
            alt="CarTradeTech Group Logo"
            className="h-full"
          />
        </div>

        {/* Middle Section: Company Logos */}
        <div className="flex items-center justify-between h-14 gap-8">
          <img
            src="https://statics.olx.in/external/base/img/cartrade/logo/olx.svg?v=1"
            alt="OLX Logo"
            className="h-full"
          />
          <img
            src="https://statics.olx.in/external/base/img/cartrade/logo/carwale.svg?v=1"
            alt="CarWale Logo"
            className="h-full"
          />
          <img
            src="https://statics.olx.in/external/base/img/cartrade/logo/bikewale.svg?v=1"
            alt="BikeWale Logo"
            className="h-full"
          />
          <img
            src="https://statics.olx.in/external/base/img/cartrade/logo/cartrade.svg?v=1"
            alt="CarTrade Logo"
            className="h-full"
          />
          <img
            src="https://statics.olx.in/external/base/img/cartrade/logo/mobility.svg?v=1"
            alt="Mobility Outlook Logo"
            className="h-full"
          />
        </div>

        {/* Right Section: Footer Text */}
      </div>

      {/* Footer Bottom Section */}
      <div className="max-w-[1280px] mx-auto px-4 mt-4 text-center">
        <div className="text-center lg:text-right text-sm">
          <p>Free Classifieds in India. © 2006-2025 OLX</p>
        </div>
        <a
          href="#"
          className="text-sm text-gray-400 hover:text-white underline"
        >
          Sitemap
        </a>
      </div>
    </div>
  );
};

export default BottomFooter;
