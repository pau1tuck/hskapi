const path = require("path");
module.exports = {
	// webpack will take the files from ./src/index
	entry: "./src/index",

	// and output it into /dist as bundle.js
	output: {
		path: path.join(__dirname, "/static/web"),
		filename: "index.js"
	},

	// adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
	resolve: {
		extensions: [ ".ts", ".tsx", ".js" ]
	},

	module: {
		rules: [
			// we use babel-loader to load our jsx and tsx files
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},

			// css-loader to bundle all the css files into one file and style-loader to add all the styles inside the style tag of the document
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader"
				]
			}
		]
	}
};
