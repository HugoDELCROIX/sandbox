function sendTest() {
    const webhookURL = "https://webhook.site/907da909-9a63-41a2-9f31-1e1a11de6ef9";
    fetch(webhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        // Vous pouvez ajuster le contenu selon les besoins du webhook
        body: JSON.stringify({ message: "test" })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur réseau : ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            console.log("Webhook envoyé avec succès :", data);
        })
        .catch(error => {
            console.error("Erreur lors de l'envoi du webhook :", error);
        });
}

