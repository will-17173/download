const fs = require('fs');
const download = require('download');
const data = require('./har.json');
var urlsToDownload = [];
data.log.entries.forEach(function(val) {
    if (/\.(jpg|png|gif|css|js)$/.test(val.request.url)) {
        urlsToDownload.push(val.request.url)
    }
})
Promise.all(urlsToDownload.map(x => download(x, 'resources'))).then(() => {
    console.log('files downloaded!');
});