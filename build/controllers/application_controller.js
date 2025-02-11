const _invoque_method = async (req, res, callback) => {
    console.log("REQ", req.body);
    const { response } = await callback(req);
    console.log("RESPONSE", response);
    res.json(response);
};
const wrapped_method = (callback) => {
    return async (req, res) => {
        _invoque_method(req, res, callback);
    };
};
const cached_method = (method_name, callback, ttl = 60) => {
    console.log("REGISTERING ", method_name);
    return async (req, res) => {
        _invoque_method(req, res, callback);
    };
};
export default { cached_method, wrapped_method };
