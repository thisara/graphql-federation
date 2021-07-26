FROM node

WORKDIR /app

COPY . .

RUN yarn install

EXPOSE 4000

CMD ["yarn", "start-gateway"]