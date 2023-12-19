const routes = require('express').Router();
const usersRoutes = require('./users');
const {
  celebrate,
} = require('celebrate');
const { login, createUser } = require('../controllers/users');
const auth = require('../middlewares/auth');
const { USER_VALIDATION_OBJECT, USER_VALIDATION_OBJECT_NO_NAME } = require('../utils/constants');
const NotFoundError = require('../errors/NotFoundErr');

routes.post('/signin', celebrate(USER_VALIDATION_OBJECT_NO_NAME), login);
routes.post('/signup', celebrate(USER_VALIDATION_OBJECT), createUser);
routes.use(auth);
routes.use('/users', usersRoutes);
routes.use((req, res, next) => {
  next(new NotFoundError('Маршрут не найден'));
});

module.exports = routes;
