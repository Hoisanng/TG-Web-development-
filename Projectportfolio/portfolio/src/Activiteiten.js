import Berg from './images/Activiteiten/Huangshan.JPG';
import Jungle from './images/Activiteiten/Jungle.jpg';

function Activiteiten() {
    return (
        <div className="content-wrapper">
        <div className="werk">Extra curriculaire activiteiten</div>
        <img className="Berg" src={Berg} alt="Berg"/>
        <img className="Jungle" src={Jungle} alt="Jungle"/>
        <div className="verwijzing">Lees meer →</div>
        </div>
    )
}
export default Activiteiten;