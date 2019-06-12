let express = require('express');

let app = express();

app.use('/', express.static('./examples/'));

app.listen(3000, function () {
	console.log('app is running at port 3000.');
});