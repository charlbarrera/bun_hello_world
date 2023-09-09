const server = Bun.serve({
    port: 3000,
    fetch(request) {
        Bun.write('carlos.txt',"Request received: " + request);

        return new Response("Welcome to Bun!" + request);
    },
});

console.log(`Listening on localhost:${server.port}`);
