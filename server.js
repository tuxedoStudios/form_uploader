const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.post('/submit', upload.single('file'), (req, res) => {
  console.log('=== New Submission ===');
  console.log('Email:', req.body.email);
  console.log('Name:', req.body.fullname);
  console.log('Address:', req.body.address);
  console.log('Message:', req.body.message);
  console.log('Uploaded File:', req.file);

  res.send('Thanks! Your submission has been received.');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
