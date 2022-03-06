/**
 * Created by web on 5/24/17.
 **/

var mongoController = require('../controller/mongo_controller');


module.exports = [
    { method: 'GET', path: '/', config: mongoController.start },
    { method: 'GET', path: '/mongo/user', config: mongoController.listUsers },
    { method: 'POST', path: '/mongo/user', config: mongoController.addUser },
    { method: 'PUT', path: '/mongo/user', config: mongoController.updateUser },
    { method: 'DELETE', path: '/mongo/user/{user_id}', config: mongoController.deleteUser }
];

