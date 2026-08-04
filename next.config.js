const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:1337/api/:path*",
      },
      {
        source: "/uploads/:path*",
        destination: "http://localhost:1337/uploads/:path*",
      },
    ];
  },  
};
