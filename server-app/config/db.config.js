/* const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
} = process.env;

module.exports = {
  url: `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`
}; */
const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_NAME,

    DEV_DB_USER,
    DEV_DB_PASSWORD,
    DEV_DB_HOST,
    DEV_DB_PORT,
    DEV_DB_NAME,

    STAGE_DB_USER,
    STAGE_DB_PASSWORD,
    STAGE_DB_HOST,
    STAGE_DB_PORT,
    STAGE_DB_NAME
} = process.env;

var config = {
    local: {
        url: `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`
    },
    development: {
        url: `mongodb://${DEV_DB_USER}:${DEV_DB_PASSWORD}@${DEV_DB_HOST}:${DEV_DB_PORT}/${DEV_DB_NAME}?authSource=admin`
    },
    stage: {
        url: `stage_mongodb://${STAGE_DB_USER}:${STAGE_DB_PASSWORD}@${STAGE_DB_HOST}:${STAGE_DB_PORT}/${STAGE_DB_NAME}?authSource=admin`
    }
};

module.exports = config;
