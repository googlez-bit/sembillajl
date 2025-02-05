import './projects.css';

interface ProjectProperties{
    image: string
    prj_name: string
    prj_link: {link: string, linkTitle: string}
    description: string
    tech_used: string[]
} 


function Project({image, prj_name, prj_link, description, tech_used} : ProjectProperties) {
    return(
        <>
            <div className="card mb-5">
                <div className="card-body">
                    <div className="row p-0">
                        <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
                            <img id='ProjectIcon' src={image} alt="projectLogo" />
                        </div>
                        <div className="col-12 col-md-7 text-center">
                            <h3>{prj_name}</h3>
                            <a target='_blank' href={prj_link.link}>{prj_link.linkTitle}</a>
                            <p>{description}</p>
                            <h3 className='mb-3'>Technology Used</h3>
                            {
                                tech_used.map((techused, index) => (
                                  <span className='skills' key={index}>{techused}</span>  
                                ))
                            };
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}; export default Project