"use client";

import { portfolios8 } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const filters = [
  { name: "All works", category: "all" },
  { name: "UI Design", category: "ui-design" },
  { name: "Development", category: "development" },
  { name: "Design Systems", category: "design-systems" },
];

export default function MasonryDemo() {
  const [currentCategory, setCurrentCategory] = useState("all");
  const isotopContainer = useRef();
  const isotope = useRef();

  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    // Initialize Isotope in the mounted hook
    isotope.current = new Isotope(isotopContainer.current, {
      itemSelector: ".work-item",
      layoutMode: "masonry",
      masonry: {
        columnWidth: ".work-item",
        gutter: 30
      }
    });
    
    imagesloaded(isotopContainer.current).on("progress", function () {
      // Trigger Isotope layout
      isotope.current.layout();
    });
  };

  const updateCategory = (val) => {
    setCurrentCategory(val);
    if (isotope.current) {
      isotope.current.arrange({
        filter: val == "all" ? "*" : "." + val,
      });
    }
  };

  useEffect(() => {
    initIsotop();
  }, []);

  // Create portfolio items with varying heights for masonry effect
  const masonryPortfolioItems = [
    {
      id: "bpmn-modeler",
      imageSrc: "/assets/images/portfolio/bpmn-modeler-thumb.jpg",
      title: "BPMN Modeler",
      categories: "UI Design, Product Design",
      category: "ui-design",
      height: 400
    },
    {
      id: "bank-account-opening", 
      imageSrc: "/assets/images/portfolio/projects-1.jpg", // Using existing image as placeholder
      title: "Bank Account Opening",
      categories: "HTML/CSS, UX Engineering",
      category: "development",
      height: 300
    },
    {
      id: "processmaker-design-system",
      imageSrc: "/assets/images/portfolio/projects-2.jpg", // Using existing image as placeholder
      title: "ProcessMaker Design System",
      categories: "Design Systems",
      category: "design-systems", 
      height: 350
    },
    {
      id: "stephen-king-api",
      imageSrc: "/assets/images/portfolio/api-thumb.png",
      title: "Stephen King REST API",
      categories: "Python, Node.js, PostgreSQL",
      category: "development",
      height: 320
    },
    {
      id: "extra-1",
      imageSrc: "/assets/images/portfolio/projects-3.jpg",
      title: "Additional Project 1",
      categories: "UI Design",
      category: "ui-design",
      height: 280
    },
    {
      id: "extra-2", 
      imageSrc: "/assets/images/portfolio/projects-4.jpg",
      title: "Additional Project 2",
      categories: "Development",
      category: "development",
      height: 380
    }
  ];

  return (
    <div className="container">
      {/* Works Filter */}
      <div className="works-filter text-center mb-60 mb-sm-40 z-index-1">
        {filters.map((elm, i) => (
          <a
            onClick={() => updateCategory(elm.category)}
            key={i}
            className={`filter ${
              currentCategory == elm.category ? "active" : ""
            }`}
            style={{ cursor: "pointer", margin: "0 10px", padding: "8px 16px" }}
          >
            {elm.name}
          </a>
        ))}
      </div>
      {/* End Works Filter */}

      {/* Works Grid */}
      <div
        ref={isotopContainer}
        className="works-grid work-grid-3 work-grid-gut-lg masonry"
        id="work-grid"
        style={{ position: "relative" }}
      >
        {masonryPortfolioItems.map((item, index) => (
          <div
            key={index}
            className={`work-item ${item.category}`}
            style={{ 
              width: "calc(33.333% - 20px)", 
              marginBottom: "30px",
              display: "inline-block"
            }}
          >
            <Link href={`/portfolio-single/${item.id}`} className="work-ext-link">
              <div className="work-img" style={{ height: `${item.height}px`, overflow: "hidden" }}>
                <div className="work-img-bg" />
                <Image
                  width={400}
                  height={item.height}
                  src={item.imageSrc}
                  alt={item.title}
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover",
                    transition: "transform 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                />
              </div>
              <div className="work-intro text-start mt-20">
                <h3 className="work-title font-alt mb-10">{item.title}</h3>
                <div className="work-descr text-gray">{item.categories}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {/* End Works Grid */}
      
      <div className="mt-60 text-center">
        <h4>Masonry Layout Features:</h4>
        <ul className="text-start" style={{ maxWidth: "600px", margin: "20px auto" }}>
          <li>• Filterable categories</li>
          <li>• Varying item heights create natural brick-like layout</li>
          <li>• Responsive grid that adapts to screen size</li>
          <li>• Smooth animations when filtering</li>
          <li>• Isotope.js powers the layout and filtering</li>
        </ul>
        <p className="text-gray mt-20">
          This masonry layout could replace your current alternating portfolio layout if you prefer this style.
        </p>
      </div>
    </div>
  );
}