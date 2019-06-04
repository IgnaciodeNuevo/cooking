import { useState, useEffect } from 'react';

async function fetchRecipes({ baseUrl }) {
    const response = await fetch(baseUrl);
    if (response.status >= 400) {
        throw new Error('Bad response from server');
    }
    return response.json();
}

export function useRecipes({
    defaultRecipes = [],
    baseUrl = '/api/recipes.json'
}) {
    const [recipes, setRecipes] = useState(defaultRecipes);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchRecipes(baseUrl)
            .then(data => setRecipes(data.recipes))
            .catch(error => {
                setError(error); console.error(error);
            }, []);
    });

    return {
        recipes: recipes,
        error: error
    };
}

