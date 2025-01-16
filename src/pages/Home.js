import Footer3 from "../components/footers/Footer3";
import Header3 from "../components/headers/Header3";
import Home3 from "../components/homes/home-3";
import Hero1 from "../components/homes/home-3/heros/Hero1";
import { brutalistOnepage } from "../data/menu";
import sectionBg from "../assets/images/demo-brutalist/section-bg-1.jpg"; 

import ParallaxContainer from "../components/common/ParallaxContainer";


const Home = () => {
  return (
    <>
    
      <div className="theme-brutalist">
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed wow-menubar">
            <Header3 links={brutalistOnepage} />
          </nav>
          <main id="main">
            <ParallaxContainer
              className="home-section parallax-5 light-content scrollSpysection"
              style={{
                backgroundImage: `url(${sectionBg})`, // Use the imported image
              }}
           
      
              id="home"
            >
              <Hero1 />
            </ParallaxContainer>

            <Home3 onePage />
          </main>
          <footer className="page-section footer-1 bg-dark-1 light-content">
            <Footer3 />
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home;
