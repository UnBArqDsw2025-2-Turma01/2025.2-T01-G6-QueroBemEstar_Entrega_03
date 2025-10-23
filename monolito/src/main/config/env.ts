export default {
  node_env: process.env.NODE_ENV || "development",
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
  db_host: process.env.DB_HOST || "localhost",
  db_port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306,
  db_user: process.env.DB_USER || "user",
  db_password: process.env.DB_PASSWORD || "password",
  db_name: process.env.DB_NAME || "database",
}
