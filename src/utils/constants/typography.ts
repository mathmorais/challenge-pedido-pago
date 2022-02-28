interface ITypography {
  size: string;
  weight: number;
  lineHeight?: string;
}

export const typography = new (class Typography {
  get small(): ITypography {
    return { size: "1.2rem", weight: 400, lineHeight: "14.4px" };
  }

  get span(): ITypography {
    return { size: "1.4rem", weight: 400, lineHeight: "14px" };
  }

  get paragraphy(): ITypography {
    return { size: "1.6rem", weight: 500 };
  }

  get subTitle(): ITypography {
    return { size: "1.8rem", weight: 600 };
  }

  get title(): ITypography {
    return { size: "3.2rem", weight: 600 };
  }

  get extraTitle(): ITypography {
    return { size: "3.6rem", weight: 600 };
  }
})();
