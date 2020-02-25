# build stage
FROM node:13.8.0 as build-stage
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# production stage
FROM nginx as production-stage
COPY --from=build-stage /dist /usr/share/nginx/html
EXPOSE 80
EXPOSE 443