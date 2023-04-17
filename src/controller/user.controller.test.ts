import { NextFunction, Request, Response } from 'express';
import userController from './user.controller';

describe('Get all users', () => {
    const req = {} as Request;
    const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
    } as unknown as Response;
    const next = jest.fn() as unknown as NextFunction;

    // Call the HTTP handler with the mock request and response
    userController.getAllUser(req, res, next);

    // Verify that the response has the expected status code and body, and that next was called
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith('Hello, world!');
    expect(next).toHaveBeenCalledTimes(1);
});