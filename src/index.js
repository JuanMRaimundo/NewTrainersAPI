const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults();

require("dotenv").config();

server.use(function (req, res, next) {
	setTimeout(next, 1500);
});
server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 4200;

server.listen(PORT, () => {
	console.log(`JSON Server is running at PORT ${PORT}`);
});
