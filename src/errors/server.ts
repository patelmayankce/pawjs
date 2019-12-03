class ServerError extends Error {
  code: number = 500;

  name: string = 'ServerError';

  constructor(...args: any) {
    super(...args);
    Error.captureStackTrace(this, ServerError);
  }
}

export default ServerError;
