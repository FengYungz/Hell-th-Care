import 'dotenv/config'
export const env = {
	appName: 'personal-trainer-service',
	serverPort: 3000,
	database: process.env.DATABASE_URL
}
