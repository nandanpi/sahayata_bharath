import React,{useState} from "react";

const Lsche = () => {

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
          <div className=" bg-beige dark:bg-grey text m-3 rounded-xl ">
                <ul className="flex text-teal dark:text-blue space-x-4 items-center justify-center">
                    <li onClick={handleShowDiv1} className="p-5 cursor-pointer">Food Schemes</li> 
                    <li onClick={handleShowDiv2} className="p-5 cursor-pointer">Service Schemes</li>
                    <li onClick={handleShowDiv3} className="p-5 cursor-pointer">Healthcare Schemes</li>
                    <li onClick={handleShowDiv4} className="p-5 cursor-pointer">Farming Schemes</li> 
                    <li onClick={handleShowDiv5} className="p-5 cursor-pointer">Finance Schemes</li> 
                    <li onClick={handleShowDiv6} className="p-5 cursor-pointer">Others</li>
                    <li onClick={handleShowDiv7} className="p-5 cursor-pointer">All</li>
                </ul>
            </div>
        { showDiv7 && <div id="div7 " className="elements bg-beige dark:bg-grey text-teal dark:text-blue space-y-2 rounded-xl mx-3">
            <ul className=" p-5 list-disc list-inside text-justify">
                <li className="p-3"><a href="http://landrecords.karnataka.gov.in/service53/" target="_blank" rel="noopener noreferrer">Bhoomi RTC: This scheme provides an online platform for citizens to access land records and other related information.</a></li>
                <li className="p-3"><a href="https://www.kmfnandini.coop/en/ksheera-bhagya" target="_blank" rel="noopener noreferrer">Ksheera Bhagya Yojana: This scheme provides free milk to school children in the state.</a> 
                </li>
                <li className="p-3"><a href="https://en.wikipedia.org/wiki/Indira_Canteens" target="_blank" rel="noopener noreferrer">Indira Canteen Scheme: This scheme provides affordable meals to urban poor people in Bangalore and other cities in the state.</a> 
                </li>
                <li className="p-3"><a href="https://pmjandhanyojana.co.in/apply-anila-bhagya-scheme-karnataka-bpl-free-lpg-gas-connection/" target="_blank" rel="noopener noreferrer">Anila Bhagya Scheme: This scheme provides free LPG gases to the BPL families of the state.</a> 
                </li>
                <li className="p-3"><a href="https://sakala.kar.nic.in/Service%20Compendium/01-12-2022%20sakala_compendium_English%20(Final%20file).pdf" target="_blank" rel="noopener noreferrer">Sakala Scheme: This scheme ensures timely delivery of services to citizens by fixing a time limit for delivery of services and providing a penalty for the delays.</a></li>
                <li className="p-3"><a href="https://e-swathu.kar.nic.in/(S(es1wazlbn5c5xrhxu05o3mfr))/Login.aspx" target="_blank" rel="noopener noreferrer">E-Swathu Scheme: This scheme provides an online platform for citizens to access various government services.</a></li>
                <li className="p-3"><a href="https://nhm.gov.in/index1.php?lang=1&level=3&sublinkid=842&lid=308" target="_blank" rel="noopener noreferrer">Janani Shishu Suraksha Karyakram (JSSK): This scheme provides free and cashless delivery, newborn care, and emergency obstetric care to pregnant women and newborns.</a></li>
                <li className="p-3"><a href="https://janasevaka.karnataka.gov.in/about_Janasevaka.html#:~:text=About%20Jana%20Sevaka&text=Janasevakas%20are%20available%20from%208AM,citizens%20in%20availing%20this%20service." target="_blank" rel="noopener noreferrer">Janasevaka Scheme: This scheme provides doorstep delivery of government services to citizens.</a></li>
                <li className="p-3"><a href="https://kaverionline.karnataka.gov.in" target="_blank" rel="noopener noreferrer">Kaveri Online Services: This scheme provides an online platform for citizens to access various government services related to water resources, including water allocation and usage.</a>
                </li>
                <li className="p-3"><a href="https://www.indiafilings.com/learn/arogya-bhagya-scheme/#:~:text=Arogya%20Bhagya%20Scheme%20is%20introduced,the%20private%20and%20Government%20hospitals." target="_blank" rel="noopener noreferrer">Arogya Bhagya Yojana: This scheme provides free medical treatment for people below the poverty line in the state.</a>
                </li>
                <li className="p-3"><a href="http://arogya.karnataka.gov.in/sast/" target="_blank" rel="noopener noreferrer">Suvarna Arogya Suraksha Trust: This scheme provides health insurance to economically weaker families in the state.</a> 
                </li>
                <li className="p-3"><a href="https://www.pradhanmantriyojana.co.in/cm-santwana-harish-yojana/" target="_blank" rel="noopener noreferrer">Mukhyamantri Santwana Harish Scheme: This scheme provides financial assistance to road accident victims for their medical treatment and hospitalization expenses.</a></li>
                <li className="p-3"><a href="https://pmjandhanyojana.co.in/suvarna-krishi-grama-yojana/" target="_blank" rel="noopener noreferrer">Suvarna Krishi Grama Yojane: This scheme promotes integrated farming and rural development, by providing financial assistance for horticulture, sericulture, poultry, and fishery.</a>
                </li>
                <li className="p-3"><a href="http://www.indiafilings.com/learn/krishi-bhagya-scheme/" target="_blank" rel="noopener noreferrer">Krishi Bhagya Scheme: This scheme provides financial assistance for micro-irrigation to farmers to promote efficient water usage.</a></li>
                <li className="p-3"><a href="http://rkvy.nic.in/static/download/RKVY_Sucess_Story/Karnataka/BHOOCHETANA.pdf" target="_blank" rel="noopener noreferrer">Bhoochetana Scheme: This scheme provides soil health cards and agricultural advisory services to farmers, with the aim of promoting sustainable agriculture practices and improving soil fertility.</a>
                </li>
                <li className="p-3"><a href="http://www.myscheme.gov.in/schemes/bys" target="_blank" rel="noopener noreferrer">Bhagya Laxmi Yojana: This scheme provides financial assistance to girls from economically weaker families for their education and marriage.</a></li>
                <li className="p-3"><a href="http://sw.kar.nic.in/swincentive/SIM/SmHome.aspx" target="_blank" rel="noopener noreferrer">Kalyana Karnataka Yojana: This scheme provides financial assistance for the marriage of economically weaker families in the state.</a>
                </li>
                <li className="p-3"><a href="http://karnatakastateopenuniversity.in/karnataka-nekar-samman-yojana.html" target="_blank" rel="noopener noreferrer">Nekar Samman Scheme: This scheme provides financial assistance to the weavers in the state.</a>
                </li>
                <li className="p-3"><a href="http://scholarshipresult.in/vidyasiri-scholarship/" target="_blank" rel="noopener noreferrer">Vidyasiri Scheme: This scheme provides financial assistance to meritorious students from economically weaker sections to pursue higher education.</a></li>    
                <li className="p-3"><a href="http://www.pradhanmantriyojana.co.in/cm-santwana-harish-yojana/" target="_blank" rel="noopener noreferrer">Mukhyamantri Santwana Harish Scheme: This scheme provides financial assistance to road accident victims for their medical treatment and hospitalization expenses.</a>
                </li>
                <li className="p-3"><a href="http://www.karnataka.com/govt/yuva-yuga-scheme-karnataka-employment-for-youth/" target="_blank" rel="noopener noreferrer">Yuva Yuga Scheme: This scheme provides entrepreneurship development training and financial assistance to unemployed youth, with the aim of promoting entrepreneurship.</a>
                </li>
                <li className="p-3"><a href="http://www.tesz.in/guide/sandhya-suraksha-yojana" target="_blank" rel="noopener noreferrer">Sandhya Suraksha Pension Scheme: This scheme provides financial assistance to elderly persons, widows, and disabled persons, with the aim of improving their livelihoods and social security.</a></li>
                <li className="p-3"><a href="http://vakilsearch.com/blog/basava-vasati-yojana-rgrhcl-new-list-search-beneficiary-status-2/#:~:text=Basava%20Vasati%20Yojana%202023&text=Under%20this%20scheme%2C%20the%20government,Tribes%2C%20and%20other%20disadvantaged%20groups." target="_blank" rel="noopener noreferrer">Basava Vasati Yojana: This scheme provides financial assistance for the construction of houses to the economically weaker sections in rural areas.</a>
                </li>
                <li className="p-3"><a href="http://indiaeducationdiary.in/nava-karnataka-2025-state-embarks-journey-continuous-inclusive-progress/" target="_blank" rel="noopener noreferrer">Nava Karnataka 2025 Scheme: This scheme aims to promote economic growth and development in the state through various initiatives and reforms.</a>
                </li>
                <li className="p-3"><a href="http://www.indiafilings.com/learn/entrepreneur-development-scheme/" target="_blank" rel="noopener noreferrer">Entrepreneurship Development Scheme: This scheme provides financial assistance to eligible entrepreneurs to set up new businesses or expand existing ones.</a>
                </li>
                <li className="p-3"><a href="http://bangalorerural.nic.in/en/karnataka-state-women-development-corporation/" target="_blank" rel="noopener noreferrer">Karnataka State Women's Development Corporation Scheme: This scheme provides fintancial assistance and training to women entrepreneurs to set up and run their own businesses.</a>
                </li>
                <li className="p-3"><a href="https://www.99acres.com/articles/bangalore-housing-scheme-2019-one-lakh-housing-scheme-phase-1-and-2-online-application-last-date-beneficiary-list-status-check.html" target="_blank" rel="noopener noreferrer">Chief Minister's One Lakh Bengaluru Housing Scheme: This scheme aims to provide affordable housing to the urban poor in Bengaluru.</a>
                </li>
                <li className="p-3"><a href="http://www.hkrdb.kar.nic.in/EN_index.html" target="_blank" rel="noopener noreferrer">Kalyana Karnataka Development Board (KKDB) Scheme: This scheme aims to provide development assistance to the backward regions of Kalyana Karnataka.</a></li>
                <li className="p-3"><a href="http://www.karnatakadigitalpubliclibrary.org" target="_blank" rel="noopener noreferrer">Karnataka Digital Library: This scheme provides a digital repository of books, manuscripts, and other cultural materials related to Karnataka.</a>
                </li>
                <li className="p-3"><a href="http://kspcb.karnataka.gov.in" target="_blank" rel="noopener noreferrer">Karnataka State Pollution Control Board (KSPCB) Scheme: This scheme aims to control and monitor pollution levels in the state through various initiatives and regulations.</a></li>
                <li className="p-3"><a href="http://landrecords.karnataka.gov.in/service53/" target="_blank" rel="noopener noreferrer">Bhoomi RTC: This scheme provides an online platform for citizens to access land records and other related information.</a></li>
            </ul>
        </div>}
        {showDiv1 && <div id="div1" className="elements bg-beige dark:bg-grey text-teal dark:text-blue space-y-2 rounded-xl mx-3">
                <ul className=" p-5 list-disc list-inside text-justify">
                    <li className="p-3"><a href="https://www.kmfnandini.coop/en/ksheera-bhagya" target="_blank" rel="noopener noreferrer">Ksheera Bhagya Yojana: This scheme provides free milk to school children in the state.</a> 
                    </li>
                    <li className="p-3"><a href="https://en.wikipedia.org/wiki/Indira_Canteens" target="_blank" rel="noopener noreferrer">Indira Canteen Scheme: This scheme provides affordable meals to urban poor people in Bangalore and other cities in the state.</a> 
                    </li>
                </ul>
            </div>}
            {showDiv2 && <div id="div2" className="elements bg-beige dark:bg-grey text-teal dark:text-blue space-y-2 rounded-xl mx-3">
                <ul className=" p-5 list-disc list-inside text-justify">
                    <li className="p-3"><a href="https://pmjandhanyojana.co.in/apply-anila-bhagya-scheme-karnataka-bpl-free-lpg-gas-connection/" target="_blank" rel="noopener noreferrer">Anila Bhagya Scheme: This scheme provides free LPG gases to the BPL families of the state.</a> 
                    </li>
                    <li className="p-3"><a href="https://sakala.kar.nic.in/Service%20Compendium/01-12-2022%20sakala_compendium_English%20(Final%20file).pdf" target="_blank" rel="noopener noreferrer">Sakala Scheme: This scheme ensures timely delivery of services to citizens by fixing a time limit for delivery of services and providing a penalty for the delays.</a></li>
                    <li className="p-3"><a href="https://e-swathu.kar.nic.in/(S(es1wazlbn5c5xrhxu05o3mfr))/Login.aspx" target="_blank" rel="noopener noreferrer">E-Swathu Scheme: This scheme provides an online platform for citizens to access various government services.</a></li>
                    <li className="p-3"><a href="https://nhm.gov.in/index1.php?lang=1&level=3&sublinkid=842&lid=308" target="_blank" rel="noopener noreferrer">Janani Shishu Suraksha Karyakram (JSSK): This scheme provides free and cashless delivery, newborn care, and emergency obstetric care to pregnant women and newborns.</a></li>
                    <li className="p-3"><a href="https://janasevaka.karnataka.gov.in/about_Janasevaka.html#:~:text=About%20Jana%20Sevaka&text=Janasevakas%20are%20available%20from%208AM,citizens%20in%20availing%20this%20service." target="_blank" rel="noopener noreferrer">Janasevaka Scheme: This scheme provides doorstep delivery of government services to citizens.</a></li>
                    <li className="p-3"><a href="https://kaverionline.karnataka.gov.in" target="_blank" rel="noopener noreferrer">Kaveri Online Services: This scheme provides an online platform for citizens to access various government services related to water resources, including water allocation and usage.</a>
                    </li>
                </ul>
            </div>}
            { showDiv3 && <div id="div3" className="elements bg-beige dark:bg-grey text-teal dark:text-blue space-y-2 rounded-xl mx-3"><ul className=" p-5 list-disc list-inside text-justify">
                <li className="p-3"><a href="https://www.indiafilings.com/learn/arogya-bhagya-scheme/#:~:text=Arogya%20Bhagya%20Scheme%20is%20introduced,the%20private%20and%20Government%20hospitals." target="_blank" rel="noopener noreferrer">Arogya Bhagya Yojana: This scheme provides free medical treatment for people below the poverty line in the state.</a>
                </li>
                <li className="p-3"><a href="http://arogya.karnataka.gov.in/sast/" target="_blank" rel="noopener noreferrer">Suvarna Arogya Suraksha Trust: This scheme provides health insurance to economically weaker families in the state.</a> 
                </li>
                <li><a href="https://www.pradhanmantriyojana.co.in/cm-santwana-harish-yojana/" target="_blank" rel="noopener noreferrer">Mukhyamantri Santwana Harish Scheme: This scheme provides financial assistance to road accident victims for their medical treatment and hospitalization expenses.</a></li></ul>
            </div>}
            { showDiv4 && <div id="div4" className="elements bg-beige dark:bg-grey text-teal dark:text-blue space-y-2 rounded-xl mx-3">
                <ul className=" p-5 list-disc list-inside text-justify">
                    <li className="p-3"><a href="https://pmjandhanyojana.co.in/suvarna-krishi-grama-yojana/" target="_blank" rel="noopener noreferrer">Suvarna Krishi Grama Yojane: This scheme promotes integrated farming and rural development, by providing financial assistance for various agricultural and allied activities such as horticulture, sericulture, poultry, and fishery.</a>
                    </li>
                    <li className="p-3"><a href="http://www.indiafilings.com/learn/krishi-bhagya-scheme/" target="_blank" rel="noopener noreferrer">Krishi Bhagya Scheme: This scheme provides financial assistance for micro-irrigation to farmers to promote efficient water usage.</a></li>
                    <li className="p-3"><a href="http://rkvy.nic.in/static/download/RKVY_Sucess_Story/Karnataka/BHOOCHETANA.pdf" target="_blank" rel="noopener noreferrer">Bhoochetana Scheme: This scheme provides soil health cards and agricultural advisory services to farmers, with the aim of promoting sustainable agriculture practices and improving soil fertility.</a>
                    </li>
                </ul>
            </div>}
            { showDiv5 && <div id="div5" className="elements bg-beige dark:bg-grey text-teal dark:text-blue space-y-2 rounded-xl mx-3">
                <ul className=" p-5 list-disc list-inside text-justify">
                    <li className="p-3"><a href="http://www.myscheme.gov.in/schemes/bys" target="_blank" rel="noopener noreferrer">Bhagya Laxmi Yojana: This scheme provides financial assistance to girls from economically weaker families for their education and marriage.</a></li>
                    <li className="p-3"><a href="http://sw.kar.nic.in/swincentive/SIM/SmHome.aspx" target="_blank" rel="noopener noreferrer">Kalyana Karnataka Yojana: This scheme provides financial assistance for the marriage of economically weaker families in the state.</a>
                    </li>
                    <li className="p-3"><a href="http://karnatakastateopenuniversity.in/karnataka-nekar-samman-yojana.html" target="_blank" rel="noopener noreferrer">Nekar Samman Scheme: This scheme provides financial assistance to the weavers in the state.</a>
                    </li>
                    <li className="p-3"><a href="http://scholarshipresult.in/vidyasiri-scholarship/" target="_blank" rel="noopener noreferrer">Vidyasiri Scheme: This scheme provides financial assistance to meritorious students from economically weaker sections to pursue higher education.</a></li>    
                    <li className="p-3"><a href="http://www.pradhanmantriyojana.co.in/cm-santwana-harish-yojana/" target="_blank" rel="noopener noreferrer">Mukhyamantri Santwana Harish Scheme: This scheme provides financial assistance to road accident victims for their medical treatment and hospitalization expenses.</a>
                    </li>
                    <li className="p-3"><a href="http://www.karnataka.com/govt/yuva-yuga-scheme-karnataka-employment-for-youth/" target="_blank" rel="noopener noreferrer">Yuva Yuga Scheme: This scheme provides entrepreneurship development training and financial assistance to unemployed youth, with the aim of promoting entrepreneurship and self-employment.</a>
                    </li>
                    <li className="p-3"><a href="http://www.tesz.in/guide/sandhya-suraksha-yojana" target="_blank" rel="noopener noreferrer">Sandhya Suraksha Pension Scheme: This scheme provides financial assistance to elderly persons, widows, and disabled persons, with the aim of improving their livelihoods and social security.</a></li>
                    <li className="p-3"><a href="http://vakilsearch.com/blog/basava-vasati-yojana-rgrhcl-new-list-search-beneficiary-status-2/#:~:text=Basava%20Vasati%20Yojana%202023&text=Under%20this%20scheme%2C%20the%20government,Tribes%2C%20and%20other%20disadvantaged%20groups." target="_blank" rel="noopener noreferrer">Basava Vasati Yojana: This scheme provides financial assistance for the construction of houses to the economically weaker sections in rural areas.</a>
                    </li>
                    <li className="p-3"><a href="http://indiaeducationdiary.in/nava-karnataka-2025-state-embarks-journey-continuous-inclusive-progress/" target="_blank" rel="noopener noreferrer">Nava Karnataka 2025 Scheme: This scheme aims to promote economic growth and development in the state through various initiatives and reforms.</a>
                    </li>
                    <li className="p-3"><a href="http://www.indiafilings.com/learn/entrepreneur-development-scheme/" target="_blank" rel="noopener noreferrer">Entrepreneurship Development Scheme: This scheme provides financial assistance to eligible entrepreneurs to set up new businesses or expand existing ones.</a>
                    </li>
                    <li className="p-3"><a href="http://bangalorerural.nic.in/en/karnataka-state-women-development-corporation/" target="_blank" rel="noopener noreferrer">Karnataka State Women's Development Corporation Scheme: This scheme provides financial assistance and training to women entrepreneurs to set up and run their own businesses.</a>
                    </li>
                    <li className="p-3"><a href="https://www.99acres.com/articles/bangalore-housing-scheme-2019-one-lakh-housing-scheme-phase-1-and-2-online-application-last-date-beneficiary-list-status-check.html" target="_blank" rel="noopener noreferrer">Chief Minister's One Lakh Bengaluru Housing Scheme: This scheme aims to provide affordable housing to the urban poor in Bengaluru.</a>
                    </li>
                </ul>
            </div>}
            { showDiv6 &&<div id="div6" className="elements bg-beige dark:bg-grey text-teal dark:text-blue space-y-2 rounded-xl mx-3">
                <ul className="p-5 list-disc list-inside text-justify">
                    <li className="p-3"><a href="http://www.hkrdb.kar.nic.in/EN_index.html" target="_blank" rel="noopener noreferrer">Kalyana Karnataka Development Board (KKDB) Scheme: This scheme aims to provide development assistance to the backward regions of Kalyana Karnataka.</a></li>
                <li className="p-3"><a href="http://www.karnatakadigitalpubliclibrary.org" target="_blank" rel="noopener noreferrer">Karnataka Digital Library: This scheme provides a digital repository of books, manuscripts, and other cultural materials related to Karnataka.</a>
                </li>
                <li className="p-3"><a href="http://kspcb.karnataka.gov.in" target="_blank" rel="noopener noreferrer">Karnataka State Pollution Control Board (KSPCB) Scheme: This scheme aims to control and monitor pollution levels in the state through various initiatives and regulations.</a></li>
                <li className="p-3"><a href="http://landrecords.karnataka.gov.in/service53/" target="_blank" rel="noopener noreferrer">Bhoomi RTC: This scheme provides an online platform for citizens to access land records and other related information.</a></li>
                </ul>
            </div>}
        </>
    )

}
export default Lsche