
const Image = require('../models/image');

const createImage = async (req, res) => {
    try {
        const newImage = await Image.create(req.body); // Correct usage
        res.status(200).json({ message: 'Image successfully stored', data: newImage });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getImage = async (req, res) => {
    try {
        
        const imageData = await Image.find();
        res.json(imageData)
        // console.log(imageData)

    } catch (e) {
        console.error(e);
        
    }
};  

module.exports = { createImage, getImage };

