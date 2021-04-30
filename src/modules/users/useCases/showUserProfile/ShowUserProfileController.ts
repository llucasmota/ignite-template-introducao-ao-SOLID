import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { user_id } = request.params;
    console.log("query params", user_id);

    if (user_id) {
      const user = this.showUserProfileUseCase.execute({ user_id });
      return response.json(user);
    }
    throw new Error("user not already exists");
  }
}

export { ShowUserProfileController };
