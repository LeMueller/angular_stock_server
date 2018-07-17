"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/api/stock', function (req, res) {
    var result = stocks;
    // 为什么这里是req.query, 而下面方法里面不是?
    var params = req.query;
    if (params.name) {
        result = result.filter(function (stock) { return stock.name.indexOf(params.name) != -1; });
    }
    res.json(result);
});
app.get('/api/stock/:id', function (req, res) {
    res.json(stocks.find(function (stock) { return stock.id == req.params.id; }));
});
var server = app.listen(8000, 'localhost', function () {
    console.log('服务器已启动，地址是http://localhost:8000');
});
var Stock = /** @class */ (function () {
    function Stock(id, name, price, rating, desc, categories) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Stock;
}());
exports.Stock = Stock;
var stocks = [
    new Stock(1, "First stock", 1.99, 3.5, "This ist the first stock", ['IT']),
    new Stock(2, "Second stock", 1.99, 4.5, "This ist the second stock", ['IT']),
    new Stock(3, "Third stock", 1.99, 2.5, "This ist the third stock", ['IT']),
    new Stock(4, "Fourth stock", 1.99, 3, "This ist the fourth stock", ['IT']),
    new Stock(5, "Fifth stock", 1.99, 4, "This ist the fifth stock", ['IT']),
    new Stock(6, "Sixth stock", 1.99, 5, "This ist the sixtch stock", ['IT', 'Cloud']),
    new Stock(7, "Seventh stock", 1.99, 3.5, "This ist the seventh stock", ['IT']),
    new Stock(8, "Eighth stock", 1.99, 3, "This ist the eighth stock", ['IT', 'UI']),
];
//# sourceMappingURL=stock_server.js.map