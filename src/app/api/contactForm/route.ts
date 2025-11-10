import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, company, message } = await request.json();

    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.PRIVATEEMAIL_USER,
        pass: process.env.PRIVATEEMAIL_PASS,
      },
    });

    const mailoptionsToAdmin = {
      from: email,
      to: ["chrissteritools@gmail.com", "developer@innovativemojo.com"],
      subject: "Contact Form Response",
      text: `Following is the new message:
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Company: ${company}
      Message: ${message}`,
    };

    const mailoptionsToUser = {
      from: "chrissteritools@gmail.com",
      to: email,
      subject: "Thank You for reaching us!",
      html: `
    Dear Mr. ${name},
    Thank you for contacting Steri Tools. We will respond to your message as soon as possible. 
`,
    };

    await transport.sendMail(mailoptionsToAdmin);

    await transport.sendMail(mailoptionsToUser);
    return NextResponse.json({ error: "" });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json({ "Server error": error });
  }
}
