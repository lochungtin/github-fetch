const axios = require('axios');

const baseURL = 'https://raw.githubusercontent.com/';

interface fetchConfig {
	fileName: String;
	repo: String;
	username: String;
	branch?: String;
};

interface fetchReadmeConfig {
	repo: String;
	username: String;
	branch?: String;
};

const constructURL = (params: fetchConfig) => {
	const branch = params.branch || 'master';
	return baseURL + '/' + params.username + '/' + params.repo + '/' + branch + '/' + params.fileName;
};

const constructReadmeURL = (params: fetchReadmeConfig) => {
	const branch = params.branch || 'master';
	return baseURL + '/' + params.username + '/' + params.repo + '/' + branch + '/README.md';
};

class GHFetch {
	static fetchFile = async (params: fetchConfig) => {
		try {
			const res = await axios.get(constructURL(params));
			return res.data;
		}
		catch (err: any) {
			console.warn(err.message);
			return "";
		}
	};

	static fetchReadme = async (params: fetchReadmeConfig) => {
		try {
			const res = await axios.get(constructReadmeURL(params));
			return res.data;
		}
		catch (err: any) {
			console.warn(err.message);
			return "";
		}
	};
};

export = GHFetch;
