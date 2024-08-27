import { fetchData } from "@/utils/fetchData";
import { cookies } from "next/headers";

export async function GET(request) {
  const token = cookies().get("_token");

  const { searchParams } = new URL(request.url);
  const pageNumber = searchParams.get("pageNumber") || 0;
  const pageSize = searchParams.get("pageSize") || 0;
  const querySearch = searchParams.get("querySearch") || "";
  const searchType = searchParams.get("searchType") || "";
  const dateFrom = searchParams.get("dateFrom");
  const dateTo = searchParams.get("dateTo");
  const paramFilter = searchParams.get("paramFilter") || "";

  const params = {
    pageNumber,
    pageSize,
    querySearch,
    searchType,
    dateFrom,
    dateTo,
    paramFilter,
  };

  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([key, value]) => value !== null && value !== undefined
    )
  );

  const url = `${process.env.DASHBOARD_BASE_URL}/Account/GetAll`;

  const response = await fetchData(url, token, "POST", filteredParams);

  return Response.json(response?.data, {
    status: response?.status,
  });
}
