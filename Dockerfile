# Build Stage
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy dependency graphs
COPY package*.json ./

# Install all dependencies (including devDependencies for Astro build)
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the Astro project
RUN npm run build

# Run Stage
FROM node:20-alpine AS runner

WORKDIR /app

# Production environment variables
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# Copy the built application from the builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Install only production dependencies needed to run the server entrypoint
RUN npm ci --omit=dev

# Expose the port Astro will run on
EXPOSE 3000

# Start the Node server
CMD ["node", "./dist/server/entry.mjs"]
