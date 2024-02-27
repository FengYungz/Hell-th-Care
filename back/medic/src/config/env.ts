import 'dotenv/config'
export const env = {
	appName: 'medic-service',
	serverPort: 3000,
	database: process.env.DATABASE_URL
}
