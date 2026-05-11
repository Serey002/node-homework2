import BaseController from "./BaseController.js";

export class UserController extends BaseController {
  async getAllUsers(req, res) {
    try {
      const users = await UserService.getUsers();
      return this.successResponse(res, users, "Users fetched successfully");
    } catch (error) {
      return this.errorResponse(res, error.message);
    }
  }

  async getUserById(req, res) {
    try {
      const { id } = req.params;

      const user = await UserService.getUser(id);

      if (!user) {
        return this.errorResponse(res, "User not found", 404);
      }

      return this.successResponse(res, "User fetched successfully", user);
    } catch (error) {
      return this.errorResponse(res, error.message);
    }
  }

  async createUser(req, res) {
    try {
      const user = await UserService.createUser(req.body);

      return this.successResponse(res, "User created successfully", user, 201);
    } catch (error) {
      return this.errorResponse(res, error.message, 400);
    }
  }

  async updateUser(req, res) {
    try {
      const { id } = req.params;

      const user = await UserService.updateUser(id, req.body);

      return this.successResponse(res, "User updated successfully", user);
    } catch (error) {
      return this.errorResponse(res, error.message);
    }
  }

  async deleteUser(req, res) {
    try {
      const { id } = req.params;

      await UserService.deleteUser(id);

      return this.successResponse(res, "User deleted successfully");
    } catch (error) {
      return this.errorResponse(res, error.message);
    }
  }
}
