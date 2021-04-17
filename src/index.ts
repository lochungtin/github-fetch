const axios = require("axios");

const baseURL = "https://raw.githubusercontent.com/";

interface fetchConfig {
	fileName: String;
	repo: String;
	username: String;
	branch?: String;
}

const constructURL = (params: fetchConfig) => {
	const branch = params.branch || "master";
	return baseURL + "/" + params.username + "/" + params.repo + '/' + branch + '/' + params.fileName;
};

const fetchFile = async (params: fetchConfig) => {
	axios
		.get(constructURL(params))
		.then((res: any) => console.log(res.data));
};

export { fetchFile };