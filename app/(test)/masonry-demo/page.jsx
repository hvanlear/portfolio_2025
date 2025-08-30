"use client";

import Footer2 from "@/components/footers/Footer2";
import Header8 from "@/components/headers/Header8";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import { modernMultipage } from "@/data/menu";

export default function MasonryDemoPage() {
  return (
    <>
      <div className="theme-modern">
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed wow-menubar">
            <Header8 links={modernMultipage} />
          </nav>
          
          <main id="main">
            <ParallaxContainer
              className="page-section pt-90 pb-90 pb-xs-40 bg-dark-alpha-60 parallax-5 light-content"
              style={{
                backgroundImage: "url(/assets/images/demo-modern/section-bg-6.jpg)",
              }}
              id="home"
            >
              <div className="container position-relative">
                <div className="row">
                  <div className="col-12">
                    <h1 className="hs-title-5 font-alt overflow-hidden mb-0">
                      <span className="d-block">Masonry</span>
                      <span className="d-block text-end">Portfolio Demo</span>
                    </h1>
                    <p className="lead text-white-50 mt-30">
                      Example of the masonry grid layout that's available but not currently used
                    </p>
                  </div>
                </div>
              </div>
            </ParallaxContainer>

            <section className="page-section">
              <div className="container">
                <p className="text-center">Masonry demo removed - component not needed</p>
              </div>
            </section>
          </main>

          <footer className="footer-1 bg-dark-1 light-content">
            <Footer2 />
          </footer>
        </div>
      </div>
    </>
  );
}