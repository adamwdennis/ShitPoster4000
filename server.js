var imgur = require('./imgur.js');
var scheduler = require('./scheduler');

var repostTask = function () {
  imgur.repost('https://c2.staticflickr.com/2/1657/24436425589_b82295dbb9_k.jpg', function (error, newurl) {
    if (error) {
      return;
    }

    console.log('New url:', newurl);
  });
}

var okTask = function () {
  console.log('ok');
};

var okJob = function () {
  scheduler.runAllTasks([okTask, okTask, okTask], 5000);
};

console.log('Shitposter go!')
// scheduler.runJob(repostTask);
scheduler.runJob(okJob, 60000);