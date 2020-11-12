import Hond from './images/Werk/Hond.JPG';
import Collegas from './images/Werk/Collegas.JPG'

function Werk() {
    return (
        <div className="content-wrapper">
        <div className="werk">Werkervaring</div>
        <img className="hond" src={Hond} alt="Hond"/>
        <img className="collegas" src={Collegas} alt="Collegas"/>
        <div className="verwijzing">Lees meer →</div>
        </div>
    )
}
export default Werk;