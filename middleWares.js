import routes from './routes.js';

export const localMiddleware = (req, res, next) => {
    res.locals.siteName = "uTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id:1
    };
    next();
};