import { Router } from "express";
import { handleError } from "../utils/handleErrors.js";
import { addPet, getPets } from "../services/petsService.js";

const router = Router();

router.post('/', async (req, res) => {
  try {
    const pet = await addPet(req.body);
    res.send(pet);
  } catch (error) {
    handleError(res, error);
  }
})

router.get('/', async (req, res) => {
  try {
    const pets = await getPets();
    res.send(pets);
  } catch (error) {
    handleError(res, error);
  }
})

router.delete()

export default router;