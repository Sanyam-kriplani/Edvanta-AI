import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: './configs/schema.js', // string path to schema file
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_MQorawfx6h8G@ep-broad-fog-a1w57g6q-pooler.ap-southeast-1.aws.neon.tech/Edvanta?sslmode=require&channel_binding=require'
  }
});