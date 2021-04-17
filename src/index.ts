const axios = require('axios');

const baseURL = 'https://raw.githubusercontent.com/';

interface fetchConfig {
	fileName: String;
	repo: String;
	username: String;
	branch?: String;
}

const constructURL = (params: fetchConfig) => {
	const branch = params.branch || 'master';
	return baseURL + '/' + params.username + '/' + params.repo + '/' + branch + '/' + params.fileName;
};

const ERRORS = {
	"404": "Error: FILE NOT FOUND",
	"UNKNOWN": "Error: unknown"
};

const fetchFile = async (params: fetchConfig) => {
	try {
		const res = await axios.get(constructURL(params));
		return res.data;
	}
	catch (err: any) {
		if (err.status === 404) {
			console.warn(ERRORS[404]);
			return "";
		}

		console.warn(ERRORS.UNKNOWN);
		return "";
	}
}


export { fetchFile };