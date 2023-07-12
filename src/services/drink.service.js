import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const getRecipeService = async (drinkId) => {
    try {
        const url = `${apiUrl}lookup.php?${drinkId}`;
        const { data } = await axios.get(url);
        return data.drinks[0];
    } catch (error) {
        console.log(error)
        throw new Error("Hubo un error al obtener la receta.");
    }
};

const filterDrinksService = async (name, category) => {
    try {
        const url = `${apiUrl}filter.php?i=${name}&=${category}`;
        const { data } = await axios.get(url);
        return data.drinks;
    } catch (error) {
        console.log(error)
        throw new Error("Hubo un error al obtener las bebidas.");
    }
}

export { getRecipeService, filterDrinksService }