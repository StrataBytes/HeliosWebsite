const fetch = require('node-fetch');

exports.handler = async (event) => {
    try {
        const { name, email, message } = JSON.parse(event.body);
        const discordMessage = {
            content: `New contact form submission:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        const response = await fetch(process.env.DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(discordMessage),
        });

        if (!response.ok) {
            throw new Error(`Error in Discord webhook: ${response.statusText}`);
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Form submitted successfully" }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: `Error: ${error.message}` }),
        };
    }
};
