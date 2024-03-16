import React from "react";
import HeaderLearning from '../components/Part/User/Learning Page/HeaderLearning';
import ContentLearning from "../components/Part/User/Learning Page/ContentLearning";
import FooterLeanring from "../components/Part/User/Learning Page/FooterLeanring";

function LearningPage() {
    return <div className='w-full h-[100vh]  m-auto bg-white'>
        <header className="header-leaning left-0 fixed h-14 w-full py-3 z-10 bg-third  flex items-center ">
            <HeaderLearning />
        </header>
        <div className="content-learning flex justify-center items-center pt-[56px]  max-h-[92vh]">
            <ContentLearning />
        </div>
        <footer className="footer-leaning  left-0 fixed z-100 bottom-0 h-[56px] w-full py-4 z-10 bg-[#f0f0f0]  flex items-center">
        <FooterLeanring/>
        </footer>
    </div>;
}

export default LearningPage;
