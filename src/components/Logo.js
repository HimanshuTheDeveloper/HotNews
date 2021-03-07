import { faGripfire } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Logo = () =>{
    return (
        <div className="row">
        <div className="col-lg-12">
            <header className="text-center tm-site-header">
                <h1 className="pl-4 tm-site-title"> <FontAwesomeIcon style={{color: '#ffbc5b'}} icon={faGripfire} /> Hot News</h1>
            </header>
        </div>
    </div>
    )
}
export default Logo;