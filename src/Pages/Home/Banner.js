import React from 'react';
import chair from "../../assets/images/chair.png"

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen pl-6">
  <div class="hero-content flex-col pl-6 lg:flex-row-reverse">
    <img src={chair} class=" max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl pr-6 font-bold">Box Office News!</h1>
      <p class="py-6 pr-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary pr-6">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;