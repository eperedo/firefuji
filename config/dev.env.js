var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
	NODE_ENV: '"development"',
	apiKey: '"AIzaSyCPmxdugOlKXlw-ZsZpVh6eVZYjMBCYjmY"',
	authDomain: '"fujideces.firebaseapp.com"',
	databaseURL: '"https://fujideces.firebaseio.com"',
	projectId: '"fujideces"',
	storageBucket: '"fujideces.appspot.com"',
	messagingSenderIdd: '"716842806435"',
});
