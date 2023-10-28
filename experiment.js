var Mocha = require('mocha');
var report = {};

new Mocha().
  addFile("test/toyTest").
  reporter("json", {"output-object": report}).
  run(function (failures) {
    process.on('exit', function () {
      var s = report.stats;
      console.log("percentage: " + s.passes/(s.passes+s.failures));
      process.exit(failures > 0 ? 1 : 0);
    });
  });
