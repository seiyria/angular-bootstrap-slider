exports.config = {
	allScriptsTimeout: 11000,

	specs: [
		'*.js'
	],

	capabilities: {
		'browserName': 'chrome'
	},

	baseUrl: 'http://localhost:31337',

	framework: 'jasmine',

	jasmineNodeOpts: {
		defaultTimeoutInterval: 30000
	}
};