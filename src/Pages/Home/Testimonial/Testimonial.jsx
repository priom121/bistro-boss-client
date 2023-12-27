import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
const Testimonial = () => {
 const [review,setReview] =useState([])
 useEffect(()=>{
 fetch('https://bistro-boss-server-mocha-beta.vercel.app/reviews')
 .then(res=>res.json())
 .then(data=>setReview(data))
 },[])
return (
 <div>
    <SectionTitle 
    subHeading={'---What Our Clients Say---'}
    heading={'TESTIMONIALS'}
    >
 </SectionTitle> 
     <div>
     <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      
        {
          review.map(reviews=> <SwiperSlide
          key={reviews._id} reviews={reviews}
          >
            <div className="mx-16 my-16 flex flex-col items-center">
            <Rating
      style={{ maxWidth: 180 }}
      value={reviews.rating}
      readOnly
    />
              <p>{reviews.details}</p>
              <p className="text-2xl text-orange-300">{reviews.name}</p>
              <p className=" text-2xl text-orange-500">{reviews.rating}</p>
            </div>
          </SwiperSlide> )
        }
      </Swiper>
 </div>                                                                                 
 </div>
 );
};

export default Testimonial;