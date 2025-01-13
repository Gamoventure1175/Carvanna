import { NextRequest, NextResponse } from "next/server";
import fetchWithRetries from "@/utility/data-fetch/fetchWithRetries";

export async function GET(req: NextRequest, {params}: {params: {carId: string}}) {
    try {
        const {carId} = await params;

        if (!carId || isNaN(Number(carId))) {
            return NextResponse.json(
                {error: "A numerical carId query parameter is required"},
                {status: 400} //bad request
            )
        }

        const res = await fetchWithRetries(`${process.env.CAR_API}/cars/${carId}`)

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

    } catch (err) {
        console.log(err)
        return NextResponse.json(
            {error: "Internal Server Error"},
            {status: 500}
        )
    }
}