const express = require('express');
const router = express.Router();

const {
    getAllAds,
    setAd,
    getAds,
    updateAd,
    deleteAd
} = require('../controllers/adController');

const { protect } = require('../middleware/authMiddleware');


router.route('/').get(getAllAds).post(protect, setAd)
router.route('/my').get(protect, getAds)
router.route('/:id').delete(protect, deleteAd).put(protect, updateAd)

module.exports = router