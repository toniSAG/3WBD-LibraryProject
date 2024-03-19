import { useState, useEffect } from "react";
import axios from "axios";
function LatestBook() {

    const [modificationsRecentes, setModificationsRecentes] = useState([])
    const [livreList, setLivreList] = useState([])

    useEffect(() => {
        const fetchModificationsRecentes = async () => {
            try {
                const response = await axios.get('http://openlibrary.org/recentchanges.json?limit=10');
                setModificationsRecentes(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des modifications récentes :', error);
            }
        };

        fetchModificationsRecentes();
    }, []);
    console.log(modificationsRecentes);

    useEffect(() => {
        const fetchLivreList = async () => {
            if (modificationsRecentes.length === 0) {
                return; // Ne rien faire si modificationsRecentes est vide
            }

            try {
                const detailsList = await Promise.all(

                    modificationsRecentes.map(async (modification) => {
                        const response = await axios.get(`https://openlibrary.org/books/${modification.id}.json`);
                        return response.data;
                    })
                );
                setLivreList(detailsList);
            } catch (error) {
                console.error('Erreur lors de la récupération des détails des livres :', error);
            }
        };

        fetchLivreList();
    }, [modificationsRecentes]);

    return (
        <div>
            <h2>Dernières publications</h2>
            <ul>
                {livreList.map((livreDetails, index) => (
                    livreDetails && (
                        <li key={index}>
                            <div>
                                <a href={`https://openlibrary.org/books/${modificationsRecentes[index].id}`}
                                   target="_blank" rel="noopener noreferrer">
                                    {livreDetails.title}
                                </a>
                                <br/>
                                Auteur(s): {livreDetails.author ? livreDetails.author.join(", ") : "Inconnu"}
                                <br/>
                                {livreDetails.cover_i && (
                                    <img src={`https://covers.openlibrary.org/b/id/${livreDetails.cover_i}-L.jpg`}
                                         alt="Couverture du livre"/>
                                )}
                            </div>
                        </li>
                    )
                ))}
            </ul>
        </div>
    );
}

export default LatestBook;