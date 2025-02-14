// Fonction appelée lors du clic sur le bouton du fichier HTML
function sendTest() {
    // Remplacez par l'URL de votre webhook
    const webhookURL = "https://webhook.site/907da909-9a63-41a2-9f31-1e1a11de6ef9";

    // Envoi d'une requête POST avec le message "test" au webhook
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

