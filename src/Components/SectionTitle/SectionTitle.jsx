

const SectionTitle = ({subHeading ,heading}) => {
return (
   <div className="text-center mx-auto md:w-3/12 my-8">
        <p className="text-yellow-600 mb-2"> -- {subHeading} --</p>                                                                                  
        <p className="text-3xl uppercase border-y-4 py-4 ">{heading}</p>                                                                                  
   </div>
 );
};

export default SectionTitle;