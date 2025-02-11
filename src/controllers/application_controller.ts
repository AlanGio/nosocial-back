import { Request, Response } from 'express';

const _invoque_method = async (
  req: Request,
  res: Response,
  callback: Function
) => {
  console.log('REQ', req.body);
  const { response } = await callback(req);
  console.log('RESPONSE', response);
  res.json(response);
};

const wrapped_method = (callback: Function) => {
  return async (req: Request, res: Response) => {
    _invoque_method(req, res, callback);
  };
};

const cached_method = (method_name: String, callback: Function, ttl = 60) => {
  console.log('REGISTERING ', method_name);
  return async (req: Request, res: Response) => {
    _invoque_method(req, res, callback);
  };
};

export default { cached_method, wrapped_method };
