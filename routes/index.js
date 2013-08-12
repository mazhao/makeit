
/*
 * GET home page.
 */

exports.index = function(req, res){

    var buf = new Buffer("Hi Jack!");

    res.render('index', { title: buf.toString()});
};