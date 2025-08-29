import React from 'react';
import styled from 'styled-components';

const ButtonHome = ({ name, onClick }) => {
  return (
    <StyledWrapper>
      <button className="learn-more" onClick={onClick}>
        <span className="circle" aria-hidden="true">
          <span className="icon arrow" />
        </span>
        <span className="button-text">{name}</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .learn-more {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 1px solid #16213e;
    border-radius: 1.625rem;
    background: #fcf7f8;
    font-family: inherit;
    font-size: inherit;
    width: 15.5rem;
    height: auto;
  }

  .circle {
    transition: all 0.35s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    width: 3rem;
    height: 3rem;
    background: #16213e;
    border-radius: 1.625rem;
  }

  .icon {
    transition: all 0.35s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #fff;
  }

  .icon.arrow {
    transition: all 0.8s cubic-bezier(0.65, 0, 0.076, 1);
    left: 0.625rem;
    width: 1.125rem;
    height: 0.125rem;
    background: none;
  }

  .icon.arrow::before {
    position: absolute;
    content: "";
    top: -0.29rem;
    right: 0.0625rem;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid #fff;
    border-right: 0.125rem solid #fff;
    transform: rotate(45deg);
  }

  .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.75rem 0;
    margin: 0 0 0 1.85rem;
    color: #282936;
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    text-transform: uppercase;
    transform: translate(0rem, 0.1rem);
  }

  .learn-more:hover .circle {
    width: 100%;
  }

  .learn-more:hover .circle .icon.arrow {
    background: #fff;
    transform: translate(12.2rem, 0);
  }

  .learn-more:hover .button-text {
    color: #fff;
    transform: translate(-1.6rem, 0.1rem);
  }

  /* 📱 Small devices */
  @media (max-width: 480px) {
    .learn-more {
      width: 12rem;
      font-size: 0.9rem;
    }

    .circle {
      width: 2.5rem;
      height: 2.5rem;
    }

    .icon.arrow {
      left: 0.4rem;
      width: 1rem;
    }

    .learn-more:hover .circle .icon.arrow {
      transform: translate(9rem, 0);
    }

    .button-text {
      margin-left: 1.5rem;
      font-size: 0.7rem;
    }
  }

  /* 📱 Very small devices */
  @media (max-width: 370px) {
    .learn-more {
      width: 12rem;
      font-size: 0.8rem;
    }

    .learn-more:hover .circle .icon.arrow {
      transform: translate(7.5rem, 0);
    }
  }
`;

export default ButtonHome;
