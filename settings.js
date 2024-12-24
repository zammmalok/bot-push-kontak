// Silahkan Ubah Sesuka Hati Jangan Hapus Tanda ' ' agar script tidak eror.

const fs = require('fs')
const chalk = require('chalk')

global.owner = ['62881012866671']
global.name = 'Alief nd'
global.JEDA = 5000  // Ganti Sesuai Keinginan (5000ms = 5 detik) jadi jedanya 5 detik
global.pairing = true // true / false ; true = menggunakan pairing code &  false = menggunakan qr code

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.blueBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
/*

*/
// J