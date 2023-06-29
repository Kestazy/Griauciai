import React, { useState, useEffect } from 'react'
import AdsCard from './AdsCard';
import adsService from '../services/adsServise';
import Categories from './Categories';

const AllAds = () => {
    const [ads, setAds] = useState([]);
    const [copyAds, setCopyAds] = useState([]);

    //gautus duomenis is API, isideti i state
    const adsData = () => {
        adsService.getAllAdsData()
            .then(res => {
                if (res !== undefined) {
                    setAds(res);
                    setCopyAds(res);
                }
            })
    }

    const filterAds = (category) => {
        console.log(category);
        // ifas pargrazinti visus duomenis be filtracijos
        if (category !== 'All') {
            // filtruojamos salys
            const filtered = copyAds.filter((items) => items.category.includes(category));
            setAds(filtered);
        } else {
            // priskiriamos visos salys
            setAds(copyAds);
        }
    }

    useEffect(() => {
        adsData();
    }, [])

    return (
        <div>
            <Categories filterAds={filterAds} />
            <AdsCard ads={ads} />
        </div>
    )
}

export default AllAds
