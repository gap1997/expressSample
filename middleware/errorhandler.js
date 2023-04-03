const {constants}=require("../constants")
const errorHandler = (err, req, res, next) => {
    console.log(res.statusCode);
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation Failed",
                massage: err.massage,
               stackTrace: err.stack,
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                title: "not Found",
                massage: err.massage,
          stackTrace: err.stack,
            });
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title: "un authorized",
                massage: err.massage,
              stackTrace: err.stack,
            });
            break;

        case constants.FORBIDDEN:
            res.json({
                title: "forbidden",
                massage: err.massage,
            stackTrace: err.stack,
            });
            break;
   
      case constants.SERVER_ERROR:
        res.json({
          title: "Server Error",
          massage: err.massage,
         stackTrace: err.stack,
        });
    
        default:res.json({
          title: "Server Error",
          massage: err.massage,
          stackTrace: err.stack,
        });
            console.log("NO Error ALL Good !!")
        break;
    }

  
 
};

module.exports = errorHandler;
