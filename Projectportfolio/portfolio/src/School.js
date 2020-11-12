import Diploma from './images/School/Diploma.JPG';
import Les from './images/School/Les.JPG';

function School() {
    return (
        <div className="content-wrapper">
        <div className="werk">Studie</div>
        <img className="Diploma" src={Diploma} alt="Diploma"/>
        <img className="Les" src={Les} alt="Les"/>
        <div className="verwijzing">Lees meer →</div>
        </div>
    )
}
export default School;