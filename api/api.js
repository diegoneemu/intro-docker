let express = require('express');
let app = express();

app.get('/', (req, res) => {
	res.send('hello there!');
});

const PORT = 4000;

app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`);
});
