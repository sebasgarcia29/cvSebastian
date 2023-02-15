import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2> Team Lead React Native, Onetree <span> stared: 2021/12/01 - Current</span></h2>
                        <p>
                          {'Perform the functions of a mobile application developer, for the development of processes and procedures involved in writing software for small and wireless computing devices, such as smartphones and other portable devices. In the same way, it must be in charge of the creation, maintenance and implementation of the source code that integrates the applications; influence the graphic design and usability of your creations, which run across cell phones and tablets.'}
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2> React Native developer, Sweatworks <span> stared: 2021/08/02 - ended: 2021/11/28 </span></h2>
                        <p>
                          {`Analyze, design and lead technical solution as architect, delegate work and assignments to team members, Collaborate with team to identify and fix technical problems , Analyze users' needs and find applications to serve them , Define end goals for their team , Check that software and applications are updated, Supervise system modifications, Conduct security audits to identify areas of improvement, Guide team through technical issues and challenges, Mentor and help grow team members as professionals, Other duties as assigned`}
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2> Frontend Engineer, Magallanes Tech <span> stared: 2019/07/01 - ended: 2021/07/30 </span></h2>
                        <p>
                          {'Development of Web and Mobile Applications for IOS and Android operating systems with the React Native framework for economic sectors such as commerce and Banking.Development of Web Pages with the React JS Framework for the administration and control of applications.'}
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Full Stack Developer, Playtechnologies S.A.S <span> stared: 2019/01/01 - ended: 2019/06/30 </span></h2>
                        <p>
                          {'In charge of improving the design of applications or software in such a way that they better adapt to the needs of the organizations or purposes for which they were created. Promote the high- est quality when developing complex applications and define more accurately project costs and development time.Increase the efficiency of the systems by introducing processes that allow the quality of the software developed to be measured by specific standards, always seeking the best possible quality according to the needs and results that are to be generated.'}
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
