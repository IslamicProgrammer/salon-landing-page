import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
// images
import sign from "../../assets/testimonials/sign.png";
import person from "../../assets/testimonials/person.png";
import shapeLeft from "../../assets/testimonials/left-shape.png";
import shapeRight from "../../assets/testimonials/right-shape.png";

const Carusel = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  return (
    <>
      <div className="carusel">
        <img className="shape-left" src={shapeLeft} alt="shape" />
        <img className="shape-right" src={shapeRight} alt="shape" />
        <h1 className="title">Testimonials</h1>
        <div className="navigation-wrapper wrapper">
          <div ref={sliderRef} className="keen-slider">
            <div className="slide keen-slider__slide number-slide1">
              <div className="signs">
                <img src={sign} alt="sign" />
                <img src={sign} alt="sign" />
              </div>
              <p>
                Your salon is meticulous and outstanding in the service that it
                provides. I always leave happy and refreshed after a manicure.
                The salon is absolutely clean and sanitary and your team is
                always ready to help me make a decision about nail art.
              </p>
              <div className="desc">
                <img src={person} alt="person" />
                <h4>Amanda Smith</h4>
                <h5>Client</h5>
              </div>
            </div>
            <div className="slide keen-slider__slide number-slide1">
              <div className="signs">
                <img src={sign} alt="sign" />
                <img src={sign} alt="sign" />
              </div>
              <p>
                Your salon is meticulous and outstanding in the service that it
                provides. I always leave happy and refreshed after a manicure.
                The salon is absolutely clean and sanitary and your team is
                always ready to help me make a decision about nail art.
              </p>
              <div className="desc">
                <img src={person} alt="person" />
                <h4>Amanda Smith</h4>
                <h5>Client</h5>
              </div>
            </div>
            <div className="slide keen-slider__slide number-slide1">
              <div className="signs">
                <img src={sign} alt="sign" />
                <img src={sign} alt="sign" />
              </div>
              <p>
                Your salon is meticulous and outstanding in the service that it
                provides. I always leave happy and refreshed after a manicure.
                The salon is absolutely clean and sanitary and your team is
                always ready to help me make a decision about nail art.
              </p>
              <div className="desc">
                <img src={person} alt="person" />
                <h4>Amanda Smith</h4>
                <h5>Client</h5>
              </div>
            </div>
          </div>
          {slider && (
            <>
              <ArrowLeft
                onClick={(e) => e.stopPropagation() || slider.prev()}
                disabled={currentSlide === 0}
                className="arrow"
              />
              <ArrowRight
                onClick={(e) => e.stopPropagation() || slider.next()}
                disabled={currentSlide === slider.details().size - 1}
                className="arrow"
              />
            </>
          )}
        </div>
      </div>
      {slider && (
        <div className="dots">
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

function ArrowLeft(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--left" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  );
}

function ArrowRight(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--right" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  );
}

export default Carusel;
