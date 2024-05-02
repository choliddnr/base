export const { format: formatIDR } = new Intl.NumberFormat("id", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

export const toNumber = (n: string | number): number | undefined => {
  if (!n) return;
  if (typeof n === "number") return n;
  // n.replace("Rp ", "");
  // console.log("n", n);
  return parseInt(n.replace(/\D/g, ""));
};
