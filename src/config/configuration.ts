export default () => ({
  app: {
    environment: process.env.ENV,
  },
  database: {
    mongodb: {
      host: process.env.DATABASE_URL,
    },
  },
});
