var path = require('path')

module.exports = {
	entry: './app/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	/*
	externals: [
		{
			'react': {
				root: 'React',
				commonjs2: 'react',
				commonjs: 'react',
				amd: 'react'
			}
		},
		{
			'react-dom': {
				root: 'ReactDOM',
				commonjs2: 'react-dom',
				commonjs: 'react-dom',
				amd: 'react-dom'
			}
		}
	],
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			compress: {
				warnings: false
			}
		})
	],
	*/
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				include: path.join(__dirname, 'app'),
				exclude: /node_modules/,
				query: {
					presets: [/*'es2015',*/'react']
				}
			}
		]
	}
}
