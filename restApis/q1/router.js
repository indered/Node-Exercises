var userProfile = require("./userProfile").findUser;

//Handle HTTP route GET /:username
function user(request, response) {
  var username = request.url.replace("/users/", "");
  if (username.length > 0) {
    let users = userProfile(username);
    response.end(JSON.stringify(users));
  }
}

module.exports.user = user;
