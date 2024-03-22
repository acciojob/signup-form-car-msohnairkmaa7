it("Button for submitting the form exists", () => {
  cy.get("form").within(() => {
    cy.wait(1000); // Adjust the wait time as needed
    cy.get("input[type='submit']").should("exist");
  });
});
