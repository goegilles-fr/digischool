FROM node:22-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy prisma schema
COPY prisma ./prisma/

# Generate Prisma Client
RUN npx prisma generate

# Copy application code
COPY . .

# Expose port
EXPOSE 8080

# Push schema and start
CMD ["sh", "-c", "npx prisma db push && npm start"]
# .env must include DATABASE_URL
# docker run -d --name digischool-app -p 8080:8080 -e DATABASE_URL="mongodb://admin:pass@example.com:27017/digischools?authSource=admin&replicaSet=rs0&directConnection=true"  digischool-app
