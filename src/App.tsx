import { useEffect, useState } from "react";
import ShadowCursor from "./functions/ShadowCursor";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

//Import Components
import LinkSocials from "./components/LinkSocials";
import Informations from "./components/Informations";
import EducationComponent from "./components/EducationComponent";

export default function App() {
  const [mousePosition, setMousePosition] = useState({x: 0, y:0});
  const [selectedMenu, setSelectedMenu] = useState<MenuState>({about: 1, education:0, projects: 0});

  type MenuState = {
    about: number,
    education: number,
    projects: number
  }

  function isSelected(menuName: keyof MenuState) {
    const newSelectedMenu = { about: 0, education: 0, projects: 0 };
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

  return(
    <>
      <ShadowCursor x={mousePosition.x} y={mousePosition.y} />
      <div className="container-fluid">
        <div className="row g-0">
          <div className="col-lg-5 leftsideOfCol">
              <div className="d-flex align-items-center h-100">
                <div className="p-5">
                    <h1>John Lyod M. Sembilla</h1>
                    <h3>Aspiring Programmer</h3>
                    <p>I am an enthusiastic and committed individual, characterized by
                      high spirits and ambition, particularly in the field of programming.
                    </p>
                    <div>
                    <div className="row mt-5 d-flex align-items-center" onClick={() => { isSelected('about') }}>
                        <div className={`${selectedMenu.about === 1 ? 'col-2 p-1' : 'col-1 p-1'}`}>
                          <div className={`MenuLine ${selectedMenu.about === 1 ? 'expanded' : ''}`} />
                          </div>
                          <div className="col p-1 text-start">
                            <a href="#about" className="menuItem">ABOUT</a>
                            </div>
                          </div>
                      
                      <div className="row d-flex align-items-center" onClick={() => { isSelected('education') }}>
                        <div className={`${selectedMenu.education === 1 ? 'col-2 p-1' : 'col-1 p-1'}`}>
                          <div className={`MenuLine ${selectedMenu.education === 1 ? 'expanded' : ''}`} />
                          </div>
                          <div className="col p-1 text-start">
                            <a href="#" className="menuItem">EDUCATION</a>
                            </div>
                          </div>

                          <div className="row d-flex align-items-center" onClick={() => { isSelected('projects') }}>
                        <div className={`${selectedMenu.projects === 1 ? 'col-2 p-1' : 'col-1 p-1'}`}>
                          <div className={`MenuLine ${selectedMenu.projects === 1 ? 'expanded' : ''}`} />
                          </div>
                          <div className="col p-1 text-start">
                            <span className="menuItem">PROJECTS</span>
                            </div>
                          </div>
                          <div className="row mt-5">
                            <div className="col">
                            <div className="socialLinks">
                            <LinkSocials />
                            </div>
                            </div>
                          </div>
                    </div>
                </div>
            </div>
          </div>

          {/* MY INFORMATION */}

          {/* ABOUT */}
          <div className="col-lg-7 p-5 rightsideOfCol">
            <div id="about" className="row mb-5">

              <div className="d-flex justify-content-center h-100">
                <div className="p-5">
                  <div className="aboutPage">
                    <Informations />
                  </div>
                </div>
              </div>


            </div>

            {/* EDUCATION */}
            <div id="education" className="row mb-5 p-5 d-flex justify-content-center">
              
            <EducationComponent
            SchoolName={"La Concepcion College"}
            Description={"Test Description"}
            SchoolYear={{from:2021, to:2024}}
            Skills={["Java","Bootstrap"]}
            />

            </div>
          </div>
        </div>
      </div>
    </>
  );
};