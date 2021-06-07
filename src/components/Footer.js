import React from 'react';

const Footer = () => {
    return(
        <div id="footer">
          &copy; 2021&nbsp;
          <a href="http://www.spaceyyy.com/" target="_blank" rel="noreferrer">
            spaceyyy
          </a>&nbsp;
          / made with&nbsp;
          <svg
            color="#ff6b6b"
            xmlns="http://www.w3.org/2000/svg"
            width=".9em"
            height=".9em"
            fill="#ff9f9f"
            className="bi bi-heart-fill"
            viewBox="0 0 16 16"
          >
            &nbsp;
            <path
              fillRule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>
          &nbsp;in Indianapolis
        </div>
    );
};

export default Footer;
