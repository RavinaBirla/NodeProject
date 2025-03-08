// Error is a in-build base class for errors

class ApiError extends Error{
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        statck = ""
    ){
       super(message)
       this.statusCode = statusCode
       this.data = null
       this.message = message
       this.success = false; 
       this.errors = errors

       if(statck){
        this.statck = statck
       }else{
        Error.captureStackTrace(this, this.constructor)
       }
    }
}

module.exports = { ApiError }