import { ILoginUser, IRegisterUser } from "@dto/user.dto"
import bcrypt from "bcrypt";


const register = async (user: IRegisterUser) => {
    const { email, password } = user;

    const isUserExists = 0
    if (isUserExists) {
        throw new Error
    }

    const hashedPass = await bcrypt.hash(password, 10);
    // const result = await 

    // return {
    //     name: result.name,
    //     email: result.email,
    // };
}