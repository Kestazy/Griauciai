const Ad = require('../models/AdModel');

const asyncHandler = require('express-async-handler')

// @desc Get all ads info
// @route POST /api/ad
// @access PUBLIC

const getAllAds = asyncHandler(async (req, res) => {
    const ads = await Ad.find();
    res.status(200).json(ads);
})

// @desc Set new ad
// @route POST /api/ad
// @access Private (Only siple user)

const setAd = asyncHandler(async (req, res) => {
    const { title, description, price, img, category } = req.body
    if (!title || !description || !img || !price || !category) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    const ad = await Ad.create({
        title,
        description,
        img,
        price,
        category,
        user: req.user.id
    })
    if (ad) {
        res.status(201).send(ad)
    } else {
        res.status(400)
        throw new Error('Invalid data')
    }
})

// get user's ads

// @desc Get users ads
// @route GET /api/ad/my
// @access PRIVATE

const getAds = asyncHandler(async (req, res) => {
    const ads = await Ad.find({ user: req.user.id })
    res.status(200).json(ads)
})

module.exports = {
    getAllAds,
    setAd,
    getAds
}