// login:
module.exports = {
    'GET /login': async (ctx, next) => {
        ctx.render('login.html', {
            title: 'Welcome'
        });
    }
};
