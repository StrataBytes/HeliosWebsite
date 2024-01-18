const fetch = require('node-fetch');

exports.handler = async (event) => {
    const { name, email, message } = JSON.parse(event.body);
    const discordMessage = {
        content: `New contact form submission:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    await fetch(process.env.DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(discordMessage),
    });

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Form submitted successfully" }),
    };
};
