'use strict';

const Person = require('../model/person');

exports.getAllPersons = (req, res, next) => {
    Person.find({}, (error, persons) => {
        if (error) next(error);
        req.data = persons;
        next();
    });
};
