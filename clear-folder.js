const fs = require('fs');

const deleteFolderRecursive = function(path, first = true) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function(file, index) {
            var curPath = path + "/" + file;
            if (fs.lstatSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath, false);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        if(!first)
        	fs.rmdirSync(path);
    }
}

module.exports = deleteFolderRecursive;
