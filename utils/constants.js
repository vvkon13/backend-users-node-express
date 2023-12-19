const { Joi } = require('celebrate');

const ERROR_CODE_VALIDATION = 400;
const ERROR_CODE_DEFAULT = 500;
const ERROR_CODE_NOT_FOUND = 404;
const ERROR_CODE_ALIEN = 403;
const ERROR_CODE_INCORRECT_EMAIL_PASSWORD = 401;
const ERROR_CODE_DUBLICATE = 409;
const SUCCESS_CREATING_RESOURCE_CODE = 201;
const ERROR_DEFAULT_MESSAGE = 'Произошла ошибка.';
const PORT = 3000;

const USER_VALIDATION_OBJECT = {
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(5),
    dateBirth: Joi.date().required().less('now').greater('1-1-1900'),
    gender: Joi.string(),
  }),
};

const USER_VALIDATION_OBJECT_NO_NAME = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(5),
  }).unknown(true),
};

const USER_VALIDATION_OBJECT_NOT_REQUIRED = {
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    password: Joi.string().min(5),
  }),
};

module.exports = {
  ERROR_CODE_VALIDATION,
  ERROR_CODE_DEFAULT,
  ERROR_CODE_NOT_FOUND,
  ERROR_CODE_INCORRECT_EMAIL_PASSWORD,
  ERROR_CODE_DUBLICATE,
  ERROR_DEFAULT_MESSAGE,
  ERROR_CODE_ALIEN,
  SUCCESS_CREATING_RESOURCE_CODE,
  PORT,
  USER_VALIDATION_OBJECT,
  USER_VALIDATION_OBJECT_NOT_REQUIRED,
  USER_VALIDATION_OBJECT_NO_NAME,
};
