import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Image from "next/image";


const Timeline = () => {
    return (
      <div>
          <VerticalTimeline
          lineColor={'#af2323'}
          >
              <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{background: 'rgba(35,35,35,0)', color: '#ffffff'}}
                  contentArrowStyle={{borderRight: '7px solid  rgb(200,200,200)'}}
                  date="2022"
                  iconStyle={{background: 'rgb(0,0,0)', color: '#fff'}}

              >
                  <Image
                      className={"rounded-lg"}
                      width={500}
                      height={500}
                      src={"/images/fs/team22.webp"}
                      alt={"team 22"}
                  />
                  <h4 className={"mt-3"}>Formula Student UK 2022</h4>
                  <ul
                      style={{listStyleType: "disc"}}
                      className={"mt-3 mx-5"}
                  >
                      <li style={{color: "gray"}}>The only Egyptian team that was able to participate in Formula Student UK 22</li>
                      <li  style={{color: "gray"}}>Participated with Formula Student class (Electrical Vehicle) and FSAI (Autonomous System) 2022</li>
                  </ul>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{background: 'rgba(35,35,35,0)', color: '#fff'}}
                  contentArrowStyle={{borderRight: '7px solid  rgb(200,200,200)'}}
                  date="2021"
                  iconStyle={{background: 'rgb(0,0,0)', color: '#fff'}}

              >
                  <Image
                      className={"rounded-lg"}
                      width={500}
                      height={500}
                      src={"/images/fs/team21.webp"}
                      alt={"team 22"}
                  />
                  <h4 className={"mt-3"}>Formula Student UK 2021 Virtual</h4>
                  <ul
                      style={{listStyleType: "disc"}}
                      className={"mt-3 mx-5"}
                  >
                      <li style={{color: "gray"}}>
                          The highest ranked team in the MENA region for the design event in Formula Student UK 21 virtual edition
                      </li>

                      <li  style={{color: "gray"}}>
                          The Bronze medal in the Geneva International Exhibition of Invention 2021
                      </li>

                      <li  style={{color: "gray"}}>
                          The 4th place for cost and manufacturing event in Formula Student UK 21 virtual edition
                      </li>
                  </ul>
              </VerticalTimelineElement>


              <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{background: 'rgba(35,35,35,0)', color: '#fff'}}
                  contentArrowStyle={{borderRight: '7px solid  rgb(200,200,200)'}}
                  date="2020"
                  iconStyle={{background: 'rgb(0,0,0)', color: '#fff'}}

              >
                  <Image
                      className={"rounded-lg"}
                      width={500}
                      height={500}
                      src={"/images/fs/team20.webp"}
                      alt={"team 20"}
                  />
                  <h4 className={"mt-3"}>Formula Student UK 2020 Virtual</h4>
                  <ul
                      style={{listStyleType: "disc"}}
                      className={"mt-3 mx-5"}
                  >
                      <li style={{color: "gray"}}>
                          Achieved the 1st place in YLF manufacturing league competition
                      </li>

                      <li  style={{color: "gray"}}>
                        11th in business planning event in formula student UK 20 virtual event
                      </li>

                  </ul>
              </VerticalTimelineElement>



              <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{background: 'rgba(35,35,35,0)', color: '#fff'}}
                  contentArrowStyle={{borderRight: '7px solid  rgb(200,200,200)'}}
                  date="2019"
                  iconStyle={{background: 'rgb(0,0,0)', color: '#fff'}}

              >
                  <Image
                      className={"rounded-lg"}
                      width={500}
                      height={500}
                      src={"/images/fs/team19.webp"}
                      alt={"team 19"}
                  />
                  <h4 className={"mt-3"}>Formula Student UK 2019</h4>
                  <ul
                      style={{listStyleType: "disc"}}
                      className={"mt-3 mx-5"}
                  >
                      <li style={{color: "gray"}}>
                          Took the 3rd place in Cairo innovates competition
                      </li>

                      <li  style={{color: "gray"}}>
                          First Egyptian team to  compete with Electrical  Powered car in Formula  Student UK
                      </li>

                      <li  style={{color: "gray"}}>
                          Took the 5th place in electric car design in Formula Student UK and 1st place in the MENA region
                      </li>

                      <li  style={{color: "gray"}}>
                          Got the 11th place in Cost and manufacturing in Formula student UK and the 2nd place in MENA region
                      </li>

                  </ul>
              </VerticalTimelineElement>


              <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{background: 'rgba(35,35,35,0)', color: '#fff'}}
                  contentArrowStyle={{borderRight: '7px solid  rgb(200,200,200)'}}
                  date="2018"
                  iconStyle={{background: 'rgb(0,0,0)', color: '#fff'}}

              >
                  <Image
                      className={"rounded-lg"}
                      width={500}
                      height={500}
                      src={"/images/fs/team18.webp"}
                      alt={"team 18"}
                  />
                  <h4 className={"mt-3"}>Formula Student UK 2018</h4>
                  <ul
                      style={{listStyleType: "disc"}}
                      className={"mt-3 mx-5"}
                  >
                      <li style={{color: "gray"}}>
                          Ranked 17th in Cost Event Formula Student UK
                      </li>


                  </ul>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{background: 'rgba(35,35,35,0)', color: '#fff'}}
                  contentArrowStyle={{borderRight: '7px solid  rgb(200,200,200)'}}
                  date="2017"
                  iconStyle={{background: 'rgb(0,0,0)', color: '#fff'}}

              >
                  <Image
                      className={"rounded-lg"}
                      width={500}
                      height={500}
                      src={"/images/fs/team17.webp"}
                      alt={"team 17"}
                  />
                  <h4 className={"mt-3"}>Formula Student Italy 2017</h4>
                  <ul
                      style={{listStyleType: "disc"}}
                      className={"mt-3 mx-5"}
                  >
                      <li style={{color: "gray"}}>
                          Achieved the 3rd place in Cost Event Formula Student- Italy
                      </li>


                  </ul>
              </VerticalTimelineElement>


              <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{background: 'rgba(35,35,35,0)', color: '#fff'}}
                  contentArrowStyle={{borderRight: '7px solid  rgb(200,200,200)'}}
                  date="2016"
                  iconStyle={{background: 'rgb(0,0,0)', color: '#fff'}}

              >
                  <Image
                      className={"rounded-lg"}
                      width={500}
                      height={500}
                      src={"/images/fs/team16.webp"}
                      alt={"team 16"}
                  />
                  <h4 className={"mt-3"}>Formula Student Germany 2016</h4>
                  <ul
                      style={{listStyleType: "disc"}}
                      className={"mt-3 mx-5"}
                  >
                      <li style={{color: "gray"}}>
                          Participated successfully in Dynamic events in Formula student Germany being the only Egyptian & African team to achieve such progress.
                      </li>

                      <li style={{color: "gray"}}>
                          Completed successfully all  technical inspections in  Formula Student Germany & UK
                      </li>


                  </ul>
              </VerticalTimelineElement>


              <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{background: 'rgba(35,35,35,0)', color: '#fff'}}
                  contentArrowStyle={{borderRight: '7px solid  rgb(200,200,200)'}}
                  date="2015"
                  iconStyle={{background: 'rgb(0,0,0)', color: '#fff'}}

              >
                  <Image
                      className={"rounded-lg"}
                      width={500}
                      height={500}
                      src={"/images/fs/team15.webp"}
                      alt={"team 15"}
                  />
                  <h4 className={"mt-3"}>Formula Student Germany 2015</h4>
                  <ul
                      style={{listStyleType: "disc"}}
                      className={"mt-3 mx-5"}
                  >
                      <li style={{color: "gray"}}>
                          2015 Most Challenging Award in Formula Student - Germany
                      </li>

                  </ul>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{background: 'rgba(35,35,35,0)', color: '#fff'}}
                  contentArrowStyle={{borderRight: '7px solid  rgb(200,200,200)'}}
                  date="2012"
                  iconStyle={{background: 'rgb(0,0,0)', color: '#fff'}}

              >
                  <Image
                      className={"rounded-lg"}
                      width={500}
                      height={500}
                      src={"/images/fs/team12.webp"}
                      alt={"team 12"}
                  />
                  <h4 className={"mt-3"}>The Story Starts</h4>
                  <ul
                      style={{listStyleType: "disc"}}
                      className={"mt-3 mx-5"}
                  >
                      <li style={{color: "gray"}}>
                          Built the first CURT Formula Student car (highest rank in Egypt and Africa
                      </li>

                  </ul>
              </VerticalTimelineElement>



          </VerticalTimeline>
      </div>
    )
};

export default Timeline;
