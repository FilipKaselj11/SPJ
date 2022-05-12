import TrgovinaArtikl from "./trgovinaArtikl.js";

function Lista(props){
    return(
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Naziv</th>
                        <th>Proizvodac</th>
                        <th>Model</th>
                        <th>Cijena</th>
                        <th>Kolicina</th>
                        <th>KUPI</th>
                    </tr>
                </thead>
                <tbody>
                    {props.artikli.map((artikl)=> {
                        return(<TrgovinaArtikl key={artikl.Id} Id={artikl.Id.toString()} naziv={artikl.Naziv} proizvodac={artikl.Proizvođač} model={artikl.Model} cijena={artikl.Cijena} kolicina={artikl.Količina}/>)
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Lista;
