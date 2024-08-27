import { fetchData } from "@/utils/fetchData";
import { cookies } from "next/headers";

export async function GET(request) {
  const token = cookies().get("_token");

  const { searchParams } = new URL(request.url);
  const pageNumber = searchParams.get("pageNumber") || 1;
  const pageSize = searchParams.get("pageSize") || 10;
  const querySearch = searchParams.get("querySearch") || "";

  const params = {
    pageNumber,
    pageSize,
    querySearch,
  };

  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([key, value]) => value !== null && value !== undefined
    )
  );

  const url = `${process.env.DASHBOARD_BASE_URL}/Staff/Fetch`;

  const response = await fetchData(url, token, "POST", filteredParams);

  return Response.json(response?.data, {
    status: response?.status,
  });
}
