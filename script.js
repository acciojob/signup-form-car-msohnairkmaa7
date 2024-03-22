it("Button for submitting the form exists", () => {
  cy.get("form").within(() => {
    cy.get("input[type='submit']").should("exist");
  });
});