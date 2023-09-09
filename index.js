import fs from "fs";

const server = Bun.serve({
    port: 3000,
    fetch(request) {
        request
        return new Response("Welcome to Bun!" + request);
    },
});

console.log(`Listening on localhost:${server.port}`);
