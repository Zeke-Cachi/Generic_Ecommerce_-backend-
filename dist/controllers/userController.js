import Users from "../models/userModel.js";
class userController {
    async getUsers(req, res) {
        console.log("users!");
    }
    async createUsers(req, res) {
        try {
            const newUser = new Users(req.body);
            newUser.save();
            res.status(201).json(newUser);
        }
        catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    }
}
export default new userController();
