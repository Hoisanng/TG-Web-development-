import Vakantie from './images/Maintwee/vakantie.jpg';

function Maintwee() {
    return (
        <>
        <div className="Maintweecontainer">
            <img className="vakantie" src={Vakantie} alt="Vakantie" />
            </div>
            <div className="overmijcontainer">
            <div className="overmijtext">Over mij</div>
            <div className="maintweetext">Ik ben een gedreven, ambitieuze, leergierige, harde werker. Ik kan scherp analyseren, goed ondernemen, doelgericht en oplossingsgericht werken en goede resultaten leveren. 
            <p>Op korte termijn wil ik graag een positieve bijdrage leveren aan het bedrijf door opgestelde doelen te verwezenlijken. Op lange termijn hoop ik door te groeien binnen het bedrijf door middel van trainingen en cursussen.</p> Tevens hoop ik een maatschappelijke bijdrage te leveren aan de samenleving middels de activiteiten van het bedrijf.</div>
            </div>
         </>  
        
    );
};

export default Maintwee;