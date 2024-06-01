import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';


const client = new PrismaClient();

export async function GET(req: NextRequest) {
    const user = await client.usernb.findFirst();

    return NextResponse.json({
        email: user?.email,
        name: user?.password
    })
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    try {
        await client.usernb.create({
            data: {
                email: body.email,
                password: body.password
            }
        })
        return NextResponse.json({
            body
        })
    } catch (e) {
        return NextResponse.json({
            message: "Error while signing up",
        }, {
            status: 411
        })
    }
}