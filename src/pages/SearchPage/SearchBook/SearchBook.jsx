import { useState } from 'react';
import axios from "axios";

function SearchBook() {
    const [rechercheAvancee, setRechercheAvancee] = useState({
        author: '',
        date: '',
        title: ''
    });

    const [results, setResults] = useState([]);
    const handleRechercheAvancee = async () => {
        try {
            const { author, title } = rechercheAvancee;
            const response = await axios.get(`https://openlibrary.org/search.json?author=${author}&title=${title}`);
            setResults(response.data.docs);
        } catch (error) {
            console.error('Erreur lors de la recherche avancée :', error);
        }
    };
    return (
        <div>

            <input
                type="text"
                value={rechercheAvancee.author}
                onChange={(e) => setRechercheAvancee({...rechercheAvancee, author: e.target.value})}
                placeholder="Auteur..."
            />
            <input
                type="text"
                value={rechercheAvancee.title}
                onChange={(e) => setRechercheAvancee({...rechercheAvancee, title: e.target.value})}
                placeholder="Titre..."
            />


            <button onClick={handleRechercheAvancee}>Recherche</button>


            <table className="table">
                <tbody>
                <tr>
                    {results.map((result, index) => (
                        <td key={index}>{result.title}</td>
                    ))}

                </tr>
                </tbody>
            </table>

        </div>
    );
}
export default SearchBook;