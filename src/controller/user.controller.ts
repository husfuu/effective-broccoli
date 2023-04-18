import { NextFunction, Request, response, Response } from "express";


const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, email, password } = req.body;

        const result = {
            name: "husfuu",
            email: "husfuu@gmail.com",
            password: "husfuu ganteng"
        }

        res.status(201).json({
            status: 201,
            message: "User registered successfully",
            data: result
        });
    } catch (error) {
        next(error);
    }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;

        const result = {
            email: email,
            password: password
        };

        res.status(200).json({
            status: 201,
            message: "User login successfully",
            data: result
        });
    } catch (error) {
        next(error);
    }
}

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, email, password } = req.body;

        const result = {
            name: name,
            email: email,
            password: password
        };

        res.status(200).json({
            status: 200,
            message: "User updated successfully",
            data: result
        });
    } catch (error) {
        next(error)
    }
}

const getAllUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log('masuk pak eokkkkkkkk')
        const result = [
            {
                name: "husfuu",
                email: "husfuu@gmail.com",
                password: "husfuuPass"
            },
            {
                name: "husfuu",
                email: "husfuu@gmail.com",
                password: "husfuuPass"
            },
            {
                name: "husfuu",
                email: "husfuu@gmail.com",
                password: "husfuuPass"
            }
        ]

        res.status(200).json({
            status: 200,
            message: "Get all users successfully",
            data: result
        });
    } catch (error) {
        next(error)
    }
}

export default {
    register,
    login,
    updateUser,
    getAllUser,
};