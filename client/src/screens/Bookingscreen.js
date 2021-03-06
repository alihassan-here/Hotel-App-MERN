import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import Error from '../components/Error';



const Bookingscreen = ({ match }) => {
    const [room, setRoom] = useState();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();



    useEffect(() => {
        const postData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.post('/api/rooms/getroombyid', { roomid: match.params.roomid });
                setRoom(data);
                setLoading(false);
            } catch (error) {
                setError(true)
                console.log(error);
                setLoading(false);
            }
        }
        postData();
    }, [])
    return (
        <div className='m-5'>
            {
                loading ? (<h1><Loader /></h1>) : room ? (
                    <div>
                        <div className='row justify-content-center mt-5 bs'>
                            <div className='col-md-6'>
                                <h1>{room.name}</h1>
                                <img src={room.imageurls[0]} alt={room.name} className='bigimg' />
                            </div>
                            <div className='col-md-6'>
                                <div style={{ textAlign: 'right' }}>
                                    <h1>Booking Details</h1>
                                    <hr />
                                    <b>
                                        <p>Name:  </p>
                                        <p>From Date:  </p>
                                        <p>To Date:  </p>
                                        <p>Max Count: {room.maxcount}</p>
                                    </b>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <b>
                                        <h1>Amount</h1>
                                        <hr />
                                        <p>Total Days: </p>
                                        <p>Rent per day: {room.rentperday}</p>
                                        <p>Total Amount: </p>
                                    </b>
                                </div>
                                <div style={{ float: 'right' }}>
                                    <button className='btn btn primary'>Pay Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : <Error />
            }
        </div>
    );

};

export default Bookingscreen;
