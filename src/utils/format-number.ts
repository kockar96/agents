// ----------------------------------------------------------------------

export function fCurrency(number: number | string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Number(number));
}

export function fPercent(number: number) {
  return new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number / 100);
}

export function fNumber(number: number | string) {
  return new Intl.NumberFormat("en-US").format(Number(number));
}

export function fShortenNumber(number: number | string) {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(Number(number));
}

export function fData(number: number | string) {
  return new Intl.NumberFormat("en-US", {
    style: "unit",
    unit: "byte",
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(Number(number));
}
