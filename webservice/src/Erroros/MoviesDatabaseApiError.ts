export class MoviesDatabaseApiError extends Error {
    statusCode: number = 400;
    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, MoviesDatabaseApiError.prototype);
        Error.captureStackTrace(this, this.constructor);
    }
}
