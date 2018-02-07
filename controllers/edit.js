// login:
module.exports = {
    'GET /edit': async (ctx, next) => {
    	var user = ctx.session.user;
    	if(user==null){
    		ctx.redirect('/login');
    	}else{
    	
    	ctx.render('edit_api.html', {
    		user: user.name
        });
    	}
    	
        
    }
};