const multer = require('multer')
const fs = require('fs')
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null,new Date().toISOString().replace(/:/g, '-') + file.originalname)
    }
})

const fileFilter = function(req, file, cb) {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}
const uploadImage = multer({storage: storage })


function deleteImage (file)  {
    const fileName = file.slice(8)
    const ff = `uploads/${fileName}`
    fs.unlink(ff, (err) => {
        if (err) {
            console.log(err)
        }
    })
}











module.exports = { uploadImage, deleteImage }