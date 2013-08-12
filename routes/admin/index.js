
/*
 * GET home page.
 */

exports.index = function(req, res){

    var title = "Admin";

    res.render('admin/index.ejs', { title: title });
};