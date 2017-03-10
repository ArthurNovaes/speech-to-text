const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(3000, () => {
	console.log('up')
})

app.get('/route', (req, res) => {
	res.sendFile(__dirname + "/public/index.html")
})