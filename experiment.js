var Mocha = require('mocha');

var mocha = new Mocha({});

var outer_json={}
var inner_json={}
var counter=0

function getTime() {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    return dateTime;
}

mocha.addFile('./mathbasics.test.js')
mocha.run()
    .on('test', function(test) {
        //console.log('Test started: '+test.title);
        inner_json['Test started-'+counter.toString()]=test.title
    })
    .on('test end', function(test) {
        //console.log('Test done: '+test.title);
        inner_json['Test ended-'+counter.toString()]=test.title
    })
    .on('pass', function(test) {
        // console.log('Test passed');
        // console.log(test);
        inner_json['Test passed-'+counter.toString()]=test
        counter+=1
    })
    .on('fail', function(test, err) {
        inner_json['Test fail-'+counter.toString()]=test
        inner_json['Test fail Error']=err
        counter+=1
        // console.log('Test fail');
        // console.log(test);
        // console.log(err);
    })
    .on('end', function() {
        // console.log('All done');
        inner_json['All done']=getTime()
        outer_json[getTime()]=inner_json
        console.log(outer_json)
    });



