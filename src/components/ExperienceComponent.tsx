import './experiencecomponent.css'
interface ExperienceProperties{
    CompanyName: String
    Year: {to: number, from: number}
    Role: String
    Responsibilities: String[]
}

function ExperienceComponent({ CompanyName, Year, Role, Responsibilities } : ExperienceProperties) {
    return(
        <>
        <div className="card mb-3">
            <div className="card-header">
                <div className="row">
                    <div className="col text-start">
                        {CompanyName}
                    </div>
                    <div className="col text-end">
                        {`${Year.from} - ${Year.to}`}
                    </div>
                </div>
            </div>
            <div className="card-body">
                <p><b>As, {Role}</b></p>
                <h6>Responsibilites</h6>
                <ul className='exp'>
                    {Responsibilities.map((responsibilities, index) => (
                        <li className={index.toString()}>{responsibilities}</li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    );
}; export default ExperienceComponent