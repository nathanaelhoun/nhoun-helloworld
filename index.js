const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 80;

process.on('SIGINT', function () {
	process.exit();
});

app.get('/', (req, res) => {
	if (Math.random() < 0.5) {
		res.sendFile(path.resolve('public/thegame.html'));
	} else {
		res.sendFile(path.resolve('public/video.html'));
	}
});

app.listen(port, () => {
	console.log(`Hello world app listening on port ${port} inside the container.`);
});
