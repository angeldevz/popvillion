export function formatPrice(price: number) {
  if (price === 0) {
    return "Free";
  }
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
  });
}
