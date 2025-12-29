# Stage 1: Build the application
FROM node:21.5-alpine3.18 AS builder

# Set the working directory for the build stage
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application source code into the container
COPY . .

# Build the application
RUN npm run build

# Stage 2: Create the final image
FROM node:21.5-alpine3.18

WORKDIR /app
RUN npm install -g serve
RUN apk add --no-cache wget

# Copy the built application
COPY --from=builder /app/dist /app/dist

# --- NEW STEPS ---
# Copy the shell script from your source
COPY env.sh /app/env.sh

# Make sure it's executable
RUN chmod +x /app/env.sh

EXPOSE 3000

# Health check (remains same)
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --quiet --tries=1 --spider http://localhost:3000 || exit 1

# Use the shell script as the entrypoint wrapper
ENTRYPOINT ["/app/env.sh"]

# The CMD is passed to the ENTRYPOINT (exec "$@")
CMD ["serve", "-s", "dist", "-l", "3000"]