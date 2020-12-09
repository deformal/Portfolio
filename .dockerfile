FROM node:15.3.0
ENV NODE_ENV=production

WORKDIR /PORTFOLIO
COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD [ "node", "server.js" ]