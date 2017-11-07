module.exports = {
    development: {
        client: 'pg',
        connection: {
            user : 'postgres',
            password : 'teledermatologie',
            database : 'App_Vergaderzalen'
        },
        migrations: {
            directory: __dirname + '/db/migrations',
        },
        seeds: {
            directory: __dirname + '/db/seeds'
        }
    }
};
