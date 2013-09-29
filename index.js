var bouncy = require('bouncy');
require('./lib/cleanup');
require('./lib/launchServices');
require('./lib/webStreams');
require('./lib/app');
require('./lib/server').listen(15001);

var server = bouncy(function (req, res, bounce) { 
  bounce(15001);
});

server.listen(15000);

process.on('SIGTERM', process.exit);
