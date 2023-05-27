

const failedResponse = (msg)=>{
    return {
        'message':msg,
        'success':false
    }
}

const successResponse = (data, msg)=>{
    return {
        'data':data,
        'message':msg,
        'success':true
    }
}

module.exports ={
    failedResponse,
    successResponse
}

