export default () => ({
  app: {
    name: process.env.APP_NAME,
    port: process.env.APP_PORt,
  },
  database: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  auth: {
    api_key: process.env.API_KEY,
    cors_origin: process.env.CORS_ORIGIN,
  },
});
