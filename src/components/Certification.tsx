import './certification.css';

interface CertificationProps
{
    ImgDisplay: string
    Date: string
    Learnings: string[]
}


function Certification({ImgDisplay, Date, Learnings} : CertificationProps){
    return (
        <>
            <div className="card">
                <img src={ImgDisplay} alt="certificate1" className='card-img-top' />
                <div className="card-body">
                    <h4>Obtained on {Date}</h4>
                    <h6>Learnings/Obtained:</h6>
                    <ul id="learned">
                        {
                            Learnings.map((learning, index) => (
                                <li key={index}>{learning}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}; export default Certification