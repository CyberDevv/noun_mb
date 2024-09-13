import { fetchData } from "@/utils/fetchData";
import { cookies } from "next/headers";

export async function GET(request) {
  const token = cookies().get("_token");

  const { searchParams } = new URL(request.url);
  const pageNumber = searchParams.get("pageNumber") || 1;
  const pageSize = searchParams.get("pageSize") || 50;
  const querySearch = searchParams.get("querySearch") || "";
  const searchType = searchParams.get("searchType") || "0";
  const dateFrom = searchParams.get("dateFrom");
  const dateTo = searchParams.get("dateTo");
  const amountFrom = searchParams.get("amountFrom") || 0;
  const amountTo = searchParams.get("amountTo") || 0;

  const params = {
   pageNumber: Number(pageNumber) + 1,
   pageSize,
   querySearch,
   searchType,
   dateFrom,
   dateTo,
   amountFrom,
   amountTo,
  };
  
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([key, value]) => value !== null && value !== undefined
    )
  );

  const url = `${process.env.DASHBOARD_BASE_URL}/Transaction/GetByFilter`;

  const response = await fetchData(url, token, "POST", filteredParams);

  return Response.json(response?.data, {
    status: response?.status,
  });
}
