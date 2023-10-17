const getUserInfo = require("./getUserInfo/getUserInfo");
const updateUserInfo = require("./updateUserInfo/updateUserInfo");
const createThread = require("./createThread/createThread");
const getThread = require("./getThread/getThread");
const updateThread = require("./updateThread/updateThread");
const addToHistory = require("./addToHistory/addToHistory");
const addUser = require("./addUser/addUser");
const addAction = require("./addAction/addAction");
const getUsersList = require("./getUsersList/getUsersList");
const getActions = require("./getActions/getActions");

const REQUESTS = {
	getUserInfo,
	updateUserInfo,
	createThread,
	getThread,
	updateThread,
	addToHistory,
	addUser,
	addAction,
	getUsersList,
	getActions,
};

function getDBRequest(type, params) {
	const request = REQUESTS[type];
	if (!request) {
		throw new Error(`Invalid request type: ${type}`);
	}
	return request(params);
}

module.exports = getDBRequest;
