var fs = require('fs')

fs.readFile('index.html', 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }

    data = data.replace('<script src="node_modules/core-js/client/shim.min.js"></script>', '<script src="./js/shim.min.js"></script>');
    data = data.replace('<script src="node_modules/zone.js/dist/zone.js"></script>', '<script src="./js/zone.min.js"></script>');
    data = data.replace('<script src="node_modules/reflect-metadata/Reflect.js"></script>', '<script>window.module = "aot";</script>');
    data = data.replace('<script src="node_modules/systemjs/dist/system.src.js"></script>', '');
    data = data.replace('<script src="systemjs.config.js"></script>', '');
    data = data.replace('<script>System.import(\'app\').catch(function(err){ console.error(err);});</script>', '');
    data = data.replace('</body>', '<script src="./js/main.js"></script></body>');
    data = data.replace(/(?:\r\n|\r|\n)/g, '');

    fs.writeFile('./dist/index.html', data, 'utf8', 
        function (err) {
            if (err) return console.log(err);
        }
    );
}); 