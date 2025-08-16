import Footer2 from "@/components/footers/Footer2";
import Header8 from "@/components/headers/Header8";
import { modernMultipage } from "@/data/menu";

// Unused Components to Demo
import Accordion1 from "@/components/accordions/Accordion1";
import Accordion2 from "@/components/accordions/Accordion2";
import Blogs1 from "@/components/blog/Blogs1";
import Comments from "@/components/blog/Comments";
import Content1 from "@/components/blog/content/Content1";
import Widget1 from "@/components/blog/widgets/Widget1";
import Widget2 from "@/components/blog/widgets/Widget2";
import Portfolio from "@/components/portfolio/Portfolio";
import Portfolio2 from "@/components/portfolio/Portfolio2";
import Portfolio3 from "@/components/portfolio/Portfolio3";
import Portfolio4 from "@/components/portfolio/Portfolio4";
import PortfolioMassonry2 from "@/components/portfolio/PortfolioMassonry2";
import PortfolioMassonry3 from "@/components/portfolio/PortfolioMassonry3";
import PortfolioMassonry4 from "@/components/portfolio/PortfolioMassonry4";
import RetaledProject1 from "@/components/portfolio/relatedProjects/RetaledProject1";
import RelatedProject2 from "@/components/portfolio/relatedProjects/RelatedProject2";
import RelatedProject9 from "@/components/portfolio/relatedProjects/RelatedProject9";
import RelatedProject10 from "@/components/portfolio/relatedProjects/RelatedProject10";
import Gallery1 from "@/components/gallery/Gallery1";
import Account from "@/components/others/Account";
import ClientSlider from "@/components/others/ClientSlider";
import BrandsDark from "@/components/common/BrandsDark";
import Faq from "@/components/common/Faq";
import Map from "@/components/common/Map";
import ModalVideo from "@/components/common/ModalVideo";
import Parallax from "@/components/common/Parallax";
import TypeWriter from "@/components/common/TypeWriter";
import Hero2 from "@/components/homes/home-8/heros/Hero2";
import Hero3 from "@/components/homes/home-8/heros/Hero3";
import Hero4 from "@/components/homes/home-8/heros/Hero4";
import Hero5 from "@/components/homes/home-8/heros/Hero5";

// Elements Components
import Gallery from "@/components/elements/Gallery";
import Grid from "@/components/elements/Grid";
import Modals from "@/components/elements/Modals";
import Slider1 from "@/components/elements/Slider1";
import Slider2 from "@/components/elements/Slider2";
import Slider3 from "@/components/elements/Slider3";
import Slider4 from "@/components/elements/Slider4";
import Slider5 from "@/components/elements/Slider5";
import Tooltips from "@/components/elements/Tooltips";

// Newsletter Forms
import Form1 from "@/components/newsletterForms/Form1";
import Form2 from "@/components/newsletterForms/Form2";
import Form3 from "@/components/newsletterForms/Form3";
import Form4 from "@/components/newsletterForms/Form4";
import Form6 from "@/components/newsletterForms/Form6";
import Form7 from "@/components/newsletterForms/Form7";

// Blog Newsletter Forms (only 2 exist)
import NewsLetterForm1 from "@/components/blog/newsletterForms/NewsLetterForm1";
import NewsLetterForm2 from "@/components/blog/newsletterForms/NewsLetterForm2";

// Blog Comment Forms
import CommentForm1 from "@/components/blog/commentForm/Form1";
import CommentForm2 from "@/components/blog/commentForm/Form2";
import CommentForm3 from "@/components/blog/commentForm/Form3";
import CommentForm4 from "@/components/blog/commentForm/Form4";
import CommentForm5 from "@/components/blog/commentForm/Form5";

// Blog Sliders
import BlogSlider1 from "@/components/blog/sliders/Slider1";
import BlogSlider2 from "@/components/blog/sliders/Slider2";
import BlogSlider3 from "@/components/blog/sliders/Slider3";
import BlogSlider4 from "@/components/blog/sliders/Slider4";

// Portfolio Slider
import PortfolioSlider1 from "@/components/portfolio/sliders/Slider1";

export const metadata = {
  title: "Components Demo || Hunter Van Lear Portfolio",
  description: "Demo page showcasing all unused template components",
};

