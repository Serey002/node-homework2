class BaseController {
    successResponse(res, data, message = 'Success') {
        return res.status(status).json({
            success: true,
            message,
            data
        })
    }

    errorResponse(res, message, status = 500) {
        return res.status(status).json({
            success: false,
            message,
        })
    }
}

