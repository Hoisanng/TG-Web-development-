import Books from './images/Interesses/future.jpg';
import Music from './images/Interesses/Fka.jpg';

function Interesses() {
    return (
        <div className="content-wrapper">
        <div className="werk">Interesses en hobby's</div>
        <img className="Books" src={Books} alt="Books"/>
        <img className="Music" src={Music} alt="Music"/>
        <div className="verwijzing">Lees meer →</div>
        </div>
    )
}
export default Interesses;