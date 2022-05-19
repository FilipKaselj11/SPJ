import axios from 'axios';
import {useState, useEffect} from 'react';

export default function Pocetna(){
    const readUrl="http://localhost:80/SPJ/pcshop/nesto.php";

    const [post, setPost] = useState([]);
    
    useEffect(() => {
        axios.get(readUrl).then((response) => {
        setPost(response.data);
    })},[]);

    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Naziv</th>
                        <th>Proizvodac</th>
                        <th>Model</th>
                        <th>Cijena</th>
                        <th>Kolicina</th>
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
                        </tr>)
                    })}
                </tbody>
            </table>
        </>
    );

}