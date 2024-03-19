import { useState } from 'react';
import axios from "axios";
function SearchBar() {
    const [searchFast, setSearchFast] = useState('');
    const [results, setResult] = useState([])
    const handleRechercheRapide = async () => {
        try {
            const response = await axios.get(`https://openlibrary.org/search.json?title=${searchFast}&author=${searchFast}`);
            setResult(response.data.docs);
        } catch (error) {
            console.error('Erreur lors de la recherche rapide :', error);
        }
    };
    return (
        <div>

                <input
                    className={"form-control me-2"}
                    type="text"
                    value={searchFast}
                    onChange={(e) => setSearchFast(e.target.value)}
                    placeholder="Recherche rapide (titre ou auteur)..."
                />
                <button className={"btn btn-outline-success"}
                        onClick={handleRechercheRapide}
                        >
                    Rechercher
                </button>

            <div>
                <ul className={"list-group"}>
                    {results.map((result, index) => (
                        <li className={"list-group-item"} key={index}>
                            Titre: {result.title},
                            {result.cover},
                            Auteur(s): {result.author_name ? result.author_name.join(", ") : "Inconnu"}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
);
}

export default SearchBar;