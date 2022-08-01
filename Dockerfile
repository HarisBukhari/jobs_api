FROM node:lts-alpine
ENV NODE_ENV=production
ENV MONGO_URL=mongodb+srv://HarisBukhari:1jwzm8CceTMvKgG4@cluster0.cxqam.mongodb.net/job-api?retryWrites=true&w=majority
ENV JWT_SECRET=*F-JaNdRgUkXp2r5u8x/A?D(G+KbPeSh
ENV JWT_LIFETIME=30d
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
