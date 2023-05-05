import React from "react";
import Image from "../govschefy.jpg";
import ScrollToTopButton from "./scrollToTop";
const Home = () => {
    return(
        <>
            <div className="m-3">
                <img src={Image} alt="#" className=" rounded-xl"/>
                
            </div>
            <div className=" m-3 bg-beige dark:bg-grey text-teal dark:text-blue rounded-xl">
                <h1 className=" text-center justify-center text-4xl font-bold p-5">Welcome to SAHAYATA BHARATH!</h1>
                <p className=" p-5 justify-center text-xl"> 
                Here, you will find a comprehensive guide to various government schemes and initiatives that are aimed at providing support to individuals, families, businesses, and communities across the country. <br /><br />

                From healthcare to education, employment to entrepreneurship, and poverty alleviation to environmental conservation, the government has launched several programs to address the diverse needs of the society. These schemes have been designed to promote social welfare, economic development, and environmental sustainability.<br /><br />

                On this webpage, we aim to provide you with a detailed understanding of these schemes, including their objectives, eligibility criteria, application process, benefits, and impact. We have also included relevant statistics, success stories, and feedback from beneficiaries to give you a holistic view of each scheme.<br /><br />

                Whether you are a student, a job seeker, an entrepreneur, a farmer, a senior citizen, or a person with disabilities, there is a government scheme that can provide you with the necessary support to achieve your goals. Our webpage aims to help you navigate through these schemes and make informed decisions about the ones that are most relevant to your needs.
                <br /><br />
                We hope that this webpage serves as a valuable resource for you to learn about the various government schemes and initiatives that can help you improve your quality of life and contribute to the development of our country.
                </p>
            </div>
            <div className=" text-teal dark:text-blue"><ScrollToTopButton /></div>
        </>
    )
}
export default Home