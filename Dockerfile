FROM node:alpine

WORKDIR usr/app

RUN yarn

COPY . .

EXPOSE 4100

CMD ["yarn", "start"]
