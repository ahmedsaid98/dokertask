FROM alpine
RUN apk add --update nodejs npm
COPY . /src
WORKDIR /src
RUN npm install
Expose 8000
ENTRYPOINT ["node","./index.js"] 