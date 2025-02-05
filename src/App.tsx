import { useEffect, useState, useRef } from "react";
import ShadowCursor from "./functions/ShadowCursor";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Certification1 from './assets/imgs/cert1.png';
import Certification2 from './assets/imgs/cert2.png';
import Certification3 from './assets/imgs/cert3.png';

//LOGO
import IQlogo from './assets/imgs/iqueuelogo.png';
import hearguidelogo from './assets/imgs/heartguidelogo.jpg';
import librarysystemlogo from './assets/imgs/librarysystemlogo.jpg';
import invposlogo from './assets/imgs/invposlogo.png';

//Import Components
import LinkSocials from "./components/LinkSocials";
import Informations from "./components/Informations";
import EducationComponent from "./components/EducationComponent";
import ExperienceComponent from "./components/ExperienceComponent";
import Certification from "./components/Certification";
import Project from "./components/Project";

type MenuState = {
  about: number,
  education: number,
  experience: number,
  projects: number,
  certifications: number
}

export default function App() {
  const [mousePosition, setMousePosition] = useState({x: 0, y:0});
  const [selectedMenu, setSelectedMenu] = useState<MenuState>({about: 1, education:0, experience: 0, projects: 0, certifications: 0});
  const divRef = useRef<HTMLDivElement | null>(null);
  function isSelected(menuName: keyof MenuState) {
    const newSelectedMenu = { about: 0, education: 0, experience: 0, projects: 0, certifications: 0 };
    newSelectedMenu[menuName] = 1;
    setSelectedMenu(newSelectedMenu);
  }

  useEffect(() =>{
    document.title = "JL Sembilla";
    const handleMouseMove = (event: MouseEvent) =>{
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      });
    }
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const div = divRef.current;
      
      if (div) {
        const scrollableHeight = div.scrollHeight - div.clientHeight;
        const currentScroll = div.scrollTop;
        const percent = (currentScroll / scrollableHeight) * 100;
        console.log(percent);
        if (percent >= 0.00 && percent <= 5.00) {
          isSelected('about')
        }
        if (percent >= 11.64 && percent <= 15.64) {
          isSelected('education')
        }
        if (percent >= 35.55 && percent <= 40.55) {
          isSelected('experience')
        }
        if (percent >= 50.74 && percent <= 55.74) {
          isSelected('certifications')
        }
        if (percent >= 80.22 && percent <= 85.22) {
          isSelected('projects')
        }
      }
    };
    const div = divRef.current;
    if (div) {
      div.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (div) {
        div.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return(
    <div className="fade-in">
      <ShadowCursor
      x={mousePosition.x}
      y={mousePosition.y}
      />
      <div className="container-fluid">
        <div className="row g-0">
          <div className="col-md-5 col-lg-5 leftsideOfCol">
              <div className="d-flex align-items-center h-100">
                <div className="p-5">
                    <h1>John Lyod M. Sembilla</h1>
                    <h3>Software Developer</h3>
                    <p>
                      I am an enthusiastic and committed individual, characterized by
                      high spirits and ambition, particularly in the field of programming!
                    </p>
                    <div>
                    <div className="row mt-5 d-flex align-items-center">
                        <div className={`${selectedMenu.about === 1 ? 'col-2 p-1' : 'col-1 p-1'}`}>
                          <div className={`MenuLine ${selectedMenu.about === 1 ? 'expanded' : ''}`} />
                          </div>
                          <div className="col p-1 text-start">
                            <a href="#about" className="menuItem" onClick={() => { isSelected('about') }}>ABOUT</a>
                            </div>
                          </div>

                      <div className="row d-flex align-items-center">
                        <div className={`${selectedMenu.education === 1 ? 'col-2 p-1' : 'col-1 p-1'}`}>
                          <div className={`MenuLine ${selectedMenu.education === 1 ? 'expanded' : ''}`} />
                          </div>
                          <div className="col p-1 text-start">
                            <a href="#education" className="menuItem" onClick={() => { isSelected('education') }}>EDUCATION</a>
                            </div>
                          </div>

                          <div className="row d-flex align-items-center">
                        <div className={`${selectedMenu.experience === 1 ? 'col-2 p-1' : 'col-1 p-1'}`}>
                          <div className={`MenuLine ${selectedMenu.experience === 1 ? 'expanded' : ''}`} />
                          </div>
                          <div className="col p-1 text-start">
                            <a href="#experiences" className="menuItem" onClick={() => { isSelected('experience') }}>EXPERIENCES</a>
                            </div>
                          </div>


                          <div className="row d-flex align-items-center">
                        <div className={`${selectedMenu.certifications === 1 ? 'col-2 p-1' : 'col-1 p-1'}`}>
                          <div className={`MenuLine ${selectedMenu.certifications === 1 ? 'expanded' : ''}`} />
                          </div>
                          <div className="col p-1 text-start">
                            <a href="#certifications" className="menuItem" onClick={() => { isSelected('certifications') }}>CERTIFICATIONS</a>
                            </div>
                          </div>


                          <div className="row d-flex align-items-center">
                        <div className={`${selectedMenu.projects === 1 ? 'col-2 p-1' : 'col-1 p-1'}`}>
                          <div className={`MenuLine ${selectedMenu.projects === 1 ? 'expanded' : ''}`} />
                          </div>
                          <div className="col p-1 text-start">
                            <a href="#projects" className="menuItem" onClick={() => { isSelected('projects') }}>PROJECTS</a>
                            </div>
                          </div>

                          <div className="row mt-5">
                            <div className="col">
                            <div className="socialLinks">
                            <LinkSocials />
                            <h6 className="text-info">Created with React & Vite!</h6>
                            </div>
                            </div>
                          </div>
                    </div>
                </div>
            </div>
          </div>

          {/* MY INFORMATION */}

          {/* ABOUT */}
          
          <div ref={divRef} className="col-md-7 col-lg-7 p-5 rightsideOfCol">
            <div id="about" className="row mb-5">
            
              <div className="d-flex justify-content-center h-100">
                <div className="px-0 py-5 px-lg-5 px-sm-1">
                  <div className="aboutPage">
                    <a href="#"><span className="btn btn-primary mb-5 backToMenu">Back to Menu</span></a>
                    <Informations />
                  </div>
                </div>
              </div>
            </div>

            {/* EDUCATION */}
            <div id="education" className="row mb-5 px-0 py-5 px-lg-5 px-sm-1 d-flex justify-content-center">
              
            <EducationComponent
            SchoolName={"La Concepcion College (College)"}
            Description={"I earned a Bachelor of Science in Information Systems. During my studies, I took on leadership roles in several projects, particularly our thesis project. We developed an automated queuing system utilizing Arduino and RFID technology. The system included Java-based software for administrative control and a web-based application for students, created using HTML, JavaScript, PHP, Bootstrap, AJAX, and SQL for the relational database. This application allowed students to view their queue number and access their account information."
            }
            SchoolYear={{from:2021, to:2024}}
            Skills={["Java","Bootstrap", "PHP", "SQL"]}
            />

            <EducationComponent
            SchoolName={"STI College (College)"}
            Description={"Here, I acquired fundamental knowledge of Java, including various concepts of Object-Oriented Programming, as well as the basics of data structures and algorithms. For our final project during the first year, I developed a console-based mini system using Java and arrays for data storage."
            }
            SchoolYear={{from:2019, to:2020}}
            Skills={["Java", "PHP"]}
            />

            <EducationComponent
            SchoolName={"Bulacan College of Commerce and Trade (SHS)"}
            Description={"I had the opportunity to serve as the lead programmer for a research project where my team and I developed a library system. We utilized Visual Basic Studio as the IDE, VB.NET for both the backend and frontend, and SQL for the relational database. The project aimed to streamline library transactions at Bulacan College of Commerce and Trade. It was an honor to see our project significantly benefit the school, administrators, librarians, and students after its implementation in the following academic year. Additionally, we received recognition for outstanding research within our batch. This achievement motivated me to pursue a related course in college."}
            SchoolYear={{from:2017, to:2019}}
            Skills={["VB.NET","SQL", "Java"]}
            />
            </div>

            
            {/* EXPERIENCES */}

            <div id="experiences" className="row mb-5 px-0 py-5 px-lg-5 px-sm-1 d-flex justify-content-center">
              <ExperienceComponent
                CompanyName={"Motorcentral Yamaha"}
                Role={"Intern"}
                Responsibilities={["Utilizes tools to assist customers.", "Creates document request for customers in LTO.", "Hardware and network support"]}
                Year={{from: 2023, to: 2024}}
              />

              <ExperienceComponent
                CompanyName={"Teleperformance Philippines"}
                Role={"Technical Support Representative"}
                Responsibilities={["Assist customer with their network concerns.", "Communicate effectively using English language.", "Troubleshoot customer's problem."]}
                Year={{from: 2022, to: 2023}}
              />

              <ExperienceComponent
                CompanyName={"Freelancing"}
                Role={"Student Freelancer"}
                Responsibilities={["Taking commission based paper school works.", "Taking small programming projects.", "Taking commission based programming school works."]}
                Year={{from: 2022, to: 2025}}
              />
            </div>


            {/* CERTIFICATIONS */}

            <div id="certifications" className="row px-0 py-5 px-lg-5 px-sm-1 d-flex justify-content-center">

              <div className="col-12 col-md-12 col-lg-6 mb-5">
                <Certification 
                  Title="Cybersecurity Essentials"
                  ImgDisplay={Certification1}
                  Date="October 20-21, 2021"
                  Learnings={["Gain insights about what cybersecurity all about.", "Meet different people working in cybersecurity field.", "Talk about what different tools that they are using."]}
                />
              </div>

              <div className="col-12 col-md-12 col-lg-6 mb-5">
                <Certification
                  Title="JavaScript Essentials 1"
                  ImgDisplay={Certification2}
                  Date="June 27, 2024"
                  Learnings={["Understand the core and basics of JavaScript.", "Understand the different data types.", "Creates a very simple JavaScript program."]}
                />
              </div>
            </div>


            <div id="certifications" className="row mb-5 px-0 py-5 px-lg-5 px-sm-1 d-flex justify-content-center">
              <div className="col-12 col-md-12 col-lg-6 mb-5">
                <Certification 
                  Title="Software Engineering and Testing Workshop"
                  ImgDisplay={Certification3}
                  Date="February 01, 2022"
                  Learnings={["Learned different processes when it comes to building a project.", "Learned what unit testing is and how to perform it."]}
                />
              </div>
            </div>


            {/* PROJECTS */}

            

            <div id="projects" className="row px-0 py-5 px-lg-5 px-sm-1 d-flex justify-content-center">

            <Project
                image={invposlogo}
                prj_name="Inventory & POS System"
                prj_link={{link: "", linkTitle: ""}}
                description="Inventory & POS System helps the business to fasten the process of their transaction inside thier business. Because of this tailored system they do not need to manually input their sales in spreadsheet and at the same time generate useful reports for their business."
                tech_used={["Laravel", "Javascript", "Tailwind", "AJAX", "Bootstrap", "SQL"]}
              />

              <Project
                image={IQlogo}
                prj_name="IQueue"
                prj_link={{link: "https://www.canva.com/design/DAGE1h5rUS4/IMFgRMbR4zK9R4ZGyw-vzA/edit", linkTitle: "View Manual"}}
                description="iQueue automates queuing at La Concepcion College’s cashier and registrar offices using IoT to collect data from hardware devices and store it in cloud databases, thereby enhancing data centralization and access."
                tech_used={["Java", "Javascript", "CSS", "AJAX", "C++", "Bootstrap", "SQL"]}
              />

              <Project
                image={hearguidelogo}
                prj_name="Blood Pressure Journal"
                prj_link={{link: "https://drive.google.com/file/d/1_BJzxiS_rGwCF6-FkR-JbUAKvPnI2pUK/view", linkTitle: "View GUI"}}
                description="Heart Guide is a blood pressure journal application intended for use at the Barangay Health Center in Sto. Cristo, San Jose Del Monte, Bulacan. It allows patients to effectively monitor their blood pressure and includes a statistical reporting feature to aid in medical consultations."
                tech_used={["Java", "SQL"]}
              />

              <Project
                image={librarysystemlogo}
                prj_name="BCCT Library System"
                prj_link={{link: "https://drive.google.com/file/d/1Jg9vPswIgxwJjt4VIE1kgBKjVT4SXgJr/view", linkTitle: "View Documentation"}}
                description="Heart Guide is a blood pressure journal application intended for use at the Barangay Health Center in Sto. Cristo, San Jose Del Monte, Bulacan. It allows patients to effectively monitor their blood pressure and includes a statistical reporting feature to aid in medical consultations."
                tech_used={["Visual Basic", "SQL"]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};