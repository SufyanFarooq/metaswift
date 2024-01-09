import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
// import { Modal } from "antd";
import ImagePopupAnt from './ImagePopupAnt';
// import 'antd/dist/antd.css';
import imageUrl from './popup/popup1.jfif'

export default function HomeNew() {

  const [isImagePopupVisible, setImagePopupVisible] = useState(true);


  useEffect(() => {
 sessionStorage.clear();
    // setImagePopupVisible(true);
  }, []); 

  const handleCloseImagePopup = () => {
    setImagePopupVisible(false);
  };


  return (
    <>
      {/* <ImagePopupAnt imageUrl={imageUrl} visible={isImagePopupVisible} onClose={handleCloseImagePopup} /> */}

      <div className="wrapper">
        <div className="btn-mobile-menu">
          <div className="hamburger">
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </div>
        </div>
        <div className="logo-composition">
          <div className="circle-1" />
          <div className="circle-2" />
          <div className="circle-3" />
          <div className="circle-4" />
          <div className="scale" />
          <div className="scale-2" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 60.74 61.24"
            className="svg-circle"
          >
            <g style={{ isolation: "isolate" }}>
              <g>
                <g style={{ mixBlendMode: "soft-light" }}>
                  <circle
                    className="circle"
                    cx="5.42"
                    cy="27.24"
                    r="0.51"
                    transform="translate(-12 5.61) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="4.93"
                    cy="33.59"
                    r="0.51"
                    transform="translate(-14.99 6.1) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="7.13"
                    cy="41.14"
                    r="0.51"
                    transform="translate(-18.24 7.98) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="11.21"
                    cy="47.84"
                    r="0.51"
                    transform="translate(-20.88 10.63) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="12.48"
                    cy="52.5"
                    r="0.51"
                    transform="translate(-22.89 11.74) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="20.94"
                    cy="56.55"
                    r="0.51"
                    transform="translate(-23.8 16.12) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="28.41"
                    cy="58.24"
                    r="0.51"
                    transform="translate(-23.74 19.78) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="37.17"
                    cy="57.23"
                    r="0.51"
                    transform="translate(-22.28 23.71) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="46.29"
                    cy="53.05"
                    r="0.51"
                    transform="translate(-19.3 27.47) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="53.07"
                    cy="45.95"
                    r="0.51"
                    transform="translate(-15.24 29.79) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="56.74"
                    cy="36.56"
                    r="0.51"
                    transform="translate(-10.48 30.43) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="57.48"
                    cy="26.32"
                    r="0.51"
                    transform="translate(-5.65 29.6) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="54.87"
                    cy="17.66"
                    r="0.51"
                    transform="translate(-1.94 27.41) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="48.69"
                    cy="10.6"
                    r="0.51"
                    transform="translate(0.62 23.75) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="41.35"
                    cy="5.2"
                    r="0.51"
                    transform="translate(2.29 19.74) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="32.46"
                    cy="3.25"
                    r="0.51"
                    transform="translate(2.18 15.4) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="24.48"
                    cy="3.53"
                    r="0.51"
                    transform="translate(1.15 11.74) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="16.32"
                    cy="6.63"
                    r="0.51"
                    transform="translate(-1.21 8.31) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="10.56"
                    cy="11.54"
                    r="0.51"
                    transform="translate(-4.14 6.2) rotate(-27.59)"
                  />
                  <circle
                    className="circle"
                    cx="6.23"
                    cy="17.53"
                    r="0.51"
                    transform="translate(-7.41 4.88) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="3.82"
                    cy="23.06"
                    r="0.51"
                    transform="translate(-10.24 4.39) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="2.74"
                    cy="30.51"
                    r="0.51"
                    transform="translate(-13.82 4.73) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="3.25"
                    cy="38.16"
                    r="0.51"
                    transform="translate(-17.3 5.84) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="3.92"
                    cy="43.08"
                    r="0.51"
                    transform="translate(-19.5 6.71) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="1.32"
                    cy="34.23"
                    r="0.51"
                    transform="translate(-15.7 4.5) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="1.34"
                    cy="26.68"
                    r="0.51"
                    transform="translate(-12.2 3.65) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="3.2"
                    cy="19.65"
                    r="0.51"
                    transform="translate(-8.73 3.71) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="6.42"
                    cy="13.71"
                    r="0.51"
                    transform="translate(-5.62 4.53) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="11.95"
                    cy="7.82"
                    r="0.51"
                    transform="translate(-2.26 6.42) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="19.43"
                    cy="3.28"
                    r="0.51"
                    transform="translate(0.69 9.37) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="28.04"
                    cy="1.45"
                    r="0.51"
                    transform="translate(2.52 13.15) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="36.84"
                    cy="2.13"
                    r="0.51"
                    transform="translate(3.2 17.3) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="46.05"
                    cy="6.02"
                    r="0.51"
                    transform="translate(2.45 22) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="52.93"
                    cy="12.2"
                    r="0.51"
                    transform="translate(0.37 25.9) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="57.97"
                    cy="21.51"
                    r="0.51"
                    transform="translate(-3.37 29.28) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="59.39"
                    cy="31.33"
                    r="0.51"
                    transform="translate(-7.76 31.06) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="57.11"
                    cy="41.83"
                    r="0.51"
                    transform="translate(-12.88 31.19) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="51.1"
                    cy="50.91"
                    r="0.51"
                    transform="translate(-17.76 29.45) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="42.61"
                    cy="56.93"
                    r="0.51"
                    transform="translate(-21.51 26.2) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="32.43"
                    cy="59.71"
                    r="0.51"
                    transform="translate(-23.96 21.8) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="23.76"
                    cy="58.95"
                    r="0.51"
                    transform="translate(-24.59 17.7) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="27.33"
                    cy="60.92"
                    r="0.31"
                    transform="translate(-25.1 19.58) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="37.76"
                    cy="59.49"
                    r="0.31"
                    transform="translate(-23.25 24.25) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="47.84"
                    cy="54.89"
                    r="0.31"
                    transform="translate(-10.64 98.28) rotate(-85.51)"
                  />
                  <circle
                    className="circle"
                    cx="55.33"
                    cy="47.32"
                    r="0.31"
                    transform="translate(3.81 98.77) rotate(-85.5)"
                  />
                  <circle
                    className="circle"
                    cx="59.28"
                    cy="37.1"
                    r="0.31"
                    transform="translate(17.66 93.3) rotate(-85.52)"
                  />
                  <circle
                    className="circle"
                    cx="59.62"
                    cy="25.78"
                    r="0.31"
                    transform="translate(29.26 83.2) rotate(-85.52)"
                  />
                  <circle
                    className="circle"
                    cx="56.7"
                    cy="16.66"
                    r="0.31"
                    transform="translate(35.66 71.88) rotate(-85.51)"
                  />
                  <circle
                    className="circle"
                    cx="49.95"
                    cy="8.25"
                    r="0.31"
                    transform="translate(37.81 57.4) rotate(-85.51)"
                  />
                  <circle
                    className="circle"
                    cx="42.61"
                    cy="3.15"
                    r="0.31"
                    transform="translate(36.12 45.38) rotate(-85.51)"
                  />
                  <circle
                    className="circle"
                    cx="32.36"
                    cy="1.08"
                    r="0.31"
                    transform="translate(28.75 33.26) rotate(-85.51)"
                  />
                  <circle
                    className="circle"
                    cx="24.01"
                    cy="1.52"
                    r="0.31"
                    transform="translate(20.62 25.34) rotate(-85.51)"
                  />
                  <circle
                    className="circle"
                    cx="15.38"
                    cy="4.82"
                    r="0.31"
                    transform="translate(9.37 19.77) rotate(-85.5)"
                  />
                  <circle
                    className="circle"
                    cx="8.66"
                    cy="10.12"
                    r="0.31"
                    transform="translate(-2.11 17.96) rotate(-85.51)"
                  />
                  <circle
                    className="circle"
                    cx="4.24"
                    cy="16.59"
                    r="0.31"
                    transform="matrix(0.08, -1, 1, 0.08, -12.63, 19.51)"
                  />
                  <circle
                    className="circle"
                    cx="1.7"
                    cy="22.41"
                    r="0.31"
                    transform="translate(-20.78 22.35) rotate(-85.51)"
                  />
                  <circle
                    className="circle"
                    cx="0.71"
                    cy="30.28"
                    r="0.31"
                    transform="translate(-29.53 28.62) rotate(-85.51)"
                  />
                  <circle
                    className="circle"
                    cx="1.77"
                    cy="38.73"
                    r="0.31"
                    transform="translate(-36.98 37.46) rotate(-85.51)"
                  />
                  <circle
                    className="circle"
                    cx="5.93"
                    cy="47.77"
                    r="0.31"
                    transform="translate(-42.16 49.94) rotate(-85.52)"
                  />
                  <circle
                    className="circle"
                    cx="11.31"
                    cy="54.7"
                    r="0.31"
                    transform="translate(-44.11 61.69) rotate(-85.5)"
                  />
                  <circle
                    className="circle"
                    cx="18.85"
                    cy="59.14"
                    r="0.31"
                    transform="translate(-41.58 73.3) rotate(-85.51)"
                  />
                  <circle
                    className="circle"
                    cx="9.01"
                    cy="50.6"
                    r="0.51"
                    transform="translate(-22.41 9.92) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="16.34"
                    cy="55.44"
                    r="0.51"
                    transform="translate(-23.81 13.87) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="7.36"
                    cy="46.03"
                    r="0.51"
                    transform="translate(-20.48 8.64) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="17.49"
                    cy="52.64"
                    r="0.51"
                    transform="translate(-22.38 14.08) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="25.23"
                    cy="55.8"
                    r="0.51"
                    transform="translate(-22.97 18.03) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="32.38"
                    cy="56.17"
                    r="0.51"
                    transform="translate(-22.33 21.38) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="42.09"
                    cy="53.21"
                    r="0.51"
                    transform="translate(-19.85 25.53) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="48.87"
                    cy="49.09"
                    r="0.51"
                    transform="translate(-17.17 28.2) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="52.82"
                    cy="40.48"
                    r="0.51"
                    transform="translate(-12.74 29.05) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="54.89"
                    cy="31.11"
                    r="0.51"
                    transform="translate(-8.17 28.95) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="53.8"
                    cy="22.36"
                    r="0.51"
                    transform="translate(-4.24 27.45) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="49.97"
                    cy="16.15"
                    r="0.51"
                    transform="translate(-1.8 24.98) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="43.52"
                    cy="10.45"
                    r="0.51"
                    transform="translate(0.11 21.33) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="36.45"
                    cy="7.8"
                    r="0.51"
                    transform="translate(0.53 17.76) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="28.48"
                    cy="6.49"
                    r="0.51"
                    transform="translate(0.23 13.92) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="20.7"
                    cy="6.83"
                    r="0.51"
                    transform="translate(-0.81 10.36) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="15.08"
                    cy="10.35"
                    r="0.51"
                    transform="translate(-3.08 8.16) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="10.01"
                    cy="15.56"
                    r="0.51"
                    transform="translate(-6.07 6.4) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="6.97"
                    cy="20.84"
                    r="0.51"
                    transform="translate(-8.86 5.59) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="11.53"
                    cy="25.92"
                    r="0.51"
                    transform="translate(-10.69 8.28) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="11.02"
                    cy="33.52"
                    r="0.51"
                    transform="translate(-14.27 8.91) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="13.53"
                    cy="40.54"
                    r="0.51"
                    transform="translate(-17.23 10.87) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="17.6"
                    cy="46.11"
                    r="0.51"
                    transform="translate(-19.35 13.39) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="23.53"
                    cy="48.9"
                    r="0.51"
                    transform="translate(-19.96 16.45) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="30.29"
                    cy="49.31"
                    r="0.51"
                    transform="translate(-19.39 19.63) rotate(-27.59)"
                  />
                  <circle
                    className="circle"
                    cx="36.43"
                    cy="48.45"
                    r="0.51"
                    transform="translate(-18.29 22.37) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="42.53"
                    cy="45.85"
                    r="0.51"
                    transform="translate(-16.4 24.91) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="46.68"
                    cy="41.33"
                    r="0.51"
                    transform="translate(-13.83 26.31) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="48.94"
                    cy="34.8"
                    r="0.51"
                    transform="translate(-10.55 26.61) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="50.7"
                    cy="27.21"
                    r="0.51"
                    transform="translate(-6.84 26.56) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="46.89"
                    cy="21.83"
                    r="0.51"
                    transform="translate(-4.78 24.19) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="42.71"
                    cy="17.54"
                    r="0.51"
                    transform="translate(-3.27 21.76) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="37.33"
                    cy="13.68"
                    r="0.51"
                    transform="translate(-2.09 18.84) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="31.39"
                    cy="12.06"
                    r="0.51"
                    transform="translate(-2.02 15.9) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="25.12"
                    cy="12.52"
                    r="0.51"
                    transform="translate(-2.94 13.05) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="19.24"
                    cy="14.43"
                    r="0.51"
                    transform="translate(-4.49 10.55) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="14.56"
                    cy="19.19"
                    r="0.51"
                    transform="translate(-7.23 8.92) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="19.51"
                    cy="21.17"
                    r="0.51"
                    transform="translate(-7.58 11.44) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="16.02"
                    cy="30.91"
                    r="0.51"
                    transform="translate(-12.49 10.93) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="16.83"
                    cy="36.07"
                    r="0.51"
                    transform="translate(-14.79 11.89) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="19.34"
                    cy="39.78"
                    r="0.51"
                    transform="translate(-16.22 13.48) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="23.26"
                    cy="43.74"
                    r="0.51"
                    transform="translate(-17.61 15.74) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="28.83"
                    cy="44.72"
                    r="0.51"
                    transform="translate(-17.43 18.43) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="32.74"
                    cy="44.67"
                    r="0.51"
                    transform="translate(-16.96 20.23) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="37.11"
                    cy="42.39"
                    r="0.51"
                    transform="translate(-15.41 22) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="41.47"
                    cy="39.53"
                    r="0.51"
                    transform="translate(-13.59 23.69) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="43.53"
                    cy="35.31"
                    r="0.51"
                    transform="translate(-11.4 24.16) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="45.32"
                    cy="30.6"
                    r="0.51"
                    transform="translate(-9.02 24.46) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="44.39"
                    cy="26.09"
                    r="0.51"
                    transform="translate(-7.03 23.52) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="41.66"
                    cy="21.97"
                    r="0.51"
                    transform="translate(-5.44 21.79) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="37.34"
                    cy="18.61"
                    r="0.51"
                    transform="translate(-4.37 19.41) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="33.02"
                    cy="17.36"
                    r="0.51"
                    transform="translate(-4.29 17.26) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="23.41"
                    cy="18.55"
                    r="0.51"
                    transform="translate(-5.93 12.95) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="28.64"
                    cy="17.35"
                    r="0.51"
                    transform="translate(-4.78 15.23) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="17.2"
                    cy="25.36"
                    r="0.51"
                    transform="translate(-9.79 10.85) rotate(-27.59)"
                  />
                  <circle
                    className="circle"
                    cx="25.17"
                    cy="23.8"
                    r="0.51"
                    transform="translate(-8.16 14.36) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="32.23"
                    cy="22.44"
                    r="0.51"
                    transform="translate(-6.73 17.47) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="22.89"
                    cy="34.46"
                    r="0.51"
                    transform="translate(-13.36 14.52) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="21.68"
                    cy="29.1"
                    r="0.51"
                    transform="translate(-11.01 13.35) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="30.28"
                    cy="30.6"
                    r="0.51"
                    transform="translate(-10.73 17.5) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="27.74"
                    cy="38.04"
                    r="0.51"
                    transform="translate(-14.46 17.17) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="39.21"
                    cy="30.33"
                    r="0.51"
                    transform="translate(-9.59 21.6) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="36.98"
                    cy="24.99"
                    r="0.51"
                    transform="translate(-7.37 19.96) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="36.76"
                    cy="36.11"
                    r="0.51"
                    transform="translate(-12.54 21.12) rotate(-27.58)"
                  />
                  <circle
                    className="circle"
                    cx="31.78"
                    cy="38.71"
                    r="0.51"
                    transform="translate(-14.31 19.11) rotate(-27.58)"
                  />
                </g>
                <g className="polygon">
                  <polygon
                    className="line"
                    points="10.56 11.54 10.19 15.47 6.23 17.53 6.97 20.84 3.82 23.06 5.42 27.24 2.73 30.51 4.93 33.59 3.25 38.16 7.13 41.14 7.36 46.03 11.21 47.84 12.48 52.5 17.49 52.64 20.94 56.55 25.23 55.8 28.41 58.24 32.38 56.17 37.17 57.23 42.09 53.21 46.29 53.05 48.87 49.09 53.07 45.95 52.82 40.48 56.74 36.56 54.89 31.11 57.48 26.32 53.8 22.36 54.87 17.66 49.98 16.15 48.69 10.6 43.52 10.45 41.24 4.99 36.45 7.8 32.46 3.25 28.48 6.49 24.48 3.53 20.7 6.83 16.32 6.63 15.08 10.35 10.56 11.54"
                    style={{
                      fill: "none",
                      strokeMiterlimit: 10,
                      strokeWidth: "0.1px",
                    }}
                  />
                  <polygon
                    className="line"
                    points="22.89 34.46 19.34 39.77 27.56 38.13 30.28 30.6 31.78 38.71 37.11 42.39 36.76 36.11 43.35 35.4 39.21 30.33 44.39 26.09 36.98 24.99 37.34 18.61 32.47 22.31 28.64 17.35 25.17 23.8 19.51 21.17 21.59 28.93 15.92 30.8 22.89 34.46"
                    style={{
                      fill: "none",
                      strokeMiterlimit: 10,
                      strokeWidth: "0.1px",
                    }}
                  />
                  <polygon
                    className="line"
                    points="30.28 30.6 36.76 36.11 39.21 30.33 30.28 30.6"
                    style={{
                      fill: "none",
                      strokeMiterlimit: 10,
                      strokeWidth: "0.1px",
                    }}
                  />
                  <polygon
                    className="line"
                    points="2.73 30.51 3.25 38.16 7.36 46.03 12.48 52.5 20.94 56.55 28.41 58.24 37.17 57.23 46.29 53.05 53.07 45.95 56.74 36.56 57.48 26.32 54.87 17.66 48.69 10.6 41.35 5.2 32.46 3.25 24.48 3.53 16.32 6.63 10.56 11.54 6.23 17.53 3.82 23.06 2.73 30.51"
                    style={{
                      fill: "none",
                      strokeMiterlimit: 10,
                      strokeWidth: "0.1px",
                    }}
                  />
                  <polygon
                    className="line"
                    points="46.29 53.05 51.1 50.91 53.07 45.95 57.11 41.83 56.74 36.56 59.39 31.33 57.48 26.32 57.97 21.51 54.87 17.66 52.93 12.2 48.69 10.6 46.05 6.02 41.35 5.2 36.84 2.13 32.46 3.25 28.04 1.45 24.13 3.66 19.43 3.28 16.32 6.63 11.95 7.82 10.56 11.54 6.42 13.71 6.23 17.53 3.2 19.65 3.82 23.06 1.34 26.68 2.73 30.51 1.32 34.23 3.25 38.16 3.92 43.08 7.36 46.03 9.01 50.6 12.48 52.5 16.34 55.44 20.94 56.55 23.76 58.95 28.41 58.24 32.43 59.71 37.17 57.23 42.61 56.93 46.29 53.05"
                    style={{
                      fill: "none",
                      strokeMiterlimit: 10,
                      strokeWidth: "0.1px",
                    }}
                  />
                  <polygon
                    className="line"
                    points="23.76 58.95 27.33 60.92 32.43 59.71 37.76 59.49 42.61 56.93 47.84 54.89 51.1 50.91 55.33 47.32 57.11 41.83 59.28 37.1 59.39 31.33 59.62 25.78 57.97 21.51 56.7 16.66 52.93 12.2 49.95 8.25 46.05 6.02 42.58 3.11 36.84 2.13 32.37 1.08 28.04 1.45 24.01 1.52 19.43 3.28 15.38 4.82 11.95 7.82 8.66 10.12 6.42 13.71 4.24 16.59 3.2 19.65 1.7 22.41 1.34 26.68 0.71 30.28 1.32 34.23 1.77 38.73 3.92 43.08 5.93 47.77 9.01 50.6 11.31 54.7 16.34 55.44 18.85 59.14 23.76 58.95"
                    style={{
                      fill: "none",
                      strokeMiterlimit: 10,
                      strokeWidth: "0.1px",
                    }}
                  />
                </g>
                <g className="polyline">
                  <polyline
                    className="line"
                    points="7.37 41.6 11.21 47.84 17.6 46.12 7.13 41.14 13.53 40.54 4.93 33.59 11.02 33.52 5.42 27.24 11.53 25.92 7.42 20.6 14.56 19.19 15.08 10.35 19.24 14.43 20.7 6.83 25.12 12.52 28.48 6.49 31.39 12.06 36.45 7.8 37.33 13.68 43.52 10.45 42.7 17.54 49.98 16.15 46.89 21.83 53.8 22.36 50.7 27.21 54.89 31.11 48.94 34.8 52.82 40.48 46.68 41.33 48.87 49.09 42.53 45.85 42.55 52.97 36.43 48.45 32.15 55.71 30.29 49.31 25.23 55.8 23.53 48.9 17.49 52.64 17.6 46.12 19.34 39.77 13.53 40.54 16.83 36.07 11.02 33.52 16.02 30.91 11.53 25.92 17.2 25.36 14.56 19.19 19.39 20.94 19.24 14.43 23.41 18.55 25.12 12.52 28.64 17.35 31.39 12.06 33.02 17.36 37.21 13.45 37.34 18.61 42.7 17.54 41.66 21.97 46.89 21.83 44.65 25.95 50.7 27.21 45.32 30.6 48.94 34.8 43.53 35.3 46.68 41.33 41.47 39.53 42.53 45.85 37.11 42.39 36.43 48.45 32.74 44.67 30.29 49.31 28.83 44.73 23.53 48.9 23.26 43.74 17.81 46"
                    style={{
                      fill: "none",
                      strokeMiterlimit: 10,
                      strokeWidth: "0.1px",
                    }}
                  />
                  <polyline
                    className="line"
                    points="16.83 36.07 22.89 34.46 27.74 38.04 23.71 43.5 28.83 44.73 31.78 38.71 28.24 38.09"
                    style={{
                      fill: "none",
                      strokeMiterlimit: 10,
                      strokeWidth: "0.1px",
                    }}
                  />
                  <polyline
                    className="line"
                    points="36.98 24.99 30.26 30.39 32.23 22.44 25.17 23.8 30.05 30.14 21.68 29.11 22.89 34.46 29.83 30.84"
                    style={{
                      fill: "none",
                      strokeMiterlimit: 10,
                      strokeWidth: "0.1px",
                    }}
                  />
                  <polyline
                    className="line"
                    points="32.23 22.44 36.98 24.99 39.21 30.33"
                    style={{
                      fill: "none",
                      strokeMiterlimit: 10,
                      strokeWidth: "0.1px",
                    }}
                  />
                  <polyline
                    className="line"
                    points="23.26 43.74 19.34 39.77 16.83 36.07 16.02 30.91 16.74 25.59 19.51 21.17 23.41 18.55 28.88 17.81 33.02 17.36 37.34 18.61 41.66 21.97 44.39 26.09 45.32 30.6 43.53 35.3 41.47 39.53 37.11 42.39 32.74 44.67 28.83 44.73"
                    style={{
                      fill: "none",
                      strokeMiterlimit: 10,
                      strokeWidth: "0.1px",
                    }}
                  />
                  <polyline
                    className="line"
                    points="10.25 16.02 14.56 19.19 5.42 27.24"
                    style={{
                      fill: "none",
                      strokeMiterlimit: 10,
                      strokeWidth: "0.1px",
                    }}
                  />
                  <polyline
                    className="line"
                    points="17.6 46.12 23.53 48.9 30.29 49.31 36.43 48.45 42.53 45.85 46.68 41.33 48.94 34.8 50.7 27.21 46.89 21.83 42.7 17.54 37.33 13.68 31.39 12.06 25.12 12.52 19.24 14.43 14.56 19.19 11.66 25.63 11.53 25.92 11.02 33.52 13.53 40.54 11.21 47.84 17.49 52.64 25.23 55.8 32.38 56.17 42.09 53.21 48.87 49.09 52.82 40.48 54.89 31.11 53.8 22.36 49.98 16.15 43.52 10.45 36.45 7.8 28.48 6.49 20.7 6.83 15.08 10.35 10.01 15.56 6.97 20.84 5.42 27.24 4.93 33.59 7.13 41.14 17.96 52.83 30.29 49.31 42.6 52.9 52.67 40.65 52.82 40.48 50.7 27.21 49.98 16.15 37.33 13.68 28.48 6.49 19.24 14.43 10.01 15.56 11.18 25.89 5.22 33.44 18.9 39.54 23.29 48.45 32.15 55.71 42.31 46.3 52.31 40.55 43.53 35.3 30.28 30.6 37.11 42.39"
                    style={{
                      fill: "none",
                      strokeMiterlimit: 10,
                      strokeWidth: "0.1px",
                    }}
                  />
                </g>
                <g className="path">
                  <path
                    className="line"
                    d="M11.31,54.7s5,4.53,7.54,4.43c0,0,4.82,2.66,8.48,1.79,0,0,6.39,1.08,10.44-1.44,0,0,4.84.46,10.07-4.59,0,0,5.15-2.71,7.49-7.57,0,0,4.2-5.16,4-10.22,0,0,2.93-6.33.34-11.32,0,0,.3-5.32-2.92-9.12,0,0-2.51-7.23-6.75-8.41a9.66,9.66,0,0,0-7.37-5.14s-5.44-4.74-10.22-2c0,0-3.24-2.59-8.35.43,0,0-5.32-.9-8.63,3.3,0,0-5.71,1.36-6.72,5.3,0,0-4.1,2.16-4.42,6.47,0,0-2.7,1.64-2.54,5.83,0,0-2.92,2.75-1,7.87a8.83,8.83,0,0,0,1.06,8.45,11.7,11.7,0,0,0,4.16,9S7.61,53.18,11.31,54.7Z"
                    style={{
                      fill: "none",
                      strokeMiterlimit: 10,
                      strokeWidth: "0.1px",
                    }}
                  />
                </g>
                <g>
                  <line
                    className="line"
                    x1="25.17"
                    y1="23.8"
                    x2="21.59"
                    y2="28.93"
                    style={{
                      fill: "none",
                      strokeMiterlimit: 10,
                      strokeWidth: "0.1px",
                    }}
                  />
                  <line
                    className="line"
                    x1="36.76"
                    y1="36.11"
                    x2="31.78"
                    y2="38.71"
                    style={{
                      fill: "none",
                      strokeMiterlimit: 10,
                      strokeWidth: "0.1px",
                    }}
                  />
                  <line
                    className="line"
                    x1="30.28"
                    y1="30.6"
                    x2="28.88"
                    y2="17.81"
                    style={{
                      fill: "none",
                      strokeMiterlimit: 10,
                      strokeWidth: "0.1px",
                    }}
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <header className="header-main">
          <div className="header-main-top">
            <div className="user-link-wrap">
              <ul className="user-link-list">
                <li className="user-link-item animated fadeInRight">
                  <Link to="/Login" className="btn btn-transparent">
                    Login
                  </Link>
                </li>
                <li className="user-link-item animated fadeInRight register--item">
                  <Link to="/Registration" className="btn btn-gradient">
                    <span>Signup</span>
                  </Link>
                </li>
                {/* <li className="user-link-item animated fadeInRight">
                  <a href="images/coming.jpg" className="btn btn-transparent">
                    Login
                  </a>
                </li>
                <li className="user-link-item animated fadeInRight register--item">
                  <a href="images/coming.jpg" className="btn btn-gradient">
                    <span>Signup</span>
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="logo-wrap">
              <Link to="/" className="logo">
                 <img
                  src="/favicon.png"
                  className="img-fluid"
                  alt=""
                  width="162px"
                /> 
                {/* <h3>ASHU</h3> */}
                {/* <img src="images/logotop68b3.png?ver=1" class="img-fluid" /> */}
              </Link>
            </div>
          </div>
          <div className="header-aside">
            <ul className="lang-flag-list">
              {/* <li class="active">
               <a href="index6be1.html?language=default"><i class="flag-icon flag-icon-us" aria-hidden="true"></i></a>
               </li> */}
              <li></li>
            </ul>
            <div className="page-navigation-wrap">
              <div className="count-page-wrap">
                <div className="count-page">
                  <span className="num-page">1</span>
                  <span className="total-page">7</span>
                </div>
              </div>
              {/* /.count */}
              <ul className="page-navigation nav-page">
                <li
                  className="page-navigation__item"
                  data-menuanchor="screen-1"
                >
                  <a href="#screen-1" className="page-navigation__link" />
                </li>
                <li
                  className="page-navigation__item"
                  data-menuanchor="screen-2"
                >
                  <a href="#screen-2" className="page-navigation__link" />
                </li>
                <li
                  className="page-navigation__item"
                  data-menuanchor="screen-3"
                >
                  <a href="#screen-3" className="page-navigation__link" />
                </li>
                <li
                  className="page-navigation__item"
                  data-menuanchor="screen-4"
                >
                  <a href="#screen-4" className="page-navigation__link" />
                </li>
                <li
                  className="page-navigation__item"
                  data-menuanchor="screen-5"
                >
                  <a href="#screen-5" className="page-navigation__link" />
                </li>
                <li
                  className="page-navigation__item"
                  data-menuanchor="screen-6"
                >
                  <a href="#screen-6" className="page-navigation__link" />
                </li>
                <li
                  className="page-navigation__item"
                  data-menuanchor="screen-7"
                >
                  <a href="#screen-7" className="page-navigation__link" />
                </li>
              </ul>
            </div>
            {/* /.page-navigation-wrap */}
            <div className="scroll-down-label">
              <div className="scroll-down">
                <i className="arrow-icon" />
                Scroll
              </div>
            </div>
          </div>
          <nav className="main-menu-nav">
            <ul className="main-menu nav-page">
              <li
                className="main-menu__item animated fadeInUp active"
                data-menuanchor="screen-1"
              >
                <a href="#screen-1" className="main-menu__link">
                  <span className="main-menu__icon menu--icon1" />
                  <span className="main-menu__label">Home</span>
                </a>
              </li>
              <li
                className="main-menu__item animated fadeInUp"
                data-menuanchor="screen-2"
              >
                <a href="#screen-2" className="main-menu__link">
                  <span className="main-menu__icon menu--icon2" />
                  <span className="main-menu__label">About Us</span>
                </a>
              </li>
              <li
                className="main-menu__item animated fadeInUp"
                data-menuanchor="screen-3"
              >
                <a href="#screen-3" className="main-menu__link">
                  <span className="main-menu__icon menu--icon3" />
                  <span className="main-menu__label">Product Packages</span>
                </a>
              </li>
              <li
                className="main-menu__item animated fadeInUp"
                data-menuanchor="screen-4"
              >
                <a href="#screen-4" className="main-menu__link">
                  <span className="main-menu__icon menu--icon4" />
                  <span className="main-menu__label">Referral Program</span>
                </a>
              </li>
              {/* <li
                className="main-menu__item animated fadeInUp"
                data-menuanchor="screen-5"
              >
                <a href="#screen-5" className="main-menu__link">
                  <span className="main-menu__icon menu--icon5" />
                  <span className="main-menu__label">Faq</span>
                </a>
              </li> */}
              {/* <li
                className="main-menu__item animated fadeInUp"
                data-menuanchor="screen-6"
              >
                <a href="#screen-6" className="main-menu__link">
                  <span className="main-menu__icon menu--icon7" />
                  <span className="main-menu__label">Support</span>
                </a>
              </li> */}
            </ul>
          </nav>
        </header>
        <main id="fullpage" className="wrap-content fullpage-wrapper">
          <section className="section section-1" data-anchor="screen-1">
            <div className="section-bg-text">METASWIFT</div>
            <div className="container">
              <div className="section-content">
                <div className="offer-main">
                  <div className="title-main-wrap">
                    <h1 className="title-main">
                      <span> META SWIFT </span> COMMUNITY {" "}
                      <span className="color--green">Building</span>
                    </h1>
                    {/* <span className="vertical-text"> ONLY</span> */}
                  </div>
                  <div className="subtitle-main">
                    <div className="text-decor align--right">
                      <div className="el-text el-text-1" />
                      <div className="el-text el-text-2" />
                    </div>
                    {/* <p>
                      Register and become a part of a professional investors and
                      traders team. We use only profitable trading strategies.
                      We know how to invest properly and bring our clients from
                      1.8% a day!
                    </p> */}
                  </div>
                  <div className="section-button">
                    <a href="/Registration" className="btn btn-green">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="statistic-list-wrap">
              <div className="container">
                <ul className="statistic-list">
                  <li className="statistic-list-unit">
                    <div className="statistic-box1">
                      <a href="https://www.facebook.com/people/Metaswift-AI/pfbid0XcMvCz7GayqMSfzfVMy3bB72HnjhD7kjdkqj8bshiNDaAFpVmrs7DZsZurmTWe8Bl/" target="_blank">
                      <div className="text-center">
                        {/*  <i class="statistic-box__icon st1--icon"></i> */}
                        <i
                          className="fa fa-facebook statistic-box__icon"
                          aria-hidden="true"
                        />
                        <div className="statistic-box__title">
                       Facebook
                      </div>
                      </div>
                      </a>
                      
                    </div>
                  </li>
                  <li className="statistic-list-unit">
                  <div className="statistic-box1">
                    <a href="https://www.instagram.com/metaswift.ai/" target="_blank">
                      <div className="text-center">
                        {/*  <i class="statistic-box__icon st1--icon"></i> */}
                        <i
                          className="fa fa-instagram statistic-box__icon"
                          aria-hidden="true"
                        />
                        <div className="statistic-box__title">
                       Instagram
                      </div>
                      </div>
                      </a>
                      
                    </div>
                  </li>
                  <li className="statistic-list-unit">
                  <div className="statistic-box1">
                    <a href="https://t.me/metaswiftai" target="_blank">
                      <div className="text-center">
                        {/*  <i class="statistic-box__icon st1--icon"></i> */}
                        <i
                          className="fa fa-telegram statistic-box__icon"
                          aria-hidden="true"
                        />
                        <div className="statistic-box__title">
                       Telegram
                      </div>
                      </div>
                      </a>
                    </div>
                  </li>
                  <li className="statistic-list-unit">
                  <div className="statistic-box1">
                    <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FMetaswift_Ai" target="_blank">
                      <div className="text-center">
                        {/*  <i class="statistic-box__icon st1--icon"></i> */}
                        <i
                          className="fa fa-twitter statistic-box__icon"
                          aria-hidden="true"
                        />
                        <div className="statistic-box__title">
                       Twitter
                      </div>
                      </div>
                      </a>
                      
                    </div>
                  </li>
                  <li className="statistic-list-unit">
                  <div className="statistic-box1">
                    <a href="">
                      <div className="text-center">
                        {/*  <i class="statistic-box__icon st1--icon"></i> */}
                        <i
                          className="fa fa-youtube statistic-box__icon"
                          aria-hidden="true"
                        />
                        <div className="statistic-box__title">
                       Youtube
                      </div>
                      </div>
                      </a>
                      
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="section section-2" data-anchor="screen-2">
            <div className="container">
              <div className="section-content">
                <div className="section-title-wrap">
                  <div className="text-decor align--left left--light">
                    <div className="el-text el-text-2" />
                    <div className="el-text el-text-1" />
                  </div>
                  <h2 className="section-title">
                    ABOUT METASWIFT
                  </h2>
                </div>
                <div className="about-block">
                  <div className="section-subtitle">
                    Welcome to the Future of Community Building!
                  </div>
                  <article className="section-article">
                    <p>
                      We're thrilled to unveil MetaSwift.ai, a groundbreaking project that's here to revolutionize
                      the way we engage with the Metaverse and AI-related products and services. Our mission
                      is simple: to foster a thriving global community that not only embraces the cutting-edge
                      technology of the Metaverse and AI but also empowers its members to generate swift
                      income through the exciting world of Affiliate Marketing.
                    </p>
                    <p>
                      Join us on this remarkable journey as we bridge the gap between the Metaverse, AI
                      innovation, and Financial opportunities. MetaSwift.ai is your gateway to a world where
                      possibilities are limitless. Stay tuned for exciting updates and a chance to be a part of
                      something extraordinary!
                    </p>
                    {/* <p>
                      Swift Capital company is the international trading company
                      which does its business on the largest currency and
                      cryptocurrency stock exchanges. We play a role of a
                      mediator between an investor and world financial and
                      monetary market. The investment is carried out due to our
                      in-depth developed investment plans. Our experts
                      constantly study the financial environment, develop new
                      investment strategies.
                    </p> */}
                  </article>
                  {/* <div className="section-button">
                    <a href="indexcca3.html?a=signup" className="btn btn-green">
                      Get Started
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </section>
          <section className="section section-3" data-anchor="screen-3">
            <div className="container">
           
              <div className="section-content">
              <div className="section-title-wrap">
                      <div className="text-decor align--left left--light">
                        <div className="el-text el-text-2" />
                        <div className="el-text el-text-1" />
                      </div>
                      <h2 className="section-title">Product Packages</h2>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                      <div className="plans-list-item1">
                        <div className="plan-card">
                          <div className="el-card-top">
                            <span />
                          </div>
                          <div className="square square-top" />
                          <div className="square square-bottom" />
                          <div className="plan-card-top">
                             <div className="progress-plan-percent">
                              <div
                                className="progress-percent-around"
                                data-value="0.2"
                                data-fill='{"color": "#10BA92"}'
                              />
                              <div className="plan-percent">
                                <span
                                  className="plan-percent__value"
                                  data-count={25}
                                >
                                  0
                                </span>
                                <span className="plan-percent__symbol">$</span>
                              </div>
                              {/* <div className="plan-term">
                                for
                                <br /> 1 hour
                              </div> */}
                            </div>
                            <div className="text-left">
                            <p><i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Rapid Fund</p>
                            <p><i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Single Leg Upline Income</p>
                            <p><i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Direct Referral Income</p>
                            <p><i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Lifetime Booster Income</p>
                            <p>
                            <i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Matrix Income
                            </p>
                            <p>
                            <i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Product Voucher $25
                            </p>
                            <p>
                            <i className="fa fa-arrow-alt-circle-right"></i> &nbsp;In-Game Rewards 
                            </p>
                            </div>
                          </div>
                          {/* <div className="plan-card-body">
                            <div className="plan-description">
                              <div className="plan-description-item">
                                <div className="subplan-range">
                                  <div className="subplan-range__value">
                                    $200 - $5000
                                  </div>
                                  <div className="subplan-range__title">
                                    Min-max
                                    <br />
                                    <br />
                                    Deposit included in profit
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> */}
                          {/* <div className="plan-card-bottom">
                            <a
                              href="index2017.html?a=deposit"
                              className="btn-invest"
                            >
                              <span className="el-circle-top" />
                              <span className="el-btn-invest el--left">
                                <span />
                              </span>
                              <span className="el-btn-invest el--right">
                                <span />
                              </span>
                              Invest
                            </a>
                          </div> */}
                        </div>
                      </div>
                      </div>
                      <div className="col-md-4">
                      <div className="plans-list-item1">
                        <div className="plan-card">
                          <div className="el-card-top">
                            <span />
                          </div>
                          <div className="square square-top" />
                          <div className="square square-bottom" />
                          <div className="plan-card-top">
                             <div className="progress-plan-percent">
                              <div
                                className="progress-percent-around"
                                data-value="0.2"
                                data-fill='{"color": "#10BA92"}'
                              />
                              <div className="plan-percent">
                                <span
                                  className="plan-percent__value"
                                  data-count={50}
                                >
                                  0
                                </span>
                                <span className="plan-percent__symbol">$</span>
                              </div>
                              {/* <div className="plan-term">
                                for
                                <br /> 1 hour
                              </div> */}
                            </div>
                            <div className="text-left">
                            <p><i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Rapid Fund</p>
                            <p><i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Single Leg Upline Income</p>
                            <p><i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Direct Referral Income</p>
                            <p><i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Lifetime Booster Income </p>
                            <p>
                            <i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Matrix Income
                            </p>
                            <p>
                            <i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Product Voucher $50
                            </p>
                            <p>
                            <i className="fa fa-arrow-alt-circle-right"></i> &nbsp;In-Game Rewards
                            </p>
                            
                            </div>
                          </div>
                          {/* <div className="plan-card-body">
                            <div className="plan-description">
                              <div className="plan-description-item">
                                <div className="subplan-range">
                                  <div className="subplan-range__value">
                                    $5001 - $9999
                                  </div>
                                  <div className="subplan-range__title">
                                    Min-max
                                    <br />
                                    <br />
                                    Deposit included in profit
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> */}
                          {/* <div className="plan-card-bottom">
                            <a
                              href="index2017.html?a=deposit"
                              className="btn-invest"
                            >
                              <span className="el-circle-top" />
                              <span className="el-btn-invest el--left">
                                <span />
                              </span>
                              <span className="el-btn-invest el--right">
                                <span />
                              </span>
                              Invest
                            </a>
                          </div> */}
                        </div>
                      </div>
                      </div>
                      <div className="col-md-4">
                      <div className="plans-list-item1">
                        <div className="plan-card">
                          <div className="el-card-top">
                            <span />
                          </div>
                          <div className="square square-top" />
                          <div className="square square-bottom" />
                          <div className="plan-card-top">
                             <div className="progress-plan-percent">
                              <div
                                className="progress-percent-around"
                                data-value="0.2"
                                data-fill='{"color": "#10BA92"}'
                              />
                              <div className="plan-percent">
                                <span
                                  className="plan-percent__value"
                                  data-count={100}
                                >
                                  0
                                </span>
                                <span className="plan-percent__symbol">$</span>
                              </div>
                              {/* <div className="plan-term">
                                for
                                <br /> 1 hour
                              </div> */}
                            </div>
                            <div className="text-left">
                            <p><i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Rapid Fund</p>
                            <p><i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Single Leg Upline Income</p>
                            <p><i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Direct Referral Income</p>
                            <p><i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Lifetime Booster Income</p>
                            <p>
                            <i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Matrix Income
                            </p>
                            <p>
                            <i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Product Voucher $100
                            </p>
                            <p>
                            <i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Infinity Bonus
                            </p>
                            <p>
                            <i className="fa fa-arrow-alt-circle-right"></i> &nbsp;In-Game Rewards
                            </p>
                            </div>
                          </div>
                          {/* <div className="plan-card-body">
                            <div className="plan-description">
                              <div className="plan-description-item">
                                <div className="subplan-range">
                                  <div className="subplan-range__value">
                                    $5001 - $9999
                                  </div>
                                  <div className="subplan-range__title">
                                    Min-max
                                    <br />
                                    <br />
                                    Deposit included in profit
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> */}
                          {/* <div className="plan-card-bottom">
                            <a
                              href="index2017.html?a=deposit"
                              className="btn-invest"
                            >
                              <span className="el-circle-top" />
                              <span className="el-btn-invest el--left">
                                <span />
                              </span>
                              <span className="el-btn-invest el--right">
                                <span />
                              </span>
                              Invest
                            </a>
                          </div> */}
                        </div>
                      </div>
                      </div>

                      <div className="col-md-4">
                          <div className="plans-list-item">
                            <div className="plan-card">
                              <div className="el-card-top">
                                <span />
                              </div>
                              <div className="square square-top" />
                              <div className="square square-bottom" />
                              <div className="plan-card-top">
                                <div className="progress-plan-percent">
                                  <div
                                    className="progress-percent-around"
                                    data-value="0.2"
                                    data-fill='{"color": "#10BA92"}'
                                  />
                                  <div className="plan-percent">
                                    <span
                                      className="plan-percent__value"
                                      data-count={250}
                                    >
                                      0
                                    </span>
                                    <span className="plan-percent__symbol">$</span>
                                  </div>
                                  {/* <div className="plan-term">
                                    for
                                    <br /> 1 hour
                                  </div> */}
                                </div>
                                <div className="text-left">
                                <p><i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Rapid Fund</p>
                                <p><i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Single Leg Upline Income</p>
                                <p><i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Direct Referral Income</p>
                                <p><i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Lifetime Booster Income</p>
                                <p><i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Matrix Income</p>
                                <p>
                                <i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Product Voucher $250
                                </p>
                                <p>
                                <i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Infinity Bonus

                                </p>
                                <p>
                                <i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Weekly Salary

                                </p>
                                <p>
                                <i className="fa fa-arrow-alt-circle-right"></i> &nbsp;In-Game Rewards

                                </p>
                                </div>
                              </div>
                            
                            </div>
                          </div>
                      </div>

                      <div className="col-md-4">
                          <div className="plans-list-item">
                            <div className="plan-card">
                              <div className="el-card-top">
                                <span />
                              </div>
                              <div className="square square-top" />
                              <div className="square square-bottom" />
                              <div className="plan-card-top">
                                <div className="progress-plan-percent">
                                  <div
                                    className="progress-percent-around"
                                    data-value="0.2"
                                    data-fill='{"color": "#10BA92"}'
                                  />
                                  <div className="plan-percent">
                                    <span
                                      className="plan-percent__value"
                                      data-count={500}
                                    >
                                      0
                                    </span>
                                    <span className="plan-percent__symbol">$</span>
                                  </div>
                                  {/* <div className="plan-term">
                                    for
                                    <br /> 1 hour
                                  </div> */}
                                </div>
                                <div className="text-left">
                                <p><i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Rapid Fund</p>
                                <p><i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Single Leg Upline Income</p>
                                <p><i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Direct Referral Income</p>
                                <p><i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Lifetime Booster Income</p>
                                <p><i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Matrix Income</p>
                                <p>
                                <i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Product Voucher $500
                                </p>
                                <p>
                                <i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Infinity Bonus

                                </p>
                                <p>
                                <i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Weekly Salary

                                </p>
                                <p>
                                <i className="fa fa-arrow-alt-circle-right"></i> &nbsp;M6 Global Turnover

                                </p>
                                <p>
                                <i className="fa fa-arrow-alt-circle-right"></i> &nbsp;In-Game Rewards

                                </p>
                                </div>
                              </div>
                            
                            </div>
                          </div>
                      </div>
                     
                      <div className="col-md-4">
                          <div className="plans-list-item">
                            <div className="plan-card">
                              <div className="el-card-top">
                                <span />
                              </div>
                              <div className="square square-top" />
                              <div className="square square-bottom" />
                              <div className="plan-card-top">
                                <div className="progress-plan-percent">
                                  <div
                                    className="progress-percent-around"
                                    data-value="0.2"
                                    data-fill='{"color": "#10BA92"}'
                                  />
                                  <div className="plan-percent">
                                    <span
                                      className="plan-percent__value"
                                      data-count={1000}
                                    >
                                      0
                                    </span>
                                    <span className="plan-percent__symbol">$</span>
                                  </div>
                                  {/* <div className="plan-term">
                                    for
                                    <br /> 1 hour
                                  </div> */}
                                </div>
                                <div className="text-left">
                                <p><i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Rapid Fund</p>
                                <p><i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Single Leg Upline Income</p>
                                <p><i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Direct Referral Income</p>
                                <p><i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Lifetime Booster Income</p>
                                <p><i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Matrix Income</p>
                                <p>
                                <i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Product Voucher $1000
                                </p>
                                <p>
                                <i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Infinity Bonus

                                </p>
                                <p>
                                <i className="fa fa-arrow-alt-circle-right"></i> &nbsp;Weekly Salary

                                </p>
                                <p>
                                <i className="fa fa-arrow-alt-circle-right"></i> &nbsp;M12 Global Turnover

                                </p>
                                <p>
                                <i className="fa fa-arrow-alt-circle-right"></i> &nbsp;In-Game Rewards

                                </p>
                                </div>
                              </div>
                            
                            </div>
                          </div>
                      </div>

                    </div>
                
              </div>
            </div>
          </section>
          <section className="section section-4" data-anchor="screen-4">
            <div className="container">
              <div className="section-content">
                <div className="section-title-wrap">
                  <div className="text-decor align--left left--light">
                    <div className="el-text el-text-2" />
                    <div className="el-text el-text-1" />
                  </div>
                  <h2 className="section-title">FREE REFERRAL BONUS</h2>
                </div>
                <article className="section-article">
                  <h5 className="fonth7">
                  10% OF YOUR PACKAGE ON EVERY FREE REFERRAL
                  </h5>
                  <h6 className="fonth6">Whenever anybody is signing up on your reference even free of cost, 
                   You will get 10% of your package value as a Rapid Fund</h6>
                </article>
                <div className="row">
                  <div className="col-md-1"></div>
                  <div className="col-md-10">
                  <div className="">
                  <h5>
                    Eg:-
                  </h5>
                  <div className="text-center">
                  <img className="profiles" src="Assetshome/img/profile.png"/>
                    <h5>$1000 (YOU)</h5>
                  </div>
                  <br></br>
                  <div className="profileflex">
                    <div className="text-center leftpa">
                      <h6>FREE</h6>
                      <img className="profiles" src="Assetshome/img/profile.png"/>
                    </div>
                    <div className="text-center leftpa">
                      <h6>FREE</h6>
                      <img className="profiles" src="Assetshome/img/profile.png"/>
                    </div>
                    <div className="text-center leftpa">
                      <h6>FREE</h6>
                      <img className="profiles" src="Assetshome/img/profile.png"/>
                    </div>
                    <div className="text-center leftpa">
                      <h6>FREE</h6>
                      <img className="profiles" src="Assetshome/img/profile.png"/>
                    </div>
                    <div className="text-center leftpa">
                      <h6>FREE</h6>
                      <img className="profiles" src="Assetshome/img/profile.png"/>
                    </div>
                    <div className="text-center leftpa">
                      <h6>FREE</h6>
                      <img className="profiles" src="Assetshome/img/profile.png"/>
                    </div>
                    <div className="text-center leftpa">
                      <h6>FREE</h6>
                      <img className="profiles" src="Assetshome/img/profile.png"/>
                    </div>
                    <div className="text-center leftpa">
                      <h6>FREE</h6>
                      <img className="profiles" src="Assetshome/img/profile.png"/>
                    </div>
                    <div className="text-center leftpa">
                      <h6>FREE</h6>
                      <img className="profiles" src="Assetshome/img/profile.png"/>
                    </div>
                  </div>

                </div>

                  </div>
                </div>
                <br></br>
                <h5 className="fonth7 text-center">
                You referred 9 people to sign up free & for all FREE Sign Ups, You get $10 (If your package is 100)
                <br></br>
                <span><b>$100 X 9 = $900 RAPID FUND</b></span>

                  </h5>
               
                {/* <div className="referrals-block">
                  <div className="row">
                    <div className="col-lg-7 order-lg-2">
                      <div className="ref-level-composition">
                        <ul className="percent-ref-list">
                          <li>
                            <span>6%</span>
                          </li>
                          <li>
                            <span>2%</span>
                          </li>
                          <li>
                            <span>1%</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <ul className="levels-list">
                        <li className="levels-list-item">
                          <div className="levels-list-item__title">
                            <i className="levels-list-item__circle level-1" />
                            Level 1
                          </div>
                          <div className="levels-list-item__value">6%</div>
                        </li>
                        <li className="levels-list-item">
                          <div className="levels-list-item__title">
                            <i className="levels-list-item__circle level-2" />
                            Level 2
                          </div>
                          <div className="levels-list-item__value">2%</div>
                        </li>
                        <li className="levels-list-item">
                          <div className="levels-list-item__title">
                            <i className="levels-list-item__circle level-3" />
                            Level 3
                          </div>
                          <div className="levels-list-item__value">1%</div>
                        </li>
                      </ul>
                      <div className="section-button">
                        <a
                          href="indexcca3.html?a=signup"
                          className="btn btn-green"
                        >
                          Get Started
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </section>
          {/* <section className="section section-5" data-anchor="screen-5">
            <div className="container">
              <div className="section-content">
                <div className="section-title-wrap">
                  <div className="text-decor align--left left--light">
                    <div className="el-text el-text-2" />
                    <div className="el-text el-text-1" />
                  </div>
                  <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
                </div>
                <div className="tabs faq-tabs">
                  <ul className="tabs__caption faq-tabs-nav">
                    <li className="active tabs-nav-item">GENERAL QUESTIONS</li>
                    <li className="tabs-nav-item">INVESTMENT QUESTIONS</li>
                    <li className="tabs-nav-item">WITHDRAW QUESTIONS</li>
                    <li className="tabs-nav-item">REFERRAL PROGRAM</li>
                  </ul>
                  <div className="tabs__content faq-tabs-content active">
                    <div className="el-top-right" />
                    <span className="el-top-1" />
                    <span className="el-top-2" />
                    <ul className="accordion accordion-faq">
                      <li>
                        <div className="square square-top" />
                        <div className="square square-bottom" />
                        <div className="accordion-title">
                          <span className="accordion-title-arrow" />
                          <h4>
                            What is the main Meta Swift company’s activity?
                          </h4>
                        </div>
                        <div className="question-block">
                          <p>
                            We do traditional and cryptocurrency trading at the
                            world largest monetary market Forex. Our clients
                            invest in developed investment plans and a team of
                            professional traders, in turn, provides maximal
                            profits.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="square square-top" />
                        <div className="square square-bottom" />
                        <div className="accordion-title">
                          <span className="accordion-title-arrow" />
                          <h4>How to start investing?</h4>
                        </div>
                        <div className="question-block">
                          <p>
                            Complete the quick registration on the website, make
                            the first deposit and invest in one of suggested
                            investment plan. Our investor may become everyone
                            regardless of location or nationality.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="square square-top" />
                        <div className="square square-bottom" />
                        <div className="accordion-title">
                          <span className="accordion-title-arrow" />
                          <h4>What payment systems are available?</h4>
                        </div>
                        <div className="question-block">
                          <p>
                            On the site are available: Perfect Money, Payeer,
                            Bitcoin, BitcoinCash, Litecoin, Ethereum.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="square square-top" />
                        <div className="square square-bottom" />
                        <div className="accordion-title">
                          <span className="accordion-title-arrow" />
                          <h4>For what was this site developed?</h4>
                        </div>
                        <div className="question-block">
                          <p>
                            We developed this site in order to absolutely
                            everyone could have an opportunity to become
                            investors and start earning on a financial and
                            monetary market. The platform allows investing from
                            any place in the world. Also, the site is the
                            initial and final stages of invested cash flows.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="square square-top" />
                        <div className="square square-bottom" />
                        <div className="accordion-title">
                          <span className="accordion-title-arrow" />
                          <h4>How many accounts can I have?</h4>
                        </div>
                        <div className="question-block">
                          <p>
                            A user can have only one account. Administration of
                            the site has a right to block any additional account
                            with all the money on a balance.
                          </p>
                        </div>
                      </li>
                    </ul>
                    <span className="el-bottom" />
                  </div>
                  <div className="tabs__content faq-tabs-content">
                    <div className="el-top-right" />
                    <span className="el-top-1" />
                    <span className="el-top-2" />
                    <ul className="accordion accordion-faq">
                      <li>
                        <div className="square square-top" />
                        <div className="square square-bottom" />
                        <div className="accordion-title">
                          <span className="accordion-title-arrow" />
                          <h4>What is the deposit amount?</h4>
                        </div>
                        <div className="question-block">
                          <p>
                            You can deposit absolutely any amount of money but
                            not less than 20 USD.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="square square-top" />
                        <div className="square square-bottom" />
                        <div className="accordion-title">
                          <span className="accordion-title-arrow" />
                          <h4>How many investment plans can I use?</h4>
                        </div>
                        <div className="question-block">
                          <p>
                            There are developed 3 investment plans on the site.
                            Each of them has different payback periods and
                            terms. You can invest in several investment plans at
                            a time.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="square square-top" />
                        <div className="square square-bottom" />
                        <div className="accordion-title">
                          <span className="accordion-title-arrow" />
                          <h4>Can I reinvest my income?</h4>
                        </div>
                        <div className="question-block">
                          <p>
                            Instant withdraw after the investment plan is
                            finished is not required. You can reinvest your
                            income in other investment plans straight away.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="square square-top" />
                        <div className="square square-bottom" />
                        <div className="accordion-title">
                          <span className="accordion-title-arrow" />
                          <h4>Can I invest without a deposit?</h4>
                        </div>
                        <div className="question-block">
                          <p>
                            Depositing is not required. Form your investment
                            capital due to participating in a referral program
                            and invest this funds in investment plans.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="square square-top" />
                        <div className="square square-bottom" />
                        <div className="accordion-title">
                          <span className="accordion-title-arrow" />
                          <h4>If there a risk of money loss?</h4>
                        </div>
                        <div className="question-block">
                          <p>
                            The risk always is, as in any other business sphere.
                            Our specialists constantly analyze currency rate
                            changes in order to provide the maximal profits and
                            minimize the risks.
                          </p>
                        </div>
                      </li>
                    </ul>
                    <span className="el-bottom" />
                  </div>
                  <div className="tabs__content faq-tabs-content">
                    <div className="el-top-right" />
                    <span className="el-top-1" />
                    <span className="el-top-2" />
                    <ul className="accordion accordion-faq">
                      <li>
                        <div className="square square-top" />
                        <div className="square square-bottom" />
                        <div className="accordion-title">
                          <span className="accordion-title-arrow" />
                          <h4>What is minimal withdraw amount?</h4>
                        </div>
                        <div className="question-block">
                          <p>The minimal amount for withdrawing is 1USD</p>
                        </div>
                      </li>
                      <li>
                        <div className="square square-top" />
                        <div className="square square-bottom" />
                        <div className="accordion-title">
                          <span className="accordion-title-arrow" />
                          <h4>What payment type is on the site?</h4>
                        </div>
                        <div className="question-block">
                          <p>On the site is the manual payment type.</p>
                        </div>
                      </li>
                      <li>
                        <div className="square square-top" />
                        <div className="square square-bottom" />
                        <div className="accordion-title">
                          <span className="accordion-title-arrow" />
                          <h4>
                            In how much time money will reach my e-wallet?
                          </h4>
                        </div>
                        <div className="question-block">
                          <p>
                            The money will be transferred to your payment system
                            within 48 hours from the moment the transaction was
                            confirmed.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="square square-top" />
                        <div className="square square-bottom" />
                        <div className="accordion-title">
                          <span className="accordion-title-arrow" />
                          <h4>Is income withdrawing necessary?</h4>
                        </div>
                        <div className="question-block">
                          <p>
                            No, you can reinvest your income after the current
                            investment period is finished.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="square square-top" />
                        <div className="square square-bottom" />
                        <div className="accordion-title">
                          <span className="accordion-title-arrow" />
                          <h4>In what currency can I withdraw funds?</h4>
                        </div>
                        <div className="question-block">
                          <p>In the same which was deposited.</p>
                        </div>
                      </li>
                    </ul>
                    <span className="el-bottom" />
                  </div>
                  <div className="tabs__content faq-tabs-content">
                    <div className="el-top-right" />
                    <span className="el-top-1" />
                    <span className="el-top-2" />
                    <ul className="accordion accordion-faq">
                      <li>
                        <div className="square square-top" />
                        <div className="square square-bottom" />
                        <div className="accordion-title">
                          <span className="accordion-title-arrow" />
                          <h4>Do you have a referral program?</h4>
                        </div>
                        <div className="question-block">
                          <p>
                            Yes, we developed a three-level referral program. It
                            gives opportunities to get a passive income by means
                            of leading new clients. You get 6%,2% and 1% of each
                            new client’s deposit amount.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="square square-top" />
                        <div className="square square-bottom" />
                        <div className="accordion-title">
                          <span className="accordion-title-arrow" />
                          <h4>Who can participate in the referral program?</h4>
                        </div>
                        <div className="question-block">
                          <p>
                            Participation is accepted for every registered user.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="square square-top" />
                        <div className="square square-bottom" />
                        <div className="accordion-title">
                          <span className="accordion-title-arrow" />
                          <h4>How many referral links can I have?</h4>
                        </div>
                        <div className="question-block">
                          <p>
                            Every user gets only one referral link. Changing it
                            or having several ones is not allowed.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="square square-top" />
                        <div className="square square-bottom" />
                        <div className="accordion-title">
                          <span className="accordion-title-arrow" />
                          <h4>Can I withdraw my referral income?</h4>
                        </div>
                        <div className="question-block">
                          <p>
                            Yes, you can regularly withdraw your referral income
                            or form investment capital from them.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="square square-top" />
                        <div className="square square-bottom" />
                        <div className="accordion-title">
                          <span className="accordion-title-arrow" />
                          <h4>When will I get the profits?</h4>
                        </div>
                        <div className="question-block">
                          <p>
                            As soon as the invited user makes the initial
                            deposit, a part of this amount will be transferred
                            to your account.
                          </p>
                        </div>
                      </li>
                    </ul>
                    <span className="el-bottom" />
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* <section className="section section-7" data-anchor="screen-6">
            <div className="container">
              <div className="section-content">
                <div className="section-title-wrap">
                  <div className="text-decor align--left left--light">
                    <div className="el-text el-text-2" />
                    <div className="el-text el-text-1" />
                  </div>
                  <h2 className="section-title">Support</h2>
                </div>
                <div className="support-content">
                  <div className="row">
                    <div className="col-lg-7 order-lg-2">
                      <li className="contacts-support-item">
                        <div className="contacts-support-item__inner">
                          <i className="contacts-support-item__icon email--icon" />
                          <div className="contacts-support-item__title">
                            <span>E-mail</span>
                          </div>
                          <div className="contacts-support-item__value">
                            <a href="cdn-cgi/l/email-protection.html#cdbeb8bdbda2bfb98da6a2bdaea8b9ace3aea2a0">
                              <span
                                className="__cf_email__"
                                data-cfemail="83f0f6f3f3ecf1f7c3e8ecf3e0e6f7e2ade0ecee"
                              >
                                [email&nbsp;protected]
                              </span>
                            </a>
                          </div>
                        </div>
                      </li>
                      <div className="payment-logo-list">
                        <ul>
                          <li>
                            <img
                              src="assets/img/pay/pm-logo.png"
                              className="img-fluid"
                              alt=""
                            />
                          </li>
                          <li>
                            <img
                              src="assets/img/pay/bitcoin-logo.png"
                              className="img-fluid"
                              alt=""
                            />
                          </li>
                          <li>
                            <img
                              src="assets/img/pay/bitcoin-cash-logo.png"
                              className="img-fluid"
                              alt=""
                            />
                          </li>
                          <li>
                            <img
                              src="assets/img/pay/litecoin-logo.png"
                              className="img-fluid"
                              alt=""
                            />
                          </li>
                          <li>
                            <img
                              src="assets/img/pay/eth-logo.png"
                              className="img-fluid"
                              alt=""
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <form
                        name="mainform"
                        onsubmit="return checkform()"
                        className="form-contacts"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="form_id"
                          defaultValue={16650718292466}
                        />
                        <input
                          type="hidden"
                          name="form_token"
                          defaultValue="ae0b261e312c4e567f6a862c687b8a9b"
                        />
                        <input type="hidden" name="a" defaultValue="support" />
                        <input
                          type="hidden"
                          name="action"
                          defaultValue="send"
                        />
                        <label className="form-contacts__label label-form">
                          <input
                            type="text"
                            className="form-contacts__input input-form js-focus"
                            name="name"
                            defaultValue=""
                            placeholder="Your name"
                          />
                        </label>
                        <label className="form-contacts__label label-form">
                          <input
                            type="email"
                            className="form-contacts__input input-form js-focus"
                            placeholder="E-mail"
                            name="email"
                            defaultValue=""
                          />
                        </label>
                        <div className="form-contacts__label label-form">
                          <textarea
                            className="form-contacts__textarea input-form js-focus"
                            name="message"
                            placeholder="Message"
                            defaultValue={""}
                          />
                        </div>
                        <div className="form-contacts__button">
                          <button type="submit" className="btn btn-green">
                            Send
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
        </main>
      </div>
    </>
  );
}
