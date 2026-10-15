
import User from "../models/user.js";

class UserController{
    async registration(req, res){
        try{
            const { name, lastName, age} = req.body;
            const newUser = await User.create({ name, lastName, age});
            res.json(newUser);
            newUser.save();
        }catch(err){
            res.status(500).json("Ошибка при регистрации" + err);
            console.log("Ошибка при регистрации");

            
        }
    }
}

export default new UserController();

