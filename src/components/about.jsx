import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        {
                          "I am a systems engineer and I am passionate about mobile development. I have 4 years of experience in mobile development and most recently, I have been working with technologies like React and React Native. As a hobby, I have also been working with Dart for 1 year."
                        }
                      </p>
                      <p>
                        {
                          "I thoroughly enjoy working with React because it is a framework that builds robust interfaces in just a couple of steps. React is also supported by Facebook, so it has wide application to a large online community. Additionally, React is now recognized to be as important and versatile as Javascript."
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">
                  Here is some of my expertise
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-3 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Mobile development</h3>
                    <p>
                      I have experience building app mobiles in iOS and Android
                      using React Native or Flutter
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-device-desktop" />
                  </span>
                  <div className="desc">
                    <h3>Web Development </h3>
                    <p>
                      I have experience building websites using
                      JavaScript,ReactJS,HTML,CSS or Dart with Flutter
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-pen2" />
                  </span>
                  <div className="desc">
                    <h3>Dev chatbots</h3>
                    <p>
                      I possess experience in constructing chatbots for
                      platforms like Telegram or WhatsApp, utilizing Node.js.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-3 text-center animate-box">
                <div className="services color-2">
                  <span className="icon">
                    <i className="icon-watch" />
                  </span>
                  <div className="desc">
                    <h3>Watch developer</h3>
                    <p>
                      I have cultivated expertise as an autodidact in developing
                      user interfaces for the Apple Watch.
                    </p>
                  </div>
                </div>
              </div>
              {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
