import {Link} from 'react-router-dom';

export default function Navigacija(){

    return(
        <nav className="navbar navbar-light bg-light">
            <Link className="navbar-brand" to="/">Pocetna</Link>
            <Link className="navbar-brand" to="/dodaj">Dodaj</Link>
        </nav>
    );

}