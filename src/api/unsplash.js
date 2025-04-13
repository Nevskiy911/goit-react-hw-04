const BASE_URL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_KEY;
console.log("Access Key:", ACCESS_KEY);

export async function fetchImages(query, page = 1, perPage = 12) {
  const url = `${BASE_URL}?query=${query}&page=${page}&per_page=${perPage}&client_id=${ACCESS_KEY}`;
  console.log("Request URL:", url);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch images from Unsplash");
  }

  return response.json();
}
