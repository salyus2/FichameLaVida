var UserProfile = (function() {
    var token = "";
    var role = ""
    var getToken= function() {
      return sessionStorage.token
    };
    var getRole= function() {
      return sessionStorage.role
    };
    var setToken = function(token) {
       sessionStorage.token = token;     
    };
  
    var setRole = function(role) {
      sessionStorage.role = role;     
   };
    return {
        getToken: getToken,
        setToken: setToken,
        
        getRole: getRole,
        setRole: setRole
    } 
  
  })();
  
  export default UserProfile;