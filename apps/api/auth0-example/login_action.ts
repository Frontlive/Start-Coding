// @ts-nocheck

const axios = require('axios');
const crypto = require('node:crypto');

const domain = 'https://ce42-91-244-219-162.eu.ngrok.io';

/**
 * Handler that will be called during the execution of a PostLogin flow.
 *
 * @param {Event} event - Details about the user and the context in which they are logging in.
 * @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.
 */
exports.onExecutePostLogin = async (event, api) => {
	try {
		const body = {
			email: event.user.email,
			name: event.user.name,
			nickname: event.user.nickname,
			picture: event.user.picture,
			user_id: event.user.user_id,
		};
		const calculatedSha = crypto
			.createHmac('sha256', event.secrets.WEBHOOK_SECRET)
			.update(JSON.stringify(body))
			.digest('hex');
		if (event.stats.logins_count === 1) {
			const response = await axios.post(
				`${domain}/webhooks/post-register`,
				body,
				{ headers: { 'x-start-coding-auth': calculatedSha } },
			);
		} else {
			const response = await axios.post(`${domain}/webhooks/post-login`, body, {
				headers: { 'x-start-coding-auth': calculatedSha },
			});
		}
	} catch (e) {
		console.log(e);
	}
};
