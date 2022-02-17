const User = require("../models/userModel")
const base = require('./baseController')

exports.banMe = async (req, res, next) => {
    try{
        await User.findByIdAndUpdate(req.user.id, {
            isbanned : true
        })
        
        res.status(204).json({
            status: 'success', 
            data: null
        })
    }catch(error){
        next(error);
    }
}
exports.getAllUsers = base.getAll(User)
exports.getUser = base.getOne(User)
exports.updateUser = base.updateOne(User)
exports.deleteUser = base.deleteOne(User)
