import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';

const AvailableAppointments = ({date}) => {
    const [services, setServices] = useState([]);

    useEffect( ()=> {
        fetch('Services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])

    return (
        <div>
            <h4 className='text-xl text-center text-secondary'>Available Appointments on: {format(date, 'PP')} </h4>
            <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-10'>
               {
                  services.map(service => <Service 
                    key={service._id}
                    service = {service}>
                </Service>) 
               } 
            </div>
        </div>
    );
};

export default AvailableAppointments;