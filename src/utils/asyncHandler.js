const asyncHandler = async (requestHandler) =>{
    (req, res, next) =>{
        Promise.resolve(requestHandler(req, res, next))
        .catch((err) => next(err))
    }
}

module.exports = asyncHandler


// const asyncHandler = (func) =>{}
// // further down 
// const asyncHandler =  (func) =>{()=>{}}
// // or
// const asyncHandler =  (func) => async ()=>{}


// const asyncHandler =  (func) => async (req, res, next)=>{
//     try{
//         await func(req, res, next)
//     }
//     catch(error){
//         res.stauts(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }