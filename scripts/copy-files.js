var fs = require('fs');

var resources = [
  './css/',
  './assets/',
  './node_modules/core-js/client/shim.min.js',
  './node_modules/zone.js/dist/zone.min.js',
];

resources.map(function(e) {
  if(e.substr(e.length - 1) == '/') {
    fs.readdir(e, (err, files) => {
      files.forEach(file => {
        copyFile(e + file);
      });
    })
  } else {
    copyFile(e);
  }
});

function copyFile(e) {
  var directory;
  var extension;
  var path;
 
  path = e.split('/');
  extension = path[path.length - 1].substring(path[path.length - 1].lastIndexOf('.') + 1);

  switch(extension.toLowerCase())
  {
    case "js": 
      directory =  './dist/js/'
      break;

    case "jpg":
      directory = './dist/assets/';
      break;

    case "ico":
      directory = './dist/assets/';
      break;
	  
    case "css":
      directory = './dist/css/';
      break;

    default:
      directory = './dist/';
      break;
  }
  
  if (!fs.existsSync(directory) && directory != ''){
    fs.mkdirSync(directory);
  }

  fs.createReadStream(e).pipe(fs.createWriteStream(directory + path[path.length - 1]));
}