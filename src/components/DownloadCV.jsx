import React from 'react';
import styled from 'styled-components';

const DownloadCV = () => {
  return (
    <StyledWrapper>
      <div className="button">
        <a href="#" className="anchor">
          <span>Download CV</span>
        </a>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .anchor {
    text-decoration: none;
    color: #fff;
    display: inline-block;
    font-family: sans-serif;
    font-weight: 600;
    border-radius: 50px;
    border: 2px solid #0047AB;
    padding: 14px 40px 13px;
    overflow: hidden;
    position: relative;
  }

  .anchor:hover {
    color: #fff;
  }

  .button a::before {
    position: absolute;
    content: "";
    z-index: 0;
    background-color: #0096FF;
    left: -5px;
    right: -5px;
    bottom: -5px;
    height: 111%;
    transition: all .3s ease;
  }

  .button a:hover::before {
    height: 11%;
  }

  .button span {
    position: relative;
    z-index: 2;
    transition: all .3s ease;
  }`;

export default DownloadCV;
