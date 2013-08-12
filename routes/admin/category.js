
/*
 * GET home page.
 */

exports.index = function(req, res){

    var title = "Category";

    res.render('admin/category.ejs', { title: title });
};