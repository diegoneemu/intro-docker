let express = require('express');
let http = require('http');
let app = express();

app.get('/', (req, res) => {
	let opt = {
		host: 'localhost',
		port: 4000
	};
	http.request(opt, (api) => {
		api.on('data', (chunk) => {
			res.send(`<h1>${chunk}</h1>`);
		});
	}).end();
});

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`);
});
