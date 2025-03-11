// const express = require('express');
// const imageController = require('../controller/imageController')
// const router = express.Router();

// router.post('/add-image', imageController.createImage);
// module.exports = router;

const express = require('express');
const imageController = require('../controller/imageController'); // Ensure correct folder name
const router = express.Router();

// Route to add an image
router.post('/add-image', imageController.createImage);
router.get('/get-image', imageController.getImage);

module.exports = router;
