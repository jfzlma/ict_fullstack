const file = req('fs')
var data = "This is written by node";
fs.writeFile('tmp.txt', data, function(data, err){
    if(err) console.log('Error', +err)
    else console.log('success')
});
