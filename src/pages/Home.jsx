import AboutUs from "../layouts/AboutUs";
import Banner from "../layouts/Banner";
import Download from "../layouts/Download";
import Footer from "../layouts/Footer";
import FrequentlyQuestions from "../layouts/FrequentlyQuestions";
import GetTrial from "../layouts/GetTrial";
import Navber from "../layouts/Navber";
import NewFeatures from "../layouts/NewFeatures";
import TheMostPopuler from "../layouts/TheMostPopuler";
import UiPart from "../layouts/UiPart";
import WhatWillGet from "../layouts/WhatWillGet";


const Home = () => {
  return (
    <>
    <Navber />
    <Banner />
    <WhatWillGet />
    <TheMostPopuler />
    <UiPart />
    <Download />
    <AboutUs />
    <GetTrial />
    <FrequentlyQuestions />
    <NewFeatures />
    <Footer />
    </>
  )
}

export default Home;
