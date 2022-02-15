import { Router } from "express";
import { create, exclude, list, listOne, login, update } from "../controllers/company.controller";
import { validate } from "../middlewares/validation.middleware";
import { companySchema } from "../schemas/company.schema";
import { loginCompanySchema } from "../schemas/loginCompany.schema";
import { updateCompanySchema } from "../schemas/updateCompany.schema";

const router = Router({ mergeParams: true });

export const companyRouter = () => {
    router.post('', validate(companySchema), create);
    router.post('/login', validate(loginCompanySchema), login);
    router.get('', list);
    router.get('/:id', listOne);
    router.patch('/:id', validate(updateCompanySchema), update);
    router.delete('/:id', exclude);

    return router;
};