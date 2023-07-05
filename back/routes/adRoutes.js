const express = require('express');
const router = express.Router();

const {
    getAllAds,
    setAd,
    getAds
} = require('../controllers/adController');

const { protect } = require('../middleware/authMiddleware');


router.route('/').get(getAllAds).post(protect, setAd)
router.route('/my').get(protect, getAds)

module.exports = router