FROM node:15

WORKDIR /app
COPY package.json .
RUN npm install

ENV PORT 3000
ENV DB_HOST localhost
ENV DB_USER root
ENV MARIADB_ROOT_PASSWORD password
ENV MARIADB_DATABASE surf
ENV TABLE_NAME maps

COPY . ./
EXPOSE $PORT

CMD ["node", "server.js"]
