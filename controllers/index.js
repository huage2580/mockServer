// index:
module.exports = {
    'GET /': async (ctx, next) => {
    	var user = ctx.session.user;
    	if(user!=null){
    		console.log(user.email)
    		ctx.redirect('/login');
    	}
        ctx.render('index.html', {
            title: 'Welcome'
        });
    }
};
