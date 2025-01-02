import { useEffect, useState } from "react";
import { Api } from "@/services/api-client";
import { Ingredient } from "@prisma/client";

export const useIngredients = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Можно написать через try catch
    setLoading(true);
    Api.ingredients
      .getAll()
      .then((data) => {
        setIngredients(data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return { ingredients, loading };
};
