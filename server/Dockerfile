# Stage 1: Build
FROM node:lts AS build
WORKDIR /app
ENV NODE_ENV production

# Install pnpm globally
RUN npm install -g pnpm

# Copy all files and install dependencies
COPY . .
RUN pnpm i

# Stage 2: Runtime
FROM node:lts-slim
WORKDIR /app
ENV TZ Asia/Shanghai
ENV NODE_ENV production

# Copy only necessary files from the build stage
COPY --from=build /app .

# Expose port
EXPOSE 8360

# Run the application
CMD ["node", "vanilla.js"]
