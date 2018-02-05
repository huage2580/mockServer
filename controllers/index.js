// index:
module.exports = {
    'GET /': async (ctx, next) => {
    	var user = ctx.session.user;
    	if(user==null){
    		ctx.redirect('/login');
    	}else{
    		ctx.render('index2.html', {
            user: user.name
        });
    	}
    }
};
