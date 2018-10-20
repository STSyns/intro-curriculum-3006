'use strict';
const lots = ['super lucky', 'lucky', 'small lucky', 'bad', 'super bad'];
const lot = lots[Math.floor(Math.random() * lots.length)];

module.exports = (robot) => {
	robot.hear(/lot>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username + '. ->' + lot);
	});
};
