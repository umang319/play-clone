class ApiError extends Error {
    constructor(
        statusCode,
        message="Something went wrong",
        errors=[],
        stack = "",
    ) {
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.errors = errors;
        this.message = message;
        this.success = false;
        this.stack = stack;

        // Prevents prototype pollution attacks
        Error.captureStackTrace(this, this.constructor);

        if(stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }

    static isApiError(error) {
        return error instanceof ApiError;
    }
}

export default ApiError;
