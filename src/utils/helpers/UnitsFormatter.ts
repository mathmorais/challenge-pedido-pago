import { IAgent } from "../../interfaces/IAgent";

export class UnitsFormatter {
  formatCPF = (cpf: string) => {
    const mask = "000 000 000 00";
    let tempString = Array.from(mask);

    for (let i = 0; i < cpf.length; i++) {
      if (mask[i] !== " ") {
        tempString[i] = cpf[i];
      }
    }

    return tempString.join("");
  };

  formatPhoneNumber = (phone: IAgent["phone"]) => {
    const mask = "0000 0000";
    let number = Array.from(mask);

    for (let i = 0; i < phone.number.length; i++) {
      if (mask[i] !== " ") {
        number[i] = phone.number[i];
      }
    }

    return `+${phone.ddd} ${phone.ddi} ${number.join("")} `;
  };

  formatBirthDate = (birthDate: string) => {
    const date = new Date(birthDate);
    const month = date.getMonth();

    return `${date.getDate()}/${
      month < 10 && "0" + month
    }/${date.getFullYear()}`;
  };
}
