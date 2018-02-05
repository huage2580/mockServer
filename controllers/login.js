// login:
module.exports = {
    'GET /login': async (ctx, next) => {
        ctx.render('login.html', {
            tip: 'Power by hua',
            title:'MOCKER'
        });
    }
};
