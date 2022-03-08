interface ITypography {
  size: string;
  weight: number;
  lineHeight?: string;
}

export const typography = new (class Typography {
  readonly small: ITypography = {
    size: "1.2rem",
    weight: 400,
    lineHeight: "14.4px",
  };

  readonly span: ITypography = {
    size: "1.4rem",
    weight: 400,
    lineHeight: "14px",
  };
  readonly paragraphy: ITypography = { size: "1.6rem", weight: 500 };

  readonly subTitle: ITypography = {
    size: "1.8rem",
    weight: 600,
    lineHeight: "27px",
  };

  readonly title: ITypography = { size: "3.2rem", weight: 600 };

  readonly extraTitle: ITypography = { size: "3.6rem", weight: 600 };
})();
