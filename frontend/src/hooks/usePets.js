import { useState } from "react";
import { getPet, getPets } from "../services/petsApiService"

export default function usePets() {
  const [pets, setPets] = useState([]);
  const [pet, setPet] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getAllPets = async () => {
    setIsLoading(true);
    try {
      const { data } = await getPets();
      setPets(data);
    } catch (error) {
      setError(error.response.data);
    }
    setIsLoading(false);
  }

  const getPetById = async (id) => {
    setIsLoading(true);
    try {
      const { data } = await getPet(id);
      setPet(data);
    } catch (error) {
      setError(error.response.data);
    }
    setIsLoading(false);
  }

  const getProductPets = async (petsArray) => {
    setIsLoading(true);
    setPets([]);
    try {
      for (const petType of petsArray) {
        const pet = await getPet(petType);
        setPets(prev => [...prev, pet.data]);
      };
    } catch (error) {
      setError(error.response.data)
    }
    setIsLoading(false)
  }

  return { getAllPets, getPetById, getProductPets, pets, pet, error, isLoading }
}
