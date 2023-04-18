import User from "@/database/models/users";

import { IRegisterUser } from "@/dto/user.dto";

const getUserByEmail = async (email: string) => {
    const result = await User.findOne({
        where: {
            email
        },
    });

    return result;
}

const createUser = async (user: IRegisterUser) => {
    const result = await User.create({
        name: user.name,
        email: user.email,
        password: user.password
    });

    return result;
}

const updateUser = async (id: number, user: IRegisterUser) => {
    const result = await User.update(
        { user },
        { where: { id, } }
    );
    return result;
}

export default {
    getUserByEmail,
    createUser,
    updateUser
}