module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', '34.168.237.66'),
      port: env.int('PGPORT', 6787),
      database: env('PGDATABASE', 'strapi'),
      user: env('PGUSER', 'strapi'),
      password: env('PGPASSWORD', 'password'),
      ssl: env.bool(true),
    },
  },
});