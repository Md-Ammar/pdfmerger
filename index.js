const express = require('express')
const path = require('path')
const app = express()
const multer = require('multer')
const {mergePDFs} = require('./merge')

const upload = multer({ dest: 'uploads/' })
app.use('/static', express.static('public'))
const port = 3000

app.get('/', (req, res) => {
  res.sendFile('templates/index.html', { root: __dirname })
})

app.post('/merge', upload.array('pdfs', 2), async (req, res, next) => {
  console.log(req.files)
  let d = await mergePDFs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path))
  res.redirect(`http://localhost:3000/static/${d}.pdf`)
  // return res.send({data: req.files})
})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})