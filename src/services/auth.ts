import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";
import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";


const registerNewUser = async ({ email, password, name }: User) => {
    const checkIs = await UserModel.findOne({ email });
    if (checkIs) return "User already exists";
    const passwordHash = await encrypt(password)
    const registerNewUser = await UserModel.create({ email, password: passwordHash, name });
    return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
    const checkIs = await UserModel.findOne({ email });
    if (!checkIs) return "User NOT FOUND";

    const passwordHash = checkIs.password;
    const isCorrect = await verified(password, passwordHash);

    if (!isCorrect) return "Password Incorrect";

    const token = generateToken(checkIs.email);
    const data = {
        token,
        user:checkIs,
    };
    return data;
};

export { registerNewUser, loginUser };