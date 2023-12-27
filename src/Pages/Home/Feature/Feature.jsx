import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featureImg from '../../../assets/home/featured.jpg'
import './feature.css'
const Feature = () => {
return (
<section className='feature-item pt-8 my-2 bg-fixed  text-white'>
 <SectionTitle
  heading={'---Check it out---'}
  subHeading={'FROM OUR MENU'}
 ></SectionTitle>
<div className='flex justify-center pb-20 pt-12 px-36 gap-5 bg-slate-500 bg-opacity-60'>
     <div>
       <img src={featureImg} alt="" />
    </div>
    <div className='md:ml-10'>
     <h1 className='uppercase font-semibold'>March 20, 2023</h1>
     <h1>WHERE CAN I GET SOME?</h1>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur impedit libero repudiandae harum quidem a repellat quaerat maxime optio laudantium voluptatum illum commodi perferendis, esse saepe sint rem cum corporis architecto. Illum sed nihil dignissimos delectus magnam numquam debitis cupiditate reprehenderit molestias? Earum iste aliquam fugiat dolorem aperiam, ratione ex.</p>
     <button className="btn text-white btn-outline border-0 border-b-2 mt-3">order</button>  
    </div>                                                                                  
  </div>
</section>
 );
};

export default Feature;