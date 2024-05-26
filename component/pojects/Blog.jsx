import React from "react";
import "./blog.css";

const Blog = () => {
  return (
    <>
    <div className="blogcontainer2">
        <h1>2024 New Series / Iterior Model</h1>
         <br />
        <h1>VANGUARD light your project cases</h1>
        
        </div>
      <div className="blogcontainer">
        <div className="leftblogcontainer">
          <img
            width={"506px"}
            src="https://www.vanguardlights.com/picture/luminaire-deco-01-1600.jpg"
            alt=""/>
          <h1>The Future of Home Design in India | The <br /> Opportunities that Lie Ahead</h1>
          <span>HarmonicSystem |</span><span>3 min</span>
        </div>

        <div className="rightblogcontainer">
         <div className="rightblogcontainerrecent">
          Recent Articles
        
          <div className="rightsidediv">
            <span>NEWS AND INSIGHTS</span>
            <span>3 Min</span>
          </div>
          <h> The Future of Home Design in India | The Opportunities that Lie Ahead </h>
          <div>
            <div>#harmonicSystem</div>
          </div>
         </div>
        </div>
      </div>
      
    </>
  );
};

export default Blog;
