FROM node:18-alpine
WORKDIR /app
# El truco está en asegurar que copiamos desde la raíz del servicio
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "src/index.js"]