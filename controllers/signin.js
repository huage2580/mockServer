// sign in:
const userDao = require('../dao/userDao')
module.exports = {
    'POST /signin': async (ctx, next) => {
        var
            email = ctx.request.body.email || '',
            password = ctx.request.body.password || '';
            var user = await userDao.login(email,password);
//          console.log(user)
			ctx.session.user = user;
        if (user!=null) {
            console.log('signin ok!');
            ctx.redirect('/');
        } else {
            console.log('signin failed!');
            ctx.render('login.html', {
                title: 'Sign In Failed',
                tip:'Power by hua'
            });
        }
    }
};
