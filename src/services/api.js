const PRODUCTS_URL = "https://dummyjson.com/products?limit=8";

export async function fetchProducts() {
  const response = await fetch(PRODUCTS_URL);

  if (!response.ok) {
    throw new Error(
      "Unable to load smile results right now. Please try again later.",
    );
  }

  const data = await response.json();
  return Array.isArray(data.products) ? data.products : [];
}
