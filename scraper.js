var scrape = require('website-scraper');

var options = {
  urls: [process.argv[2]],
  directory: __dirname + '/' + process.argv[3]
};
scrape(options);

// with promise


// .then((result) => {
// 	/* some code here */
// }).catch((err) => {
// 	/* some code here */
// });

// or with callback
// scrape(options, (error, result) => {
// });