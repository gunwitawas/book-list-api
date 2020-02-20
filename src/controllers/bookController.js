const bookSchema = require('../schema')
const ObjectID = require('mongodb').ObjectID

exports.createBook = (req, res) => {
    console.log('createBook REQUEST_BODY :', req.body);
    bookSchema.create(req.body).then((data) => {
        console.log('RESPONSE_BODY :', data);
        result = {
            isSuccess: true,
            message: 'Create Success',
            data: data
        }
        res.send(result);
    }).catch((error) => res.send(error))
};

exports.queryBookList = (req, res) => {
    console.log('queryBookList REQUEST_BODY :', req.body);
    bookSchema.find().then((response) => {
        console.log('RESPONSE_BODY :', response);
        res.send(response);
    }).catch((error) => res.send(error))
};

exports.queryBookById = (req, res) => {
    console.log('queryBookById REQUEST_BODY :', req.body);
    const queryID = {
        _id: new ObjectID(req.body._id)
    };
    bookSchema.findOne(queryID).then((response) => {
        console.log('RESPONSE_BODY :', response);
        if (response) {
            result = {
                isSuccess: true,
                message: 'Query by id success',
                data: response
            }
            res.send(result);
        } else {
            result = {
                isSuccess: false,
                message: 'Data Not found ObjectID : ' + new ObjectID(req.body._id),
                data: response
            }
            res.send(result);
        }
    }).catch((error) => res.send(error))
};

exports.updateBook = (req, res) => {
    console.log('updateBook REQUEST_BODY :', req.body);
    let result = {}
    const updateID = {
        _id: new ObjectID(req.body._id)
    };
    bookSchema.findOne(updateID).then((response) => {
        if (response) {
            bookSchema.update(updateID, req.body).then((resp) => {
                result = {
                    isSuccess: true,
                    message: 'Update Success',
                    data: req.body
                }
                res.send(result);
            })
        } else {
            result = {
                isSuccess: false,
                message: 'Data Not found ObjectID : ' + new ObjectID(req.body._id),
                data: response
            }
            res.send(result);
        }
    }).catch((error) => res.send(error))

};

exports.removeBookById = (req, res) => {
    console.log('removeBook REQUEST_BODY :', req.body);
    const removeID = {
        _id: new ObjectID(req.body._id)
    };
    bookSchema.findOne(removeID).then((response) => {
        if (response) {
            bookSchema.deleteOne(removeID).then((resp) => {
                result = {
                    isSuccess: true,
                    message: 'Remove Success',
                    data: response
                }
                res.send(result);
            })
        } else {
            result = {
                isSuccess: false,
                message: 'Data Not found ObjectID : ' + new ObjectID(req.body._id),
                data: response
            }
            res.send(result);
        }
    }).catch((error) => res.send(error))
};