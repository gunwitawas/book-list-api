var express = require('express');

exports.getBookList = (req, res) => {
    const bookList = [{
            imageUrl: '1',
            title: '11',
            author: '111',
            description: '1111',
        },
        {
            imageUrl: '2',
            title: '22',
            author: '222',
            description: '2222',
        },
        {
            imageUrl: '3',
            title: '33',
            author: '333',
            description: '3333',
        }
    ];
    res.send(bookList);
};