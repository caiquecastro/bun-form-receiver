export default {
    port: parseInt(process.env.PORT || "8080"),
    async fetch(request: Request) {
        const rawBody = await request.text();
        const reqBody = new URLSearchParams(rawBody);
        const jsonBody = Object.fromEntries(reqBody.entries());

        return new Response(
            JSON.stringify(jsonBody),
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    },
};