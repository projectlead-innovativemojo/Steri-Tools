import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, company, message } = await request.json();
    const smtpUser = "ChrisGT200@hotmail.com";
    const rawPass = "wjpe xvhl jvei ging"; // may include non-breaking spaces
    const smtpPass = rawPass.replace(/\s+/g, "");
    const transport = nodemailer.createTransport({
      service: "hotmail",
      authMethod: "LOGIN",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: { minVersion: "TLSv1.2" },
    });
    try {
      await transport.verify();
    } catch (e) {
      console.error("SMTP verify failed:", e);
      return NextResponse.json(
        { error: "SMTP authentication failed" },
        { status: 401 }
      );
    }
    const mailoptionsToAdmin = {
      from: smtpUser,
      to: `${smtpUser}, developer@innovativemojo.com`,
      subject: "Contact Form Submission",
      text: `Following is the new message:
      Name: ${name}
      Email: ${email}
      Phone:  ${phone}
      Company: ${company}
      Message:  ${message}
      `,
    };
    const mailoptionsToUser = {
      from: smtpUser,
      to: email,
      subject: "Thank You for reaching us!",
      html: `
        <p>Dear Mr. ${name},</p>
        <p>Thank you for reachng us. We'll get back to you as soon as possible</p>
        `,
    };
    await transport.sendMail(mailoptionsToAdmin);
    await transport.sendMail(mailoptionsToUser);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
