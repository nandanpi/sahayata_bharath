import React,{useState} from "react";
import {BsThreeDots,BsThreeDotsVertical} from "react-icons/bs"; 
import ScrollToTopButton from "./scrollToTop";

const Nsche = () => {
    const [ph,setph] = useState(true)
    const handleph = () => {
        setph(!ph)
    }
  const [showDiv1, setShowDiv1] = useState(false);
  const [showDiv2, setShowDiv2] = useState(false);
  const [showDiv3, setShowDiv3] = useState(false);
  const [showDiv4, setShowDiv4] = useState(false);
  const [showDiv5, setShowDiv5] = useState(false);
  const [showDiv6, setShowDiv6] = useState(false);
  const [showDiv7, setShowDiv7] = useState(true);

  const handleShowDiv1 = () => {
    setShowDiv1(true);
    setShowDiv2(false);
    setShowDiv3(false);
    setShowDiv4(false);
    setShowDiv5(false);
    setShowDiv6(false);
    setShowDiv7(false);
  };

  const handleShowDiv2 = () => {
    setShowDiv1(false);
    setShowDiv2(true);
    setShowDiv3(false);
    setShowDiv4(false);
    setShowDiv5(false);
    setShowDiv6(false);
    setShowDiv7(false);
  };

  const handleShowDiv3 = () => {
    setShowDiv1(false);
    setShowDiv2(false);
    setShowDiv3(true);
    setShowDiv4(false);
    setShowDiv5(false);
    setShowDiv6(false);
    setShowDiv7(false);
  };

  const handleShowDiv4 = () => {
    setShowDiv1(false);
    setShowDiv2(false);
    setShowDiv3(false);
    setShowDiv4(true);
    setShowDiv5(false);
    setShowDiv6(false);
    setShowDiv7(false);
  };

  const handleShowDiv5 = () => {
    setShowDiv1(false);
    setShowDiv2(false);
    setShowDiv3(false);
    setShowDiv4(false);
    setShowDiv5(true);
    setShowDiv6(false);
    setShowDiv7(false);
  };

  const handleShowDiv6 = () => {
    setShowDiv1(false);
    setShowDiv2(false);
    setShowDiv3(false);
    setShowDiv4(false);
    setShowDiv5(false);
    setShowDiv6(true);
    setShowDiv7(false);  
  };
  const handleShowDiv7 = () => {
    setShowDiv1(false);
    setShowDiv2(false);
    setShowDiv3(false);
    setShowDiv4(false);
    setShowDiv5(false);
    setShowDiv6(false);
    setShowDiv7(true);  
  };

    return(
        <>
        <div className=" block md:hidden bg-beige dark:bg-grey m-3 rounded-xl">
            <ul className="flex text-teal dark:text-blue items-center justify-center">
                <li onClick={handleShowDiv1} className="p-5 cursor-pointer">Finance</li> 
                <li onClick={handleShowDiv2} className="p-5 cursor-pointer">Healthcare</li>
                <li onClick={handleph} className=" p-5 cursor-pointer">{!ph ? <BsThreeDotsVertical size={23}/>:<BsThreeDots size={23} />}</li>
            </ul>    
        </div>
        <div className={!ph ? 'mr-3 fixed right-0 top-40 w-[45%] bg-beige dark:bg-grey rounded-xl h-95 ease-in duration-700 shadow-2xl text-teal dark:text-blue absolute':' ease-out duration-1000 fixed top-40 left-[-100%]'}>
                    <ul>
                    <li onClick={handleShowDiv3} className="p-5 cursor-pointer">Employment </li>
                    <li onClick={handleShowDiv4} className="p-5 cursor-pointer">Agricultural</li> 
                    <li onClick={handleShowDiv5} className="p-5 cursor-pointer">Educational</li> 
                    <li onClick={handleShowDiv6} className="p-5 cursor-pointer">Others</li>
                    <li onClick={handleShowDiv7} className="p-5 cursor-pointer">All</li>
                    </ul>
                </div>
          <div className=" bg-beige dark:bg-grey text m-3 rounded-xl ">
                <ul className="hidden md:flex text-teal dark:text-blue space-x-4 items-center justify-center">
                    <li onClick={handleShowDiv1} className="p-5 cursor-pointer">Finance</li> 
                    <li onClick={handleShowDiv2} className="p-5 cursor-pointer">Healthcare</li>
                    <li onClick={handleShowDiv3} className="p-5 cursor-pointer">Employment</li>
                    <li onClick={handleShowDiv4} className="p-5 cursor-pointer">Agricultural</li> 
                    <li onClick={handleShowDiv5} className="p-5 cursor-pointer">Educational</li> 
                    <li onClick={handleShowDiv6} className="p-5 cursor-pointer">Others</li>
                    <li onClick={handleShowDiv7} className="p-5 cursor-pointer">All</li>
                </ul>
            </div>
        { showDiv7 && <div id="div7 " className="elements bg-beige dark:bg-grey text-teal dark:text-blue space-y-2 rounded-xl mx-3">
            <ul className=" p-5 list-disc list-inside text-justify">
            <li className="p-3"><a href="http://pmjdy.gov.in" target="_blank" rel="noopener noreferrer">Pradhan Mantri Jan Dhan Yojana (PMJDY): This scheme ensures access to various financial services weaker sections & low income groups.</a></li>
          <li className="p-3"><a href="http://www.nsiindia.gov.in/InternalPage.aspx?Id_Pk=89" target="_blank" rel="noopener noreferrer">Sukanya Samriddhi Yojana (SSY): The scheme is meant to meet the education and marriage expenses of a girl child.</a></li>
          <li className="p-3"><a href="http://vikaspedia.in/schemesall/schemes-for-unemployed-and-poor/atal-pension-yojana" target="_blank" rel="noopener noreferrer">Atal Pension Yojana: This is a pension scheme for citizens of India is focused on the unorganized sector workers. Under the APY, guaranteed minimum pension of Rs. 1,000/- or 2,000/- or 3,000/- or 4,000 or 5,000/- per month will be given at the age of 60 years depending on the contributions by the subscribers.
          </a></li>
          <li className="p-3"><a href="http://www.india.gov.in/interest-subsidy-scheme-housing-urban-poor" target="_blank" rel="noopener noreferrer">Interest Subsidy Scheme for Housing Urban Poor: The Scheme envisages the provision of interest subsidy to economically weak section and Low income groups to enable them to buy or construct houses.
          </a></li>
          <li className="p-3"><a href="http://angul.nic.in/service/indira-gandhi-national-old-age-pension-scheme-ignoaps/" target="_blank" rel="noopener noreferrer">Indira Gandhi National Old Age Pension Scheme (IGNOAPS): This scheme is a non-contributory old age pension scheme that covers Indians who are 60 years and above and live below the poverty line.</a></li>
          <li className="p-3"><a href="http://www.myscheme.gov.in/schemes/nsap-ignwps" target="_blank" rel="noopener noreferrer">Indira Gandhi National Widow Pension Scheme (IGNWPS):  Under IGNWPS, widows living Below Poverty Line, aged between 40 to 59 years, are eligible to apply. A monthly pension of ₹ 200 is provided to the beneficiary.</a></li>
          <li className="p-3"><a href="http://labour.gov.in/pmsym" target="_blank" rel="noopener noreferrer">Pradhan Mantri Shram Yogi Maan-dhan:scheme is a voluntary and contributory Pension Scheme for Unorganized Workers for entry age of 18 to 40 years with monthly income of Rs.15000 or less.</a></li>
          <li className="p-3"><a href="http://www.india.gov.in/spotlight/atal-beemit-vyakti-kalyan-yojana" target="_blank" rel="noopener noreferrer">Atal Beemit Vyakti Kalyan Yojana: The scheme provides relief to the extent of 50% of the average per day earning during the previous four contribution periods (total earning during the four contribution period/730) to be paid up to maximum 90 days of unemployment once in lifetime of the Insured Person.</a></li>
          <li className="p-3"><a href="http://labour.gov.in/sites/default/files/20220208154105_compressed.pdf" target="_blank" rel="noopener noreferrer">Rehabilitation of Bonded Labourer Fund Scheme: The Scheme provides for creation of a Bonded Labour Rehabilitation Fund at District level by each State with a permanent corpus of at least Rs. 10 lakh at the disposal of the District Magistrate for extending immediate help to the released bonded labourers.
          </a></li>
          <li className="p-3"><a href="http://financialservices.gov.in/insurance-divisions/Government-Sponsored-Socially-Oriented-Insurance-Schemes/Pradhan-Mantri-Jeevan-Jyoti-Bima-Yojana(PMJJBY)" target="_blank" rel="noopener noreferrer">Pradhan Mantri Jeevan Jyoti Bima Yojana: This scheme gives life insurance cover for death due to any reason.
          </a></li>
          <li className="p-3"><a href="http://nha.gov.in/PM-JAY" target="_blank" rel="noopener noreferrer">Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (ABPMJAY): This scheme aims to undertake path breaking interventions to holistically address the healthcare system (covering prevention, promotion and ambulatory care) at the primary, secondary and tertiary level.</a></li>
          <li className="p-3"><a href="http://www.india.gov.in/spotlight/rashtriya-swasthya-bima-yojana" target="_blank" rel="noopener noreferrer">Rashtriya Swasthya Bima Yojana: This scheme aims to provide health insurance coverage for Below Poverty Line (BPL) families. The objective of RSBY is to provide protection to BPL households from financial liabilities arising out of health shocks that involve hospitalization.
          </a></li>
          <li className="p-3"><a href="http://www.india.gov.in/spotlight/pradhan-mantri-bhartiya-janaushadhi-pariyojana" target="_blank" rel="noopener noreferrer">Pradhan Mantri Bhartiya Janaushadhi Pariyojana: This scheme aims to provide quality medicines at affordable prices to the masses through special kendras.
          </a></li>
          <li className="p-3"><a href="http://www.india.gov.in/spotlight/rashtriya-vayoshri-yojana" target="_blank" rel="noopener noreferrer">Rashtriya Vayoshri Yojana: This scheme provides Physical Aids and Assisted-living Devices for Senior citizens belonging to BPL category.
          </a></li>
          <li className="p-3"><a href="http://www.india.gov.in/spotlight/deen-dayal-antyodaya-yojana" target="_blank" rel="noopener noreferrer">Deen Dayal Antyodaya Yojana: This scheme uplifts the urban poor folks by enhancing sustainable livelihood opportunities through skill development.</a></li>
          <li className="p-3"><a href="http://vikaspedia.in/schemesall/schemes-for-unemployed-and-poor/pradhan-mantri-dakshta-aur-kushalta-sampann-hitgrahi-yojana" target="_blank" rel="noopener noreferrer">Pradhan Mantri Dakshta Aur Kushalta Sampann Hitgrahi Yojana: It is a National Action Plan for skilling of marginalized persons.</a></li>
          <li className="p-3"><a href="http://www.india.gov.in/spotlight/deen-dayal-upadhyaya-grameen-kaushalya-yojana" target="_blank" rel="noopener noreferrer">Deen Dayal Upadhyaya Grameen Kaushalya Yojana: This scheme aims to skill rural youth who are poor and provide them with jobs having regular monthly wages or above the minimum wages.</a></li>
          <li className="p-3"><a href="http://www.jansamarth.in/prime-minister-svanidhi-scheme" target="_blank" rel="noopener noreferrer">PM SVANIDHI (PM Street Vendor's AtmaNirbhar Nidhi) Scheme: This scheme aims to empower Street Vendors by not only extending loans to them, but also for their holistic development and economic upliftment.</a></li>
          <li className="p-3"><a href="http://mohua.gov.in/cms/TheStreetVendorsAct2014.php?url=TheStreetVendorsAct2014" target="_blank" rel="noopener noreferrer">Street Vendor Act 2014: This scheme regulates the vending of the street vendors making a regulatory body for such vending, avoiding congestion on the footpath so that the traffic can be maintained freely.</a></li>
          <li className="p-3"><a href="http://www.india.gov.in/swarnjayanti-gram-swarozgar-yojana" target="_blank" rel="noopener noreferrer">Swarnjayanti Gram Swarozgar Yojana: This scheme assists the poor families living below the poverty line in rural areas for taking up self employment.</a></li>
          <li className="p-3"><a href="http://www.india.gov.in/samarth-scheme-0" target="_blank" rel="noopener noreferrer">SAMARTH Scheme: This scheme aims to provide incentives and create jobs in the organized textile industry and related sectors, covering the entire value chain of textiles, except spinning and weaving.</a></li>
          <li className="p-3"><a href="http://www.india.gov.in/spotlight/nai-manzil-integrated-education-and-livelihood-initiative-minority-communities" target="_blank" rel="noopener noreferrer">Nai Manzil: The Scheme aims to benefit the minority youths who do not have a formal school leaving certificate, i.e those in the category of school- dropouts or educated in community education institutions like Madarsas, in order to provide them formal education and skills, and enable them to seek better employment and livelihoods in the organised sector.</a></li>
          <li className="p-3"><a href="http://labour.gov.in/policies/national-policy-skill-development" target="_blank" rel="noopener noreferrer">National Policy on Skill Development: This scheme is an umbrella framework devised by the Government of India to develop employable skills among the youth of the country through learning and producing workers adequately skilled to meet the requirements of industry.</a></li>
          <li className="p-3"><a href="http://nsap.nic.in/circular.do?method=aboutus#:~:text=The%20National%20Social%20Assistance%20Programme,as%20well%20as%20urban%20areas." target="_blank" rel="noopener noreferrer">National Social Assistance Programme (NSAP): Secure for the citizens adequate means of livelihood, raise the standard of living, improve public health, provide free and compulsory education for children.</a></li>
          <li className="p-3"><a href="http://vikaspedia.in/schemesall/schemes-for-unemployed/prime-minister-awaas-yojana-gramin" target="_blank" rel="noopener noreferrer">Prime Minister Awaas Yojana: This is a social welfare programme, created by the Indian Government, to provide housing for the rural poor in India.</a></li>
          <li className="p-3"><a href="http://www.india.gov.in/spotlight/pradhan-mantri-vidya-lakshmi-karyakram-towards-bright-future" target="_blank" rel="noopener noreferrer">Pradhan Mantri Vidya Lakshmi Karyakram:This scheme  administers and monitors Scholarship as well Educational Loan Schemes, with a view to enable all poor and middle class students to pursue higher education of their choice without any constraint of funds.</a></li>
          <li className="p-3"><a href="http://www.india.gov.in/spotlight/pradhan-mantri-sahaj-bijli-har-ghar-yojana-saubhagya" target="_blank" rel="noopener noreferrer">Pradhan Mantri Sahaj Bijli Har Ghar Yojana: This scheme aims to provide energy access to all by last mile connectivity and electricity connections to all remaining un-electrified households in rural as well as urban areas to achieve universal household electrification in the country.</a></li>
          <li className="p-3"><a href="http://www.mohua.gov.in/upload/uploadfiles/files/National%20Transit%20Oriented%20Development%20(TOD)%20Policy.pdf" target="_blank" rel="noopener noreferrer">National Transit Oriented Development (TOD) Policy: The policy aims to promote living close to mass urban transit corridors like the metros, monorail and bus rapid transit (BRT) corridors.</a></li>
          <li className="p-3"><a href="http://mohua.gov.in/cms/RajivRinnYojana.php?url=RajivRinnYojana" target="_blank" rel="noopener noreferrer">Rajiv Rinn Yojana:The scheme  envisages a "Slum Free India" with inclusive and equitable cities in which every citizen has access to basic civic infrastructure and social amenities and decent shelter.
          </a></li>
          <li className="p-3"><a href="http://www.mohua.gov.in/upload/uploadfiles/files/NUSP_0.pdf" target="_blank" rel="noopener noreferrer">National Urban Sanitation Policy: This scheme seeks to mobilise governments and civil society to transform urban India into community-driven Nirmal Shahars, or totally sanitised, healthy, and liveable cities and towns.</a></li>
          <li className="p-3"><a href="http://www.myscheme.gov.in/schemes/pm-kusum" target="_blank" rel="noopener noreferrer">PM-KUSUM (Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan) Scheme: This scheme aims at furthering the production of solar power in India and also gives the benefits of solar farming to farmers.
          </a></li>
          <li className="p-3"><a href="http://www.pmuy.gov.in/index.aspx" target="_blank" rel="noopener noreferrer">⦁	Pradhan Mantri Ujjwala Yojana (PMUY): This is a flagship scheme with an objective to make clean cooking fuel such as LPG available to the rural and deprived households which were otherwise using traditional cooking fuels.</a></li>
          <li className="p-3"><a href="http://www.india.gov.in/topics/housing/ews-housing" target="_blank" rel="noopener noreferrer">EWS Housing: According to this scheme flats are provided to those sections of the population who are underprivileged and who have traditionally been forced to remain at the lower rungs of the society.</a></li>
          <li className="p-3"><a href="http://dfpd.nic.in/1sGbO2W68mUlunCgKmpnLF5WHm/pdf/Village-Grain-Banks-Scheme.pdf" target="_blank" rel="noopener noreferrer">Village Grain Bank Scheme: The scheme aims to help marginalised food insecure households who do not have sufficient resources to purchase rations during lean season or natural calamities</a></li>
          <li className="p-3"><a href="http://dfpd.gov.in/pds-aay.htm" target="_blank" rel="noopener noreferrer">Antyodaya Anna Yojana (AAY): This scheme provides food grains to bpl families at a highly subsidized rate of Rs.2/- per kg. for wheat and Rs.3/- per kg for rice.</a></li>
            </ul>
        </div>}
        {showDiv1 && <div id="div1" className="elements bg-beige dark:bg-grey text-teal dark:text-blue space-y-2 rounded-xl mx-3">
                <ul className=" p-5 list-disc list-inside text-justify">
                <li className="p-3"><a href="http://pmjdy.gov.in" target="_blank" rel="noopener noreferrer">Pradhan Mantri Jan Dhan Yojana (PMJDY): This scheme ensures access to various financial services weaker sections & low income groups.</a></li>
          <li className="p-3"><a href="http://www.nsiindia.gov.in/InternalPage.aspx?Id_Pk=89" target="_blank" rel="noopener noreferrer">Sukanya Samriddhi Yojana (SSY): The scheme is meant to meet the education and marriage expenses of a girl child.</a></li>
          <li className="p-3"><a href="http://vikaspedia.in/schemesall/schemes-for-unemployed-and-poor/atal-pension-yojana" target="_blank" rel="noopener noreferrer">Atal Pension Yojana: This is a pension scheme for citizens of India is focused on the unorganized sector workers. Under the APY, guaranteed minimum pension of Rs. 1,000/- or 2,000/- or 3,000/- or 4,000 or 5,000/- per month will be given at the age of 60 years depending on the contributions by the subscribers.
          </a></li>
          <li className="p-3"><a href="http://www.india.gov.in/interest-subsidy-scheme-housing-urban-poor" target="_blank" rel="noopener noreferrer">Interest Subsidy Scheme for Housing Urban Poor: The Scheme envisages the provision of interest subsidy to economically weak section and Low income groups to enable them to buy or construct houses.
          </a></li>
          <li className="p-3"><a href="http://angul.nic.in/service/indira-gandhi-national-old-age-pension-scheme-ignoaps/" target="_blank" rel="noopener noreferrer">Indira Gandhi National Old Age Pension Scheme (IGNOAPS): This scheme is a non-contributory old age pension scheme that covers Indians who are 60 years and above and live below the poverty line.</a></li>
          <li className="p-3"><a href="http://www.myscheme.gov.in/schemes/nsap-ignwps" target="_blank" rel="noopener noreferrer">Indira Gandhi National Widow Pension Scheme (IGNWPS):  Under IGNWPS, widows living Below Poverty Line, aged between 40 to 59 years, are eligible to apply. A monthly pension of ₹ 200 is provided to the beneficiary.</a></li>
          <li className="p-3"><a href="http://labour.gov.in/pmsym" target="_blank" rel="noopener noreferrer">Pradhan Mantri Shram Yogi Maan-dhan:scheme is a voluntary and contributory Pension Scheme for Unorganized Workers for entry age of 18 to 40 years with monthly income of Rs.15000 or less.</a></li>
          <li className="p-3"><a href="http://www.india.gov.in/spotlight/atal-beemit-vyakti-kalyan-yojana" target="_blank" rel="noopener noreferrer">Atal Beemit Vyakti Kalyan Yojana: The scheme provides relief to the extent of 50% of the average per day earning during the previous four contribution periods (total earning during the four contribution period/730) to be paid up to maximum 90 days of unemployment once in lifetime of the Insured Person.</a></li>
          <li className="p-3"><a href="http://labour.gov.in/sites/default/files/20220208154105_compressed.pdf" target="_blank" rel="noopener noreferrer">Rehabilitation of Bonded Labourer Fund Scheme: The Scheme provides for creation of a Bonded Labour Rehabilitation Fund at District level by each State with a permanent corpus of at least Rs. 10 lakh at the disposal of the District Magistrate for extending immediate help to the released bonded labourers.
          </a></li>
                </ul>
            </div>}
            {showDiv2 && <div id="div2" className="elements bg-beige dark:bg-grey text-teal dark:text-blue space-y-2 rounded-xl mx-3">
                <ul className=" p-5 list-disc list-inside text-justify">
                <li className="p-3"><a href="http://financialservices.gov.in/insurance-divisions/Government-Sponsored-Socially-Oriented-Insurance-Schemes/Pradhan-Mantri-Jeevan-Jyoti-Bima-Yojana(PMJJBY)" target="_blank" rel="noopener noreferrer">Pradhan Mantri Jeevan Jyoti Bima Yojana: This scheme gives life insurance cover for death due to any reason.
          </a></li>
          <li className="p-3"><a href="http://nha.gov.in/PM-JAY" target="_blank" rel="noopener noreferrer">Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (ABPMJAY): This scheme aims to undertake path breaking interventions to holistically address the healthcare system (covering prevention, promotion and ambulatory care) at the primary, secondary and tertiary level.</a></li>
          <li className="p-3"><a href="http://www.india.gov.in/spotlight/rashtriya-swasthya-bima-yojana" target="_blank" rel="noopener noreferrer">Rashtriya Swasthya Bima Yojana: This scheme aims to provide health insurance coverage for Below Poverty Line (BPL) families. The objective of RSBY is to provide protection to BPL households from financial liabilities arising out of health shocks that involve hospitalization.
          </a></li>
          <li className="p-3"><a href="http://www.india.gov.in/spotlight/pradhan-mantri-bhartiya-janaushadhi-pariyojana" target="_blank" rel="noopener noreferrer">Pradhan Mantri Bhartiya Janaushadhi Pariyojana: This scheme aims to provide quality medicines at affordable prices to the masses through special kendras.
          </a></li>
          <li className="p-3"><a href="http://www.india.gov.in/spotlight/rashtriya-vayoshri-yojana" target="_blank" rel="noopener noreferrer">Rashtriya Vayoshri Yojana: This scheme provides Physical Aids and Assisted-living Devices for Senior citizens belonging to BPL category.
          </a></li>
                </ul>
            </div>}
            { showDiv3 && <div id="div3" className="elements bg-beige dark:bg-grey text-teal dark:text-blue space-y-2 rounded-xl mx-3"><ul className=" p-5 list-disc list-inside text-justify">
            <li className="p-3"><a href="http://www.india.gov.in/spotlight/deen-dayal-antyodaya-yojana" target="_blank" rel="noopener noreferrer">Deen Dayal Antyodaya Yojana: This scheme uplifts the urban poor folks by enhancing sustainable livelihood opportunities through skill development.</a></li>
          <li className="p-3"><a href="http://vikaspedia.in/schemesall/schemes-for-unemployed-and-poor/pradhan-mantri-dakshta-aur-kushalta-sampann-hitgrahi-yojana" target="_blank" rel="noopener noreferrer">Pradhan Mantri Dakshta Aur Kushalta Sampann Hitgrahi Yojana: It is a National Action Plan for skilling of marginalized persons.</a></li>
          <li className="p-3"><a href="http://www.india.gov.in/spotlight/deen-dayal-upadhyaya-grameen-kaushalya-yojana" target="_blank" rel="noopener noreferrer">Deen Dayal Upadhyaya Grameen Kaushalya Yojana: This scheme aims to skill rural youth who are poor and provide them with jobs having regular monthly wages or above the minimum wages.</a></li>
          <li className="p-3"><a href="http://www.jansamarth.in/prime-minister-svanidhi-scheme" target="_blank" rel="noopener noreferrer">PM SVANIDHI (PM Street Vendor's AtmaNirbhar Nidhi) Scheme: This scheme aims to empower Street Vendors by not only extending loans to them, but also for their holistic development and economic upliftment.</a></li>
          <li className="p-3"><a href="http://mohua.gov.in/cms/TheStreetVendorsAct2014.php?url=TheStreetVendorsAct2014" target="_blank" rel="noopener noreferrer">Street Vendor Act 2014: This scheme regulates the vending of the street vendors making a regulatory body for such vending, avoiding congestion on the footpath so that the traffic can be maintained freely.</a></li>
          <li className="p-3"><a href="http://www.india.gov.in/swarnjayanti-gram-swarozgar-yojana" target="_blank" rel="noopener noreferrer">Swarnjayanti Gram Swarozgar Yojana: This scheme assists the poor families living below the poverty line in rural areas for taking up self employment.</a></li>
          <li className="p-3"><a href="http://www.india.gov.in/samarth-scheme-0" target="_blank" rel="noopener noreferrer">SAMARTH Scheme: This scheme aims to provide incentives and create jobs in the organized textile industry and related sectors, covering the entire value chain of textiles, except spinning and weaving.</a></li>
          <li className="p-3"><a href="http://www.india.gov.in/spotlight/nai-manzil-integrated-education-and-livelihood-initiative-minority-communities" target="_blank" rel="noopener noreferrer">Nai Manzil: The Scheme aims to benefit the minority youths who do not have a formal school leaving certificate, i.e those in the category of school- dropouts or educated in community education institutions like Madarsas, in order to provide them formal education and skills, and enable them to seek better employment and livelihoods in the organised sector.</a></li>
          <li className="p-3"><a href="http://labour.gov.in/policies/national-policy-skill-development" target="_blank" rel="noopener noreferrer">National Policy on Skill Development: This scheme is an umbrella framework devised by the Government of India to develop employable skills among the youth of the country through learning and producing workers adequately skilled to meet the requirements of industry.</a></li></ul>
            </div>}
            { showDiv4 && <div id="div4" className="elements bg-beige dark:bg-grey text-teal dark:text-blue space-y-2 rounded-xl mx-3">
                <ul className=" p-5 list-disc list-inside text-justify">
                <li className="p-3"><a href="http://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">PM Kissan Samman Nidhi scheme:Under this scheme, eligible farmers receive financial assistance of Rs. 6,000 per year, payable in three installments of Rs. 2,000 each, directly into their bank accounts.</a></li>
          <li className="p-3"><a href="http://www.myscheme.gov.in/schemes/pm-kusum" target="_blank" rel="noopener noreferrer">PM-KUSUM (Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan) Scheme: This scheme aims at furthering the production of solar power in India and also gives the benefits of solar farming to farmers.
          </a></li>
          <li className="p-3"><a href="http://www.india.gov.in/spotlight/pradhan-mantri-annadata-aay-sanrakshan-abhiyan-pm-aasha" target="_blank" rel="noopener noreferrer">PM Annadata Aay Sanrakshan Abhiyan:PM Annadata Aay Sanrakshan Abhiyan (PM-AASHA) is a scheme launched by the Government of India in September 2018, aimed at protecting the income of farmers by ensuring that they receive a minimum support price (MSP) for their crops.</a></li>
          <li className="p-3"><a href="http://pmfby.gov.in" target="_blank" rel="noopener noreferrer">PM Fasal Bima Yojana:PM Fasal Bima Yojana (PMFBY) is a crop insurance scheme launched by the Government of India in January 2016, aimed at providing insurance coverage to farmers against crop loss due to natural calamities, pests, and diseases.</a></li>
          <li className="p-3"><a href="http://pmksy.gov.in" target="_blank" rel="noopener noreferrer">PM Krisi Sinchai Yojana:PM Krishi Sinchai Yojana (PMKSY) is a scheme launched by the Government of India in July 2015, aimed at improving the efficiency of water usage in agriculture and increasing the area under irrigation.</a></li>
          <li className="p-3"><a href="http://rkvy.nic.in" target="_blank" rel="noopener noreferrer">Rashtiriya Krisi Vikas Yojana:The main objective of the scheme is to incentivize states to increase public investment in agriculture and allied sectors and to encourage the adoption of innovative agricultural practices.</a></li>
                </ul>
            </div>}
            { showDiv5 && <div id="div5" className="elements bg-beige dark:bg-grey text-teal dark:text-blue space-y-2 rounded-xl mx-3">
                <ul className=" p-5 list-disc list-inside text-justify">
                <li className="p-3"><a href="http://pib.gov.in/PressReleaseIframePage.aspx?PRID=1781750" target="_blank" rel="noopener noreferrer">World Class Institution Scheme: The aim of the scheme is to promote excellence in higher education and position Indian educational institutions among the top-ranked institutions in the world.</a></li>
          <li className="p-3"><a href="http://rusa.nic.in/" target="_blank" rel="noopener noreferrer">Rashtriya Uchchatar Siksha Abhiyan:The aim of the scheme is to provide strategic funding to eligible higher education institutions to improve their overall quality and increase their enrolment of students from economically and socially disadvantaged backgrounds.</a></li>
          <li className="p-3"><a href="http://apkgbv.apcfss.in" target="_blank" rel="noopener noreferrer">Kasturba Gandhi Balika Vidyalaya:The scheme aims to provide quality education to girls from disadvantaged communities and to promote their retention and completion of elementary education.</a></li>
          <li className="p-3"><a href="http://tribal.nic.in/EMRS.aspx" target="_blank" rel="noopener noreferrer">Ekalavya Model Residential School:The scheme aims to provide quality education to Scheduled Tribe (ST) students in remote areas of the country and to promote their educational empowerment.</a></li>
                </ul>
            </div>}
            { showDiv6 &&<div id="div6" className="elements bg-beige dark:bg-grey text-teal dark:text-blue space-y-2 rounded-xl mx-3">
                <ul className="p-5 list-disc list-inside text-justify">
                <li className="p-3"><a href="http://nsap.nic.in/circular.do?method=aboutus#:~:text=The%20National%20Social%20Assistance%20Programme,as%20well%20as%20urban%20areas." target="_blank" rel="noopener noreferrer">National Social Assistance Programme (NSAP): Secure for the citizens adequate means of livelihood, raise the standard of living, improve public health, provide free and compulsory education for children.</a></li>
          <li className="p-3"><a href="http://vikaspedia.in/schemesall/schemes-for-unemployed/prime-minister-awaas-yojana-gramin" target="_blank" rel="noopener noreferrer">Prime Minister Awaas Yojana: This is a social welfare programme, created by the Indian Government, to provide housing for the rural poor in India.</a></li>
          <li className="p-3"><a href="http://www.india.gov.in/spotlight/pradhan-mantri-vidya-lakshmi-karyakram-towards-bright-future" target="_blank" rel="noopener noreferrer">Pradhan Mantri Vidya Lakshmi Karyakram:This scheme  administers and monitors Scholarship as well Educational Loan Schemes, with a view to enable all poor and middle class students to pursue higher education of their choice without any constraint of funds.</a></li>
          <li className="p-3"><a href="http://www.india.gov.in/spotlight/pradhan-mantri-sahaj-bijli-har-ghar-yojana-saubhagya" target="_blank" rel="noopener noreferrer">Pradhan Mantri Sahaj Bijli Har Ghar Yojana: This scheme aims to provide energy access to all by last mile connectivity and electricity connections to all remaining un-electrified households in rural as well as urban areas to achieve universal household electrification in the country.</a></li>
          <li className="p-3"><a href="http://www.mohua.gov.in/upload/uploadfiles/files/National%20Transit%20Oriented%20Development%20(TOD)%20Policy.pdf" target="_blank" rel="noopener noreferrer">National Transit Oriented Development (TOD) Policy: The policy aims to promote living close to mass urban transit corridors like the metros, monorail and bus rapid transit (BRT) corridors.</a></li>
          <li className="p-3"><a href="http://mohua.gov.in/cms/RajivRinnYojana.php?url=RajivRinnYojana" target="_blank" rel="noopener noreferrer">Rajiv Rinn Yojana:The scheme  envisages a "Slum Free India" with inclusive and equitable cities in which every citizen has access to basic civic infrastructure and social amenities and decent shelter.
          </a></li>
          <li className="p-3"><a href="http://www.mohua.gov.in/upload/uploadfiles/files/NUSP_0.pdf" target="_blank" rel="noopener noreferrer">National Urban Sanitation Policy: This scheme seeks to mobilise governments and civil society to transform urban India into community-driven Nirmal Shahars, or totally sanitised, healthy, and liveable cities and towns.</a></li>
          <li className="p-3"><a href="http://www.pmuy.gov.in/index.aspx" target="_blank" rel="noopener noreferrer">⦁	Pradhan Mantri Ujjwala Yojana (PMUY): This is a flagship scheme with an objective to make clean cooking fuel such as LPG available to the rural and deprived households which were otherwise using traditional cooking fuels.</a></li>
          <li className="p-3"><a href="http://www.india.gov.in/topics/housing/ews-housing" target="_blank" rel="noopener noreferrer">EWS Housing: According to this scheme flats are provided to those sections of the population who are underprivileged and who have traditionally been forced to remain at the lower rungs of the society.</a></li>
          <li className="p-3"><a href="http://dfpd.nic.in/1sGbO2W68mUlunCgKmpnLF5WHm/pdf/Village-Grain-Banks-Scheme.pdf" target="_blank" rel="noopener noreferrer">Village Grain Bank Scheme: The scheme aims to help marginalised food insecure households who do not have sufficient resources to purchase rations during lean season or natural calamities</a></li>
          <li className="p-3"><a href="http://dfpd.gov.in/pds-aay.htm" target="_blank" rel="noopener noreferrer">Antyodaya Anna Yojana (AAY): This scheme provides food grains to bpl families at a highly subsidized rate of Rs.2/- per kg. for wheat and Rs.3/- per kg for rice.</a></li>
                </ul>
            </div>}
            <div className=" text-teal dark:text-blue"><ScrollToTopButton /></div>
        </>
    )

}
export default Nsche