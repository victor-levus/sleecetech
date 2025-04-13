const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},

	env: {
		BACKEND_URL: "https://api.betcodes.space/api/",
	},

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "img.freepik.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "**",
				port: "",
				pathname: "/**",
			},
		],
	},
};
