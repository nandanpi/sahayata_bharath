import React from "react";
import ScrollToTopButton from "./scrollToTop";

const About = () => {
    return(
        <>
        <div className=" bg-beige dark:bg-grey text-teal dark:text-blue m-3 rounded-xl">
            <h1 className="p-5 font-bold  text-4xl text-center">ABOUT SAHAYATA BHARATH</h1>
            <p className="p-5 text-justify justify-evenly text-xl">In recent years a large number of government schemes and policies have been launched to benefit the poor and the underprivileged public. Indian Government, at all levels, announces Welfare Schemes for a cross section of the society from time to time. These schemes could be either Central, State specific or a joint collaboration between the Centre and the States. However, a lot of them are underperforming or have been stopped due to the lack of reciprocation from the public.<br /><br />
Our group identified the main issue for this which is lack of information and awareness among the general public. The target audience of these schemes simply aren't aware that these schemes exist, the proper utilization of these schemes can provide a major boost to our economy. <br /><br />

To tackle this issue, we introduce the website<br />
Sahayata Bharat: A website that readily provides all relevant information on major schemes run by the government. The website displays a large number of essential schemes listed by the government of India, which includes both national and regional schemes. The user can access this website via any search engine and look for any of the schemes as per their necessity.<br /><br />
Unlike other static websites our website was designed to work on any device regardless of the screen size to ensure a pleasant experience. The Responsive Website was designed using React, Tailwind CSS, Vanilla JavaScript and HTML. The website consists of 4 pages. A home page, an About page, a page listing the local schemes provided by the Government of Karnataka and another page listing the national schemes provided by the Government of India.<br /><br />
When the user clicks a particular scheme, they are redirected to the official website where they can proceed with the application for the scheme.
This website also has the option to filter the type of scheme required making it more accessible and quicker. For example, if the user wants to see the latest food or education schemes announced by the government of India then he/she can click on the filter for food or education options to narrow it down to get the schemes related to them. <br /><br />
Covering the visual aspect of the website, our team decided on this design that works both in light and dark modes. Keeping in mind the multi cultures of our country, we have given it a local touch by including regional languages. Currently, we have released Kannada and Hindi options along with the generic language that is English. As the website picks up its viewership our team has planned to grow it with other regional languages and the local schemes of the other states. <br /><br />
The idea behind the creation of this website is to simplify the process of applying for these benefits by bringing awareness among citizens to try and bridge the knowledge gap in this sector.<br /><br />
Dev:Nandan R Pai
        </p>
        </div>

        <div className=" text-teal dark:text-blue"><ScrollToTopButton /></div>
        </>
    )
}
export default About