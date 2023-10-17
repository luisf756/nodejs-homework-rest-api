const login = require('./login');
const register = require('./register');
const logout = require('./logout');
const getCurrent=require('./getCurrent');
const updateUserSubscription=require('./updateUserSubscription');

module.exports = {
    register,
    login,
    logout,
    getCurrent,
    updateUserSubscription,
}