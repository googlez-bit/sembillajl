import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import './linksocials.css';
function LinkSocials(){
    return(
        <div className="p-2 d-flex">
            <span className='iconSocials'><a href="https://www.linkedin.com/in/sembilla/" target="_blank"><FaLinkedin/></a></span>
            <span className='iconSocials'><a href="https://www.instagram.com/lyodiiii/" target="_blank"><FaSquareInstagram/></a></span>
            <span className='iconSocials'><a href="mailto:johnlyodsembilla02@gmail.com" target="_blank"><MdEmail/></a></span>
        </div>
    );
}; export default LinkSocials