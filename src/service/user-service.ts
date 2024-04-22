import { prismaClient } from "../application/database";
import { ResponseError } from "../error/response-error";
import { CreateUserRequest, CreateUserResponse } from "../model/user-model";
import { UserValidation } from "../validation/user-validation";
import { Validation } from "../validation/validation";

export class UserService {
  static async register(
    request: CreateUserRequest,
  ): Promise<CreateUserResponse> {
    const registerRequest = Validation.validate(
      UserValidation.REGISTER,
      request,
    );

    const totalUserWithSameUsername = await prismaClient.user.count({
      where: {
        username: registerRequest.username,
      },
    });
    if (totalUserWithSameUsername != 0) {
      throw new ResponseError(400, "Username already exist!");
    }
  }
}
