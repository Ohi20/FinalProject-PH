import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';
import treatment from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Flouride Treatment',
            description: 'lorem20',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'lorem20',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'lorem20',
            img: whitening
        }

    ];
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Our services</h3>
                <h3 className=' text-4xl'>Services you provide</h3>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service key={service._id}
                     service={service}></Service>)
                }
            </div>
            <div>
            <div class="hero min-h-screen px-12 mt-10">
  <div class="hero-content flex-col lg:flex-row">
    <div className='mr-6'>
    <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" />
    </div>
    <div className='ml-6'>
      <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     <PrimaryButton>Get Started</PrimaryButton>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Services;