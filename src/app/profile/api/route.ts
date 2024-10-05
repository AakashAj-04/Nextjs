import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";
export async function GET(request: NextRequest) {
  // Read Incoming Headers
  // type 1 :
  const requestHeaders = new Headers(request.headers); //traditional way
  console.log(requestHeaders.get("Authorization"));

  // type:2
  const headerList = headers(); //Nextjs provide function
  console.log(headerList.get("Authorization"));

  // Cookies :
  // type 1:
  const theme = request.cookies.get("theme"); // Traditional way of set cookie
  console.log(theme);

  // type 2:
  cookies().set("ResultsPerPage", "20"); //NextJs provide function for set cookies
  console.log(cookies().get("ResultsPerPage"));

  // return new Response("Profile API data");
  return new Response("<h1>Profile API data</h1>", {
    // Outgoing Headers
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
