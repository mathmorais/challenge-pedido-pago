import { DocumentTypes, IAgent } from "../../interfaces/IAgent";

export class UnitsFormatter {
  private formatCPF = (cpf: string) => {
    const mask = "000 000 000 00";
    let tempString = Array.from(mask);
    let currentIndex = 0;

    for (let i = currentIndex; i < mask.length; i++) {
      if (mask[i] !== " ") {
        tempString[i] = cpf[currentIndex];
        currentIndex++;
      }
    }

    return tempString.join("");
  };

  formatDocument = (type: DocumentTypes, value: string) => {
    const supportedTypes = {
      CPF: this.formatCPF,
    };

    return supportedTypes[type](value);
  };

  formatPhoneNumber = (phone: IAgent["phone"]) => {
    const mask = "0000 0000";
    let number = Array.from(mask);
    let currentIndex = 0;

    for (let i = 0; i < mask.length; i++) {
      if (mask[i] !== " ") {
        number[i] = phone.number[currentIndex];
        currentIndex++;
      }
    }

    return `+${phone.ddd} ${phone.ddi} ${number.join("")}`;
  };

  private handleSerializeDateNumber = (number: number): string => {
    return number < 10 ? `0${number}` : `${number}`;
  };

  formatBirthDate = (birthDate: Date) => {
    const date = new Date(birthDate);
    const month: string = this.handleSerializeDateNumber(date.getMonth() + 1);
    const day: string = this.handleSerializeDateNumber(date.getDate());

    return `${day}/${month}/${date.getFullYear()}`;
  };
}
