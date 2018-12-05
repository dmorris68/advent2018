var fs = require("fs");

day1();

function day1()
{
  var freqs = [];
  var firstDupe = null;
  fs.readFile("day1input.txt", "utf8", function(err, data) {
    if ( err )
      throw err;
    var lines = data.split(/\r?\n/);
    var freq = 0;
    for ( var i = 0; i < lines.length; i++ )
    {
      var adj = lines[i];
      freq += Number(adj);
      if ( freqs.indexOf(freq) >= 0 )
        firstDupe = freq;
      freqs.push(freq);
    }
    console.log("day 1 - freq == " + freq);
    console.log("day 1 - firstDupe == " + firstDupe);
  });


}