function DodajUKosaru(){
    return(
        <>
            <button className="btn btn-success">Dodaj</button>
        </>
    )
}

function PosaljiUpit(){
    return(
        <>
        <button className="btn btn-warning" onClick={Alertaj}>Posalji upit</button>
        </>
    )
}

function TrgovinaArtikl(obj) {
    return(
        <>
            <tr id={obj.Id}>
                <td>{obj.naziv}</td>
                <td>{obj.proizvodac}</td>
                <td>{obj.model}</td>
                <td>{obj.cijena}</td>
                <td>{obj.kolicina}</td>
                <td>{(obj.kolicina>0) ?  <DodajUKosaru /> : <PosaljiUpit />}</td>
            </tr>
        </>
    )
}
function Alertaj(){
    return(
        alert ("Artikl nije dostupan")
    )
}

export default TrgovinaArtikl;