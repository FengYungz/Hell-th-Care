import 'dotenv/config'
export const env = {
	appName: 'medic-service',
	serverPort: 3000,
	database: { // TODO add to .env
		host: '127.0.0.1',
		port: 5432,
		user: 'postgres',
		password: 'postgres',
		database: 'medic_db'
	}
}
