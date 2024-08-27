import { fetchData } from "@/utils/fetchData";
import { cookies } from "next/headers";

export async function GET(request) {
  const token = cookies().get("_token");

  const url = `${process.env.DASHBOARD_BASE_URL}/Transaction/GetStats`;

  const response = await fetchData(url, token, "GET");

  return Response.json(response?.data, {
    status: response?.status,
  });
}
