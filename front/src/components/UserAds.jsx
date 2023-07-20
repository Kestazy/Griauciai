import { deleteAd, getUserAds, reset } from '../features/adsSlice';
import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from './Spinner';
import { toast } from 'react-toastify';


const UserAds = () => {

    const dispatch = useDispatch();

    const { ads, isLoading, isError, message } = useSelector((state) => state.ads);

    useEffect(() => {
        if (isError) {
            console.log(message);
        }

        dispatch(getUserAds());
        return () => {
            dispatch(reset())
        }

    }, [isError, message, dispatch]);

    console.log(ads);

    // skelbimo istrynimui su vartotojo informacija
    const onClick = (item) => {
        if (item === undefined) {
            toast.error('Skelbimo istrinti nepavyko')
        } else {
            dispatch(deleteAd(item))
            toast.success('Skelbimas istrintas')
        }
    }

    if (isLoading) {
        return <Spinner />
    }
    return (
        <>
            <h2 className='d-flex justify-content-center mt-3'>Mano skelbimai</h2>
            <div className='d-flex flex-wrap justify-content-center mt-3'>
            {
                ads !== undefined && ads.length > 0 ? (
                    ads.map((item, index) => (
                        <Card className='d-inline-flex m-2 h-50' key={index} style={{ width: '18rem' }}>
                            <Card.Img className='img-fluid img-thumbnail' variant="top" src={item.img} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                                <Card.Text> Kaina: {item.price}</Card.Text>
                                <Button variant="outline-danger" onClick={() => onClick(item._id)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    ))
                ) : <h3>Jus neturite pridetu skelbimu</h3>
            }
        </div>
        </>
    )
}

export default UserAds
