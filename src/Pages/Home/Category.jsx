import slide1 from '../../../src/assets/home/slide1.jpg'
import slide2 from  '../../../src/assets/home/slide2.jpg'
import slide3 from '../../../src/assets/home/slide3.jpg'
import slide4 from '../../../src/assets/home/slide4.jpg'
import slide5 from '../../../src/assets/home/slide5.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from '../../Components/SectionTitle/SectionTitle'


const Category = () => {
return (
    <section>
  <SectionTitle     heading={'order online'} 
    subHeading={'From 11 am to 10 pm'} >
                                           
  </SectionTitle>
                             
  
   
     <Swiper
                              slidesPerView={4}
                              spaceBetween={30}
                              centeredSlides={true}
                              pagination={{
                                clickable: true,
                              }}
                              modules={[Pagination]}
                              className="mySwiper mb-24"
                            >
                              <SwiperSlide>
                                   <img src={slide1} alt="" /> 
                                   <h1 className='text-4xl text-center uppercase -mt-16'>Salads</h1>                        
                              </SwiperSlide>
                              <SwiperSlide>
                              <img src={slide2} alt="" />
                              <h1 className='text-4xl text-center uppercase -mt-16'>Soups</h1>
                              </SwiperSlide>
                              <SwiperSlide>
                              <img src={slide3} alt="" />
                              <h1 className='text-4xl text-center uppercase -mt-16'>pizzas</h1>                        
                              </SwiperSlide>
                              <SwiperSlide>
                              <img src={slide4} alt="" />
                              <h1 className='text-4xl text-center uppercase -mt-16'>desserts</h1>                        
                              </SwiperSlide>
                              <SwiperSlide>
                              <img src={slide5} alt="" />
                              <h1 className='text-4xl text-center uppercase -mt-16'>pizzas</h1>                        
                              </SwiperSlide>

                            </Swiper>
    </section>
 );
};

export default Category;