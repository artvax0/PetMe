import { Router } from "express";
import upload from "../services/fileUploadService.js";
import { handleError } from "../utils/handleErrors.js";

const router = Router();

router.post('/', upload.single('photo'), async (req, res) => {
  try {
    if (!req.file) {
      let error = Error('No file uploaded');
      error.status = 400;
      error.validator = 'Upload';
      return handleError(res, error);
    }
    const filePath = `images/${req.file.filename}`;
    res.send(filePath);
  } catch (error) {
    return handleError(res, error);
  }
})

export default router;