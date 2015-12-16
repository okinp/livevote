var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	name: String,
	surname: String,
	slug: String,
	hasParticipated: Boolean.
	isAdmin: Boolean,
	options: [Number],
	password: String
});

userSchema.methods.isAdmin = function(){
	return (this.isAdmin === true);
};
userSchema.methods.hasParticipated = function(){
	return (this.hasParticipated === true);
};

var User = mongoose.model('User', userSchema);
module.exports = User;