# Stage 1 - the build process
FROM node:10 as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install
#RUN yarn serve
COPY . ./
RUN yarn build

# Stage 2 - the production environment
FROM nginx:latest
COPY kubernetes/front/default.conf /etc/nginx/conf.d/
COPY --from=build-deps /usr/src/app/ /usr/share/nginx/html/
WORKDIR /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
