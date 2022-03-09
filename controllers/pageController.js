module.exports.renderAccounting = function(req, res){
    if(!req.user.can('view accounting')){
        res.redirect('/');
        return;
    }
    res.render('pages/accounting');
}
module.exports.renderDashboard = function(req, res){
    if(!req.user.can('view dashboard')){
        res.redirect('/');
        return;
    }
    res.render('pages/dashboard');
}
module.exports.renderHR = function(req, res){
    if(!req.user.can('view hr')){
        res.redirect('/');
        return;
    }
    res.render('pages/hr');
}
module.exports.renderMarketing = function(req, res){
    if(!req.user.can('view marketing')){
        res.redirect('/');
        return;
    }
    res.render('pages/marketing');
}
module.exports.renderSales= function(req, res){
    if(!req.user.can('view sales')){
        res.redirect('/');
        return;
    }
    res.render('pages/sales');
}
module.exports.viewProfile = function(req, res){
    res.render('pages/profile');
}
