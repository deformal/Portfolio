FROM node:14

ENV PORT=3000

WORKDIR /Portfolio

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 3000

CMD [ "node", "app.js" ]