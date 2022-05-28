import axios from 'axios';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import "../mojcss.css";

export default function Pocetna(){
    const readUrl="http://localhost:80/SPJ/pcshop/nesto.php";

    const [post, setPost] = useState([]);
    const [lista, setLista] =useState([]); //pomocna lista u kojoj ce uvijek biti svi postojeci artikli
    
    useEffect(() => {
        getPost();
    },[]);


    function getPost() {
        axios.get(readUrl).then((response) => {
        setPost(response.data); 
        setLista(response.data);
        console.log(post);
        console.log(lista);
    })};
    
    function Delete(id,naziv){
        if(window.confirm(`ARe you sure you want to delete ${naziv}?`)){
            DeleteArtikl(id);
        }
    }

    async function DeleteArtikl(id)
    {
        const writeUrl2="http://localhost:80/SPJ/pcshop/delete.php";    
        var params = new URLSearchParams();
        params.append('id', id);
        axios.post(writeUrl2,params)
        .then(()=>{getPost()});
    }

    function SearchQ(event){
        const value = event.target.value.toLowerCase();
        console.log(value);
        if(value!="")
        {
            //getPost(); ---- ne odkomentiraj
            console.log(post);
            console.log(lista);
            let arr=[];
            lista.map((artikl) =>{
                if(artikl.id.toString().toLowerCase().includes(value) || artikl.naziv.toString().toLowerCase().includes(value) || 
                    artikl.proizvodac.toString().toLowerCase().includes(value) || artikl.model.toString().toLowerCase().includes(value) ||
                    artikl.cijena.toString().toLowerCase().includes(value) || artikl.kolicina.toString().toLowerCase().includes(value))
                {
                    arr.push(artikl);
                }
            });
            //console.log(arr);
            setPost(arr);
        }
        else{
            getPost();
        }
    };

    return (
        <>
            <div id="srč">
                <input id="search" style={{width:'100%'}} placeholder="Pretrazi..." onChange={SearchQ}/>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th style={{width:'10%'}}>ID</th>
                        <th style={{width:'25%'}}>Naziv</th>
                        <th style={{width:'10%'}}>Proizvodac</th>
                        <th style={{width:'15%'}}>Model</th>
                        <th style={{width:'10%'}}>Cijena</th>
                        <th style={{width:'10%'}}>Kolicina</th>
                        <th style={{width:'10%'}}>Brisanje</th>
                        <th style={{width:'10%'}}>Ažuriranje</th>
                    </tr>
                </thead>
                <tbody>
                    {post.map((artikl) =>{
                        return(
                        <tr key={artikl.id}>
                            <td>{artikl.id}</td>
                            <td>{artikl.naziv}</td>
                            <td>{artikl.proizvodac}</td>
                            <td>{artikl.model}</td>
                            <td>{artikl.cijena}</td>
                            <td>{artikl.kolicina}</td>
                            <td><button className="btn btn-secondary" onClick={()=>Delete(artikl.id,artikl.naziv)}>Delete</button></td>
                            <td><Link to={`edit/${artikl.id}`}  className="btn btn-primary">Edit</Link></td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </>
    );

}