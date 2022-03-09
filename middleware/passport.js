const passport = require('passport');
const {Strategy} = require('passport-local').Strategy;
const {User, Role, Permission} = require('../models');
const md5 = require('md5');
//test the user's credentials
async function verifyUser(username, password, done){
    //fetch user from database
    const user = await User.findOne({
        where: {
            email: username,
            password: md5(password)
        }
    });
    //failure message if unsuccessful
    if(!user){
        return done(null, false, {message: 'Incorrect email or password.'});
    }
    //result of success
    return done(false, {
        id: user.id,
    })
}

passport.use(
    new Strategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        verifyUser
    )
);

//turn user object into object that can be passed into cookie
passport.serializeUser(function(user,done){
    process.nextTick(function(){
        done(null,{id:user.id});
    });
});

//turn back into object
passport.deserializeUser(async function(user,done){
    const userModel = await User.findByPk(user.id, {
        include: [
            {
                model: Role,
                as: 'role',
                include: [
                    {
                        model: Permission,
                        as: 'permissions'
                    }
                ],
            }
        ]
    });
    process.nextTick(function(){
        return done(null,userModel);
    });
});

module.exports.passport = passport;