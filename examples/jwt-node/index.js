"use strict";

const Hapi = require("hapi");
const Boom = require("boom");
const JWT = require("jsonwebtoken");

const server = new Hapi.Server({ port: 4040 });

server.route({
  method: "POST",
  path: "/grant",
  handler: ({ payload }) => {
    const { username, password } = payload;

    const token = JWT.sign({ scope: "admin", name: "Matheus" }, "shhhhhh", {
      expiresIn: 60 * 60
    });

    return { token };
  }
});

(async function() {
  try {
    await server.start();
  } catch (error) {
    console.log(error);
  }
})();
