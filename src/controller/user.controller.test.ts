import { NextFunction, Request, Response } from 'express';
import userController from './user.controller';

describe('Get all users', () => {
    const req = {} as Request;
    const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
    } as unknown as Response;
    const next = jest.fn() as unknown as NextFunction;

    it('should return all users and 200 status code', async () => {
        await userController.getAllUser(req, res, next);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            status: 200,
            message: "Get all users successfully",
            data: [
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
        });
        // expect(next).toHaveBeenCalledTimes(0);
        expect(next).not.toHaveBeenCalled();
    });
});