FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.17.1-alpine
EXPOSE 80
COPY nginx.conf /data/conf/nginx.conf
COPY --from=build /usr/src/app/dist/swe645-student-survey /usr/share/nginx/html
CMD ["nginx", "-c", "/data/conf/nginx.conf", "-g", "daemon off;"]