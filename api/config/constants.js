module.exports = {
  DEVELOPMENT: "development",
  PRODUCTION: "production",
  HASH_SALT_ROUNDS: 10,
  ROLE_ADMINISTRATIOR: "administrator",
  ROLE_USER: "user",

  // messages
  messages: {
    CONNECTED_TO_DB: "Connected to the db",
    CONNECTION_ERROR: "Connection error",
    SERVER_STARTED: "Server started on port:",
    SERVER_WORKS: "Server works!",

    INVALID_CREDENTIALS: "Invalid username or password!",
    NOT_AUTHORIZED: "You are not authorized!",
    YOU_MUST_BE_LOGGED_OUT: "You must be logged out to access this.",
    FILE_UPLOADED: "File uploded successfully",
    INVALID_ID: "Invalid id",
    DELETED: "Successfully deleted.",
    UPDATED: "Successfully updated."
  },

  paths: {
    UPLOADS: "public/uploads",
  },

  // status codes
  status_codes: {
    CREATED: 201,
    OK: 200,
    NOT_FOUND: 404,
    CONFLICT: 409,
    NOT_AUTHORIZED: 403,
    SERVER_ERROR: 500,
    BAD_REQUEST: 400,
  },
};
