module.exports = {
    mongodb: {
      server: 'mongo',
      port: 27017,
      ssl: false,
      sslValidate: false,
      autoReconnect: true,
      poolSize: 4,
      admin: false,
      auth: [
        {
          database: 'admin',
          username: 'admin',
          password: 'admin',
        },
      ],
    },
    site: {
      baseUrl: '/',
      cookieKeyName: 'mongo-express',
      cookieSecret: 'cookiesecret',
      host: '0.0.0.0',
      port: 8081,
      requestSizeLimit: '50mb',
      sessionSecret: 'sessionsecret',
      sslKey: '',
      sslCert: '',
    },
  };
  