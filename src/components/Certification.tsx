import './certification.css';

interface CertificationProps
{
    Title: string
    ImgDisplay: string
    Date: string
    Learnings: string[]
}


function Certification({ImgDisplay, Date, Learnings, Title} : CertificationProps){
    return (
        <>
            <div className="card h-100">
                <img src={ImgDisplay} alt="certificate_img" className='card-img-top' />
                <div className="card-body">
                    <h4 className='text-center text-info'>{Title}</h4>
                    <hr className='border-white' />
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