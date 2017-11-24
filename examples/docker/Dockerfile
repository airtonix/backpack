FROM node:8-alpine as builder

# do any OS dependancy installation here
# apk --update --no-cache add foo bar baz

WORKDIR /build
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install


FROM node:8-alpine

WORKDIR /app
COPY --from=builder /build/node_modules ./node_modules/
COPY ./src ./src
COPY ./backpack.config.js ./backpack.config.js
COPY ./.babelrc ./.babelrc

CMD [ "node ./build/index.js" ]
