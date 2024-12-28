import { Api } from "@/services/api-client";
import { Ingredient } from "@prisma/client";
import { useEffect, useState } from "react";

interface ReturnProps {
  ingredient: Ingredient[];
}

export const useFilterIngredients = (): ReturnProps => {
  const [ingredient, setIngredient] = useState<Ingredient[]>([]);

  useEffect(() => {
    Api.ingredients
      .getAll()
      .then((data) => {
        setIngredient(data);
      })
      .catch((error) => console.log(error));

    // async function fetchIngredients() {
    //   try {
    //     const ingredients = await Api.ingredients.getAll();
    //     setItems(ingredients);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    // fetchIngredients();
  });

  return { ingredient };
};
