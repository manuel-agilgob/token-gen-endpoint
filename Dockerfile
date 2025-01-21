FROM node:18.16.1-alpine
RUN apk --no-cache add git
WORKDIR /usr/src/app
RUN git clone https://github.com/manuel-agilgob/token-gen-endpoint.git
WORKDIR /usr/src/app/token-gen-endpoint
RUN npm install
EXPOSE 3000
CMD [ "node", "index.js" ]