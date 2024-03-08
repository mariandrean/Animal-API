import express from "express";
import {getAllAnimals} from "../controllers/AnimalController.js"
import { deleteAnimal } from "../controllers/AnimalController.js"

const router = express.Router();

router.get("/", getAllAnimals);

router.delete("/:id", deleteAnimal);

export default router;