// Форматирование цены в вид 5890 -> 5,890 ₽
export const formatPrice = (price: number): string => {
  if (typeof price !== "number" || price < 0 || price > 1000000) {
    throw new Error("Число должно быть в диапозоне от 0 до 1,000,000");
  }
  const priceString = price.toString();
  const formattedPrice = priceString.replace(/(\d)(?=(\d{3})+$)/g, "$1 ");

  return `${formattedPrice} ₽`;
};
