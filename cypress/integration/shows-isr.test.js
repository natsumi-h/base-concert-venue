// https://glebbahmutov.com/blog/ssr-e2e/
it("skips client-side bundle, confirming data from ISR cache", () => {
  cy.request("/shows")
    .its("body")
    .then((html) => {
      // remove the script so they don't start automatically
      const staticHtml = html.replace(/<script.*?>.*?<\/script.*?>/gm, "");
      cy.state("document").write(staticHtml);
    });

  // showが3つあることを確認
  cy.findAllByAltText(/2022 apr 1[456]/i).should("have.length.of", 3);
});
