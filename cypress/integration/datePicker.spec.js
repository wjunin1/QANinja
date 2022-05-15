it("Selecionar a data de nascimento", () => {
  cy.Entrar("Date Picker");

  const date = {
    month: "nov",
    year: "1989",
    day: /^23$/,
  };

  cy.get(".datetimepicker-dummy-input").click();
  cy.get(".datepicker-nav-month").click();
  cy.contains(".datepicker-month", date.month).click();
  cy.get(".datepicker-nav-year").click();
  cy.contains(".datepicker-year span", date.year).click();
  cy.contains("button[class=date-item]", date.day).click();
});
