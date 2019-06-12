let express = require('express');

let app = express();

app.use('/', express.static('./apps/'));

app.listen(3000, function () {
	console.log('ECMAScript is running at port 3000.');
});