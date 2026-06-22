import { HistoryResponse } from "@/types/history";

const API_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL;

export async function getHistory(
  page = 1,
  limit = 10
): Promise<HistoryResponse> {

  const response = await fetch(
    `${API_URL}/api/weather/history?page=${page}&limit=${limit}`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch history"
    );
  }

  return response.json();
}

export async function deleteAnalysis(
  id: string
) {

  const response = await fetch(
    `${API_URL}/api/weather/${id}`,
    {
      method: "DELETE",
    }
  );

  return response.json();
}