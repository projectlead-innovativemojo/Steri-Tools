import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, company, message } = await request.json();

    const smtpUser = process.env.PRIVATEEMAIL_USER;
    const smtpPass = process.env.PRIVATEEMAIL_PASS; // Main mailbox password

    if (!smtpUser || !smtpPass) {
      console.error("Missing SMTP credentials:", {
        hasUser: !!smtpUser,
        hasPass: !!smtpPass,
      });
      return NextResponse.json(
        { error: "Email configuration error" },
        { status: 500 }
      );
    }

    const smtpConfigs = [
      {
        name: "Port 465 SSL",
        config: {
          host: "mail.privateemail.com",
          port: 465,
          secure: true,
          auth: { user: smtpUser, pass: smtpPass },
          tls: { minVersion: "TLSv1.2" as const, rejectUnauthorized: false },
        },
      },
      {
        name: "Port 587 STARTTLS",
        config: {
          host: "mail.privateemail.com",
          port: 587,
          secure: false,
          auth: { user: smtpUser, pass: smtpPass },
          tls: { minVersion: "TLSv1.2" as const, rejectUnauthorized: false },
        },
      },
    ];

    let transport;
    let lastError;

    for (const smtpConfig of smtpConfigs) {
      try {
        console.log(`Trying ${smtpConfig.name}...`);
        transport = nodemailer.createTransport(smtpConfig.config);
        await transport.verify();
        console.log(`✅ ${smtpConfig.name} - Connection successful!`);
        break;
      } catch (error: unknown) {
        const err = error as Error & {
          code?: string;
          response?: string;
          responseCode?: number;
          command?: string;
        };
        console.log(`❌ ${smtpConfig.name} - Failed:`, {
          code: err.code,
          response: err.response,
          responseCode: err.responseCode,
          command: err.command,
        });
        lastError = err;
        transport = null;
      }
    }

    if (!transport) {
      console.error("All SMTP configurations failed. Last error:", lastError);
      return NextResponse.json(
        {
          error:
            "All SMTP configurations failed. Check credentials and try again.",
          details:
            "Please verify your email credentials. Use your main mailbox password, not an app password.",
        },
        { status: 500 }
      );
    }

    const mailToAdmin = {
      from: smtpUser,
      to: `${smtpUser}, developer@innovativemojo.com`,
      subject: "New Contact Form Submission",
      text: `Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company}
Message: ${message}`,
    };

    const mailToUser = {
      from: smtpUser,
      to: email,
      subject: "Thank You for Reaching Out!",
      html: `<p>Dear ${name},</p>
             <p>Thank you for contacting SteriTools Global. We’ll get back to you as soon as possible.</p>
             <p>Best regards,<br/>SteriTools Global Team</p>`,
    };

    await transport.sendMail(mailToAdmin);
    await transport.sendMail(mailToUser);

    return NextResponse.json({ ok: true });
  } catch (error: unknown) {
    console.error("Error sending mail:", error);
    return NextResponse.json(
      { error: "Email sending failed" },
      { status: 500 }
    );
  }
}
