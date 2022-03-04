import { DocumentTypes, IAgent, Phone } from "@interfaces/IAgent";
import { UnitsFormatter } from "@utils/helpers/UnitsFormatter";

const { formatDocument, formatBirthDate, formatPhoneNumber } =
  new UnitsFormatter();

describe("UnitFormater", () => {
  it("Should format a CPF following a pattern", () => {
    const pattern = "123 456 789 00";
    const cpf = "12345678900";
    const formattedCpf = formatDocument(DocumentTypes.CPF, cpf);
    expect(formattedCpf).toBe(pattern);
  });
  it("Should format a Date following pattern", () => {
    const pattern = "01/01/2000";
    const iso = "2000-01-01T23:15:14.715Z";
    const date = new Date(iso);
    const formattedDate = formatBirthDate(date);
    expect(formattedDate).toBe(pattern);
  });
  it("Should format a Phone following a pattern", () => {
    const pattern = "+55 11 1234 5678";
    const phoneNumber: Phone = {
      ddd: "55",
      ddi: "11",
      number: "12345678",
    };
    const formattedNumber = formatPhoneNumber(phoneNumber);

    expect(formattedNumber).toBe(pattern);
  });
});
