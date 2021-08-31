import { NextFunction, Request, Response } from "express";

import Controller from "./Controller";
import FAQService from "../../core/services/FAQService";

class IndexController extends Controller {
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const hc = await FAQService.healthCheck();

      const data = {
        name: `ps-compasso-rasa-api`,
        version: "v1.0",
        author: "Vinícius Souza",
        description: "",
        repository: "https://github.com/vinifsouza/ps-compasso-rasa",
        db_up: hc,
      };

      super.response(res, data);
    } catch (err) {
      next(err);
    }
  }
}

export default new IndexController();
