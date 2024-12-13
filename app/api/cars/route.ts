import { NextRequest, NextResponse } from "next/server";
import fetchWithRetries from "@/utility/fetchWithRetries";


export async function GET(req: NextRequest) {
    try {
        const res = await fetchWithRetries(`${process.env.CAR_API}/cars`,)

        if (!res.ok) {
            return NextResponse.json(
                {error: "Something went wrong", errorDetails: res.statusText},
                {status: res.status}
            )
        }

        const data = await res.json();
        return NextResponse.json(
            {data},
            {status: 200}
        )

    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {error: "Internal Server Error"},
            {status: 500}
        )
    }
}