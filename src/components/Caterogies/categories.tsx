import { useEffect, useState }  from "react";
import { categoriesTypes }      from "./categoriesType";

import Loading                  from "../Loading/loading";
function Categories() {
    const [zekaArray, setCategories]    = useState<categoriesTypes>([]);
    const [isLoading, setLoading]       = useState<boolean>(true);

    useEffect(() => {
        fetch(categoriesUrl)
        .then(res => res.json())
        .then( (data:categoriesTypes) => {
            setCategories(data);
            setLoading(false);
        })
    }, [])

    if (isLoading) {
        <Loading />
    } else {
        return (
            <ul>
                {
                    zekaArray.map((zeka) => (
                        <li key={zeka.slug}>{zeka.name}</li>
                    ))
                }
            </ul>
        )
    }
    

}

export default Categories;