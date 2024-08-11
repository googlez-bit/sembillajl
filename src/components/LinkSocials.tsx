import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import './linksocials.css';
function LinkSocials(){
    return(
        <div className="p-2 d-flex">
            <span className='iconSocials'><a href="#"><FaLinkedin/></a></span>
            <span className='iconSocials'><a href="#"><FaSquareInstagram/></a></span>
            <span className='iconSocials'><a href="#"><MdEmail/></a></span>
        </div>
    );
}; export default LinkSocials