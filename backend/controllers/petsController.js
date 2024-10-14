import { Router } from "express";
import { handleError } from "../utils/handleErrors.js";
import { addPet } from "../services/petsService.js";

const router = Router();

router.post('/', async (req, res) => {
  try {
    const pet = await addPet(req.body);
    res.send(pet);
  } catch (error) {
    handleError(res, error);
  }
})

export default router;