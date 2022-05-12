import logo from './logo.svg';


function Zaglavlje(){
    return(
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img src={logo} width="70" height="70" className="d-inline-block align-top" alt=""></img>
                IT STORE
            </a>
        </nav>
    )
}
export default Zaglavlje;