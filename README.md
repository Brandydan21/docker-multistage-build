## Multistage Build in Docker:
- A multistage build will split the build process into multiple stages, where each stage has a specific build such as a stage to build the application (compiling the code), then creating the actual production image.
- Doing this will save storage space, and protect against vulerabilities.
- This saves space as running multistage builds will mean that you will be excluding, source code (uncompiled code), development dependencies and build tools from the final production image.

### Dockerfile:

```
# Stage 1: Build the React app
FROM node:lts as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
# Stage 2: Create the production image
FROM nginx:latest
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```
1. Using the node base and labeling this stage as builder --> so everytime we want to use a file from this builder stage we reference it using --from=builder.
2. The first stage will install the dependencies and then build the application storing the build files into /build directory.
3. The final build will use the build files and apply it to the nginx directory that serves files.
4. CMD ["nginx", "-g", "daemon off;"] : 
    -  This is the command that starts Nginx in the foreground (i.e., keeping it running) when the container starts. The daemon off flag ensures Nginx doesn't go into the background, which is necessary for Docker containers to stay alive.

