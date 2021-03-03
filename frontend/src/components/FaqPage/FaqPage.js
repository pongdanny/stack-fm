import React from "react";
import "./FaqPage.css";

const FaqPage = (props) => {
  return (
    <div className="content">
      <div className="center">
        <details>
          <summary>
            <h2>What Is Stack FM?</h2>
          </summary>
          <p>stack-fm is a music list app inspired by last.fm</p>
        </details>
        <details>
          <summary>
            <h2>What Technologies Were Used?</h2>
          </summary>
          <p>Mainly React, Redux, Express and Sequelize</p>
        </details>
        <details>
          <summary>
            <h2>How Long Was Development?</h2>
          </summary>
          <p>About a week, more or less</p>
        </details>
        <details>
          <summary>
            <h2>Where Can You Be Reached?</h2>
          </summary>
          <p>
            My Github Link is Provided in the Contact Page, you can also contact
            reach me via LinkedIn! The link to my LinkedIn profile is in my
            Github Bio :) Thanks for the Visit!
          </p>
        </details>
      </div>
    </div>
  );
};

export default FaqPage;
