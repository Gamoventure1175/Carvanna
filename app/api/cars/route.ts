import { NextRequest, NextResponse } from "next/server";
import fetchWithRetries from "@/utility/data-fetch/fetchWithRetries";

export async function GET(req: NextRequest) {
    try {
        const res = await fetch(`${process.env.CAR_API}/cars`,{
            next: {
                revalidate: 5,
                tags: ['cars'],
            },
            cache: 'force-cache'
        })

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