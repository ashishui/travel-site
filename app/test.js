var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + '/newfile.html', "<h1>hello world new</h1>", function(error) {
    if(error) {
        return console.log(error);
    }else {
        return console.log("congrats the file is created");
    }
});

var photoURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW6iprmVYYPJ3Ku1WL96E2ghO242WqE06d4qJ2-9uRCDflQXvs&s';
https.get(photoURL,function(response) {
    response.pipe(fs.createWriteStream(__dirname +'/mydog.jpg'));
})