import { Router } from "express";
import {
  create,
  exclude,
  listAll,
  listOne,
  update,
} from "../controllers/recipe.controller";
import { authenticateUser } from "../middlewares/authentication.middleware";
import { validate } from "../middlewares/validation.middleware";
import { recipeSchema } from "../schemas/recipe/create.schema";

const router = Router({ mergeParams: true });

export const recipeRouter = () => {
  router.post("", authenticateUser, validate(recipeSchema), create);
  router.get("", authenticateUser, listAll);
  router.get("/:recipeId", authenticateUser, listOne);
  router.patch("/:recipeId", update);
  router.delete("/:recipeId", exclude);

  return router;
};
