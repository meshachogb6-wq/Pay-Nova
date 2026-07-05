import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Here you can later connect to email service or database
    console.log("New Support Ticket:", { name, email, subject, message });

    return NextResponse.json({
      success: true,
      message: "Support ticket received. We will reply soon."
    });

  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
  }
