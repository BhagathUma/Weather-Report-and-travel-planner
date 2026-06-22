const API_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL;

export async function searchLocations(
  query: string
) {
  const response = await fetch(
    `${API_URL}/api/location/search?q=${query}`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch locations"
    );
  }

  return response.json();
}