import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import adsService from '../services/adsServise';

const AdminAds = () => {
    const [ads, setAds] = useState([]);
    const [copyAds, setCopyAds] = useState([]);

    const { myCategory } = useSelector((state) => state.myCategory);

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

    useEffect(() => {
        // ifas pargrazinti visus duomenis be filtracijos
        if (myCategory !== 'All') {
            // filtruojamos categorijos
            const filtered = copyAds.filter((items) => items.category.includes(myCategory));
            setAds(filtered);
        } else {
            // priskiriamos visos categorijos
            setAds(copyAds);
        }
    }, [copyAds, myCategory])

    useEffect(() => {
        adsData();
    }, [])

    return (
        <div className='d-flex flex-wrap justify-content-center mt-3'>
            {
                ads.length > 0 ? (
                    ads.map((item, index) => (
                        item.status === 'pending' ? (
                            <Card className='d-inline-flex m-2 h-50' key={index} style={{ width: '30rem' }}>
                                <Card.Img className='img-fluid img-thumbnail' variant="top" src={item.img} />
                                <Card.Body>
                                    <Card.Title className="border-bottom d-flex justify-content-center">{item.title}</Card.Title>
                                    <Card.Text className="border-bottom mt-3"><span className='fw-medium'>Aprasymas:</span> {item.description}</Card.Text>
                                    <Card.Text className="border-bottom"><span className='fw-medium'>Kaina:</span> {item.price} €</Card.Text>
                                    {/* <Card.Text className="border-bottom"><span className='fw-medium'>komentarai:</span> {item.price} €</Card.Text> */}
                                    <Button className='m-2 ' variant="success" type="submit">
                                        Patvirtinti
                                    </Button>
                                    <Button className='m-2 ' variant="danger" type="submit">
                                        Blokuoti
                                    </Button>
                                </Card.Body>
                            </Card>
                        ) : <span key={index}></span>

                    ))
                ) : <h3>Skelbimu sistemoje nera</h3>
            }
        </div>
    )
}

export default AdminAds
