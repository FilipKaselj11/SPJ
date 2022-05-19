import axios from 'axios';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dodaj(){
    let navigate = useNavigate();

    const dodajAuto= (i,n,p,m,c,k)=>{
        var params = new URLSearchParams();
        params.append('id', i);
        params.append('naziv', n);
        params.append('proizvodac', p);
        params.append('model', m);
        params.append('cijena', c);
        params.append('kolicina', k);
        axios.post("http://localhost/SPJ/pcshop/add.php",params)
        .then((response)=>{ navigate('/',{replace:true})});
    };
    const [inputs, setInputs] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        dodajAuto(inputs.id, inputs.naziv, inputs.proizvodac, inputs.model,inputs.cijena, inputs.kolicina);
        alert(`${inputs.id} ${inputs.naziv} je dodan`);
    };
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }


    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>Unesite ID:
            <input
                type="number"
                name="id"
                value={inputs.id || ""}
                onChange={handleChange}
                />
            </label>
            <br />
            <label>Unesite naziv:
                <input
                type="text"
                name="naziv"
                value={inputs.naziv || ""}
                onChange={handleChange}
                />
            </label>
            <br />
            <label>Unesite proizvodaca:
                <input
                type="text"
                name="proizvodac"
                value={inputs.proizvodac || ""}
                onChange={handleChange}
                />
            </label>
            <br/>
            <label>Unesite model:
                <input
                type="text"
                name="model"
                value={inputs.model || ""}
                onChange={handleChange}
                />
            </label>
            <br/>
            <label>Unesite cijenu:
                <input
                type="number"
                name="cijena"
                value={inputs.cijena || ""}
                onChange={handleChange}
                />
            </label>
            <br/>
            <label>Unesite kolicinu:
                <input
                type="number"
                name="kolicina"
                value={inputs.kolicina || ""}
                onChange={handleChange}
                />
            </label>
            <br/>
            <button className="btn btn-success">Dodaj</button>
        </form>
        </>
    );
}