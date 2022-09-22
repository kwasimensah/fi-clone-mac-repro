const fs = require('fs')

fs.copyFile('origfile.txt', 'newfile.txt', fs.constants.UV_FS_COPYFILE_FICLONE_FORCE, err => { if (err) { console.log(err) }})