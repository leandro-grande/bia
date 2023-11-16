module.exports = {
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PWD || "Mudar2020",
  database: "bia",
  host: process.env.DB_HOST || "bia-database.cksmvvgxivra.us-east-1.rds.amazonaws.com",
  port: process.env.DB_PORT || 5432,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false // This line will fix new error
    }
  },
};
