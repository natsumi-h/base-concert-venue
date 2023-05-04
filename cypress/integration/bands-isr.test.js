// https://glebbahmutov.com/blog/ssr-e2e/
it("skips client-side bundle, confirming data from ISR cache", () => {
  cy.request("/bands")
    .its("body")
    .then((html) => {
      // remove the script so they don't start automatically
      const staticHtml = html.replace(/<script.*?>.*?<\/script.*?>/gm, "");
      cy.state("document").write(staticHtml);
    });

  // bandが3つあることを確認
  cy.findByRole("heading", { name: /the wandering bunnies/i }).should("exist");
  cy.findByRole("heading", { name: /shamrock pete/i }).should("exist");
  cy.findByRole("heading", { name: /the joyous nun riot/i }).should("exist");
});
