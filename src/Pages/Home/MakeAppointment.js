import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='flex justify-center items-center' style={{
            background: `url(${appointment})`
        }}>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt=""/>
            </div>
            <div className='flex-1 p-5'>
                <h3 className='text-xl text-primary font-bold mb-3'>Appointment</h3>
                <h2 className='text-3xl mb-3 text-white'>Make An Appointment Today</h2>
                <p className='text-white mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam obcaecati voluptatum suscipit distinctio harum corporis fugit quo magni odio. Quae quasi labore quam corporis autem soluta totam ea accusamus placeat dolores nemo quidem vitae commodi et exercitationem suscipit, dolor aliquam.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;