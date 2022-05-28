import axios from 'axios';
import {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Edit(params){
    let navigate = useNavigate();
    
    const readUrl1="http://localhost:80/SPJ/pcshop/nesto2.php?id="+useParams().EditID;
    const writeUrl1="http://localhost:80/SPJ/pcshop/azuriraj.php";
    
    useEffect(() => {
        axios.get(readUrl1).then((response) => {
        let obj = response.data[0];    
        setInputs({id: obj.id, 
        naziv:obj.naziv,
        proizvodac:obj.proizvodac,
        model:obj.model,
        cijena: obj.cijena,
        kolicina:obj.kolicina
    });
    })},[]);

    const [inputs, setInputs] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        azurirajArtikl(inputs.id, inputs.naziv, inputs.proizvodac, inputs.model,inputs.cijena, inputs.kolicina);
        alert(`${inputs.id} ${inputs.naziv} je azuriran`);
    };
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const azurirajArtikl=(i,n,p,m,c,k)=>{
        var params = new URLSearchParams();
        params.append('id', i);
        params.append('naziv', n);
        params.append('proizvodac', p);
        params.append('model', m);
        params.append('cijena', c);
        params.append('kolicina', k);
        axios.post(writeUrl1,params)
        .then((response)=>{ console.log(response.data);navigate('/',{replace:true})});
    };

    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>ID:
            <input
                type="number"
                name="id"
                value={inputs.id || ""}
                onChange={handleChange}
                />
            </label>
            <br />
            <label>naziv:
                <input
                type="text"
                name="naziv"
                value={inputs.naziv || ""}
                onChange={handleChange}
                />
            </label>
            <br />
            <label>proizvodaca:
                <input
                type="text"
                name="proizvodac"
                value={inputs.proizvodac || ""}
                onChange={handleChange}
                />
            </label>
            <br/>
            <label>model:
                <input
                type="text"
                name="model"
                value={inputs.model || ""}
                onChange={handleChange}
                />
            </label>
            <br/>
            <label>cijenu:
                <input
                type="number"
                name="cijena"
                value={inputs.cijena || ""}
                onChange={handleChange}
                />
            </label>
            <br/>
            <label>kolicinu:
                <input
                type="number"
                name="kolicina"
                value={inputs.kolicina || ""}
                onChange={handleChange}
                />
            </label>
            <br/>
            <button className="btn btn-success">Azuriraj</button>
        </form>
        </>
    );

}