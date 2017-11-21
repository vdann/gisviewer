const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(serveStatic(path.join(__dirname, 'public-optimized')))
app.use(serveStatic(path.join(__dirname, 'public')))
app.listen(PORT, (err) => {
	if (err) {
		console.log('Server start error', err);
		return;
	}

	console.log(`Server starten on port ${PORT}`);
});