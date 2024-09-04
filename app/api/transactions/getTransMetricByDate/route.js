import { fetchData } from "@/utils/fetchData";
import { cookies } from "next/headers";

export async function GET(request) {
  const token = cookies().get("_token");

  const { searchParams } = new URL(request.url);
  const dateFrom = searchParams.get("dateFrom");
  const dateTo = searchParams.get("dateTo");
  
  const url = `${process.env.DASHBOARD_BASE_URL}/Transaction/GetStats/${dateFrom}/${dateTo}`;

  const response = await fetchData(url, token, "GET");

  return Response.json(response?.data, {
    status: response?.status,
  });
}
