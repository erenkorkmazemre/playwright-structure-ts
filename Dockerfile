FROM node:16

WORKDIR /playwright-common-architect
COPY package.json ./
RUN npm install
COPY . .
CMD npm start 