export default function ComponentsDemo() {
  return (
    <>
      <div className="theme-modern">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header8 links={modernMultipage} />
          </nav>
          <main id="main">
            {/* Hero Section */}
            <section className="home-section bg-dark-1 light-content" id="home">
              <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100">
                <div className="row w-100">
                  <div className="col-lg-12 text-center">
                    <h1 className="hs-title-1 mb-30">
                      <span className="wow charsAnimIn" data-splitting="chars">
                        Unused Components Demo
                      </span>
                    </h1>
                    <div className="row">
                      <div className="col-lg-10 offset-lg-1">
                        <p className="section-descr mb-0 wow fadeInUp" data-wow-delay="0.2s">
                          This page showcases all template components that aren't currently being used 
                          in the portfolio. Browse through to see what's available and decide what to keep.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Hero Variants Section */}
            <section className="page-section" id="hero-variants">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="section-title mb-70 mb-sm-40">Hero Variants</h2>
                  </div>
                </div>
              </div>
              
              {/* Hero 2 */}
              <div className="mb-80">
                <h3 className="text-center mb-30">Hero 2</h3>
                <Hero2 />
              </div>

              {/* Hero 3 */}
              <div className="mb-80">
                <h3 className="text-center mb-30">Hero 3</h3>
                <Hero3 />
              </div>

              {/* Hero 4 */}
              <div className="mb-80">
                <h3 className="text-center mb-30">Hero 4</h3>
                <Hero4 />
              </div>

              {/* Hero 5 */}
              <div className="mb-80">
                <h3 className="text-center mb-30">Hero 5</h3>
                <Hero5 />
              </div>
            </section>

            {/* Accordion Components */}
            <section className="page-section bg-gray-light-1" id="accordions">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="section-title mb-70 mb-sm-40">Accordion Components</h2>
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-lg-6 mb-60">
                    <h3 className="mb-30">Accordion 1</h3>
                    <Accordion1 />
                  </div>
                  <div className="col-lg-6 mb-60">
                    <h3 className="mb-30">Accordion 2</h3>
                    <Accordion2 />
                  </div>
                </div>
              </div>
            </section>

            {/* Portfolio Components */}
            <section className="page-section" id="portfolio-components">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="section-title mb-70 mb-sm-40">Portfolio Layouts</h2>
                  </div>
                </div>
              </div>

              {/* Portfolio 1 */}
              <div className="mb-80">
                <h3 className="text-center mb-30">Portfolio Layout 1</h3>
                <Portfolio />
              </div>

              {/* Portfolio 2 */}
              <div className="mb-80">
                <h3 className="text-center mb-30">Portfolio Layout 2</h3>
                <Portfolio2 />
              </div>

              {/* Portfolio 3 */}
              <div className="mb-80">
                <h3 className="text-center mb-30">Portfolio Layout 3</h3>
                <Portfolio3 />
              </div>

              {/* Portfolio 4 */}
              <div className="mb-80">
                <h3 className="text-center mb-30">Portfolio Layout 4</h3>
                <Portfolio4 />
              </div>

              {/* Masonry Layouts */}
              <div className="mb-80">
                <h3 className="text-center mb-30">Portfolio Masonry 2</h3>
                <PortfolioMassonry2 />
              </div>

              <div className="mb-80">
                <h3 className="text-center mb-30">Portfolio Masonry 3</h3>
                <PortfolioMassonry3 />
              </div>

              <div className="mb-80">
                <h3 className="text-center mb-30">Portfolio Masonry 4</h3>
                <PortfolioMassonry4 />
              </div>
            </section>

            {/* Blog Components */}
            <section className="page-section bg-gray-light-1" id="blog-components">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="section-title mb-70 mb-sm-40">Blog Components</h2>
                  </div>
                </div>

                <div className="mb-80">
                  <h3 className="mb-30">Blog Layout 1</h3>
                  <Blogs1 />
                </div>

                <div className="row">
                  <div className="col-lg-8 mb-60">
                    <h3 className="mb-30">Blog Content</h3>
                    <Content1 />
                  </div>
                  <div className="col-lg-4 mb-60">
                    <h3 className="mb-30">Blog Widgets</h3>
                    <Widget1 />
                    <div className="mt-40">
                      <Widget2 />
                    </div>
                  </div>
                </div>

                <div className="mb-60">
                  <h3 className="mb-30">Comments</h3>
                  <Comments />
                </div>
              </div>
            </section>

            {/* Elements Components */}
            <section className="page-section" id="elements">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="section-title mb-70 mb-sm-40">UI Elements</h2>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 mb-60">
                    <h3 className="mb-30">Gallery Element</h3>
                    <Gallery />
                  </div>
                  <div className="col-lg-6 mb-60">
                    <h3 className="mb-30">Grid Element</h3>
                    <Grid />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 mb-60">
                    <h3 className="mb-30">Modals</h3>
                    <Modals />
                  </div>
                  <div className="col-lg-6 mb-60">
                    <h3 className="mb-30">Tooltips</h3>
                    <Tooltips />
                  </div>
                </div>

                <div className="mb-60">
                  <h3 className="mb-30">Element Sliders</h3>
                  <div className="row">
                    <div className="col-lg-6 mb-40">
                      <h4>Slider 1</h4>
                      <Slider1 />
                    </div>
                    <div className="col-lg-6 mb-40">
                      <h4>Slider 2</h4>
                      <Slider2 />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 mb-40">
                      <h4>Slider 3</h4>
                      <Slider3 />
                    </div>
                    <div className="col-lg-4 mb-40">
                      <h4>Slider 4</h4>
                      <Slider4 />
                    </div>
                    <div className="col-lg-4 mb-40">
                      <h4>Slider 5</h4>
                      <Slider5 />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Newsletter Forms */}
            <section className="page-section bg-gray-light-1" id="newsletter-forms">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="section-title mb-70 mb-sm-40">Newsletter Forms</h2>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-4 mb-40">
                    <h4>Form 1</h4>
                    <Form1 />
                  </div>
                  <div className="col-lg-4 mb-40">
                    <h4>Form 2</h4>
                    <Form2 />
                  </div>
                  <div className="col-lg-4 mb-40">
                    <h4>Form 3</h4>
                    <Form3 />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-4 mb-40">
                    <h4>Form 4</h4>
                    <Form4 />
                  </div>
                  <div className="col-lg-4 mb-40">
                    <h4>Form 6</h4>
                    <Form6 />
                  </div>
                  <div className="col-lg-4 mb-40">
                    <h4>Form 7</h4>
                    <Form7 />
                  </div>
                </div>

                <h3 className="mt-60 mb-30">Blog Newsletter Forms</h3>
                <div className="row">
                  <div className="col-lg-6 mb-40">
                    <h5>Blog Newsletter Form 1</h5>
                    <NewsLetterForm1 />
                  </div>
                  <div className="col-lg-6 mb-40">
                    <h5>Blog Newsletter Form 2</h5>
                    <NewsLetterForm2 />
                  </div>
                </div>

                <h3 className="mt-60 mb-30">Blog Comment Forms</h3>
                <div className="row">
                  <div className="col-lg-4 mb-40">
                    <h5>Comment Form 1</h5>
                    <CommentForm1 />
                  </div>
                  <div className="col-lg-4 mb-40">
                    <h5>Comment Form 2</h5>
                    <CommentForm2 />
                  </div>
                  <div className="col-lg-4 mb-40">
                    <h5>Comment Form 3</h5>
                    <CommentForm3 />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 mb-40">
                    <h5>Comment Form 4</h5>
                    <CommentForm4 />
                  </div>
                  <div className="col-lg-6 mb-40">
                    <h5>Comment Form 5</h5>
                    <CommentForm5 />
                  </div>
                </div>
              </div>
            </section>

            {/* Sliders */}
            <section className="page-section" id="sliders">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="section-title mb-70 mb-sm-40">Content Sliders</h2>
                  </div>
                </div>

                <div className="mb-60">
                  <h3 className="mb-30">Blog Sliders</h3>
                  <div className="row">
                    <div className="col-lg-6 mb-40">
                      <h4>Blog Slider 1</h4>
                      <BlogSlider1 />
                    </div>
                    <div className="col-lg-6 mb-40">
                      <h4>Blog Slider 2</h4>
                      <BlogSlider2 />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 mb-40">
                      <h4>Blog Slider 3</h4>
                      <BlogSlider3 />
                    </div>
                    <div className="col-lg-6 mb-40">
                      <h4>Blog Slider 4</h4>
                      <BlogSlider4 />
                    </div>
                  </div>
                </div>

                <div className="mb-60">
                  <h3 className="mb-30">Portfolio Slider</h3>
                  <PortfolioSlider1 />
                </div>
              </div>
            </section>

            {/* Other Components */}
            <section className="page-section bg-gray-light-1" id="other-components">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="section-title mb-70 mb-sm-40">Other Components</h2>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 mb-60">
                    <h3 className="mb-30">Related Projects</h3>
                    <h4 className="mb-20">Related Project 1 (typo in filename)</h4>
                    <RetaledProject1 />
                    <h4 className="mb-20 mt-40">Related Project 2</h4>
                    <RelatedProject2 />
                    <h4 className="mb-20 mt-40">Related Project 9</h4>
                    <RelatedProject9 />
                    <h4 className="mb-20 mt-40">Related Project 10</h4>
                    <RelatedProject10 />
                  </div>
                  <div className="col-lg-6 mb-60">
                    <h3 className="mb-30">Gallery 1</h3>
                    <Gallery1 />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 mb-60">
                    <h3 className="mb-30">Account Component</h3>
                    <Account />
                  </div>
                  <div className="col-lg-6 mb-60">
                    <h3 className="mb-30">Client Slider</h3>
                    <ClientSlider />
                  </div>
                </div>
              </div>
            </section>

            {/* Common Components */}
            <section className="page-section" id="common-components">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="section-title mb-70 mb-sm-40">Common Components</h2>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 mb-60">
                    <h3 className="mb-30">Brands Dark</h3>
                    <BrandsDark />
                  </div>
                  <div className="col-lg-6 mb-60">
                    <h3 className="mb-30">FAQ</h3>
                    <Faq />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 mb-60">
                    <h3 className="mb-30">Map</h3>
                    <Map />
                  </div>
                  <div className="col-lg-6 mb-60">
                    <h3 className="mb-30">Modal Video</h3>
                    <ModalVideo />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 mb-60">
                    <h3 className="mb-30">Parallax</h3>
                    <Parallax />
                  </div>
                  <div className="col-lg-6 mb-60">
                    <h3 className="mb-30">TypeWriter</h3>
                    <TypeWriter />
                  </div>
                </div>
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