// api/send-email.js
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
export async function POST(request, response) {
  try {
    const body = await request.json();
    console.log(body);
    // const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.TO_EMAIL,
      subject: subject,
      text: `
        名前: ${body.name}
        メールアドレス: ${body.email}
        件名: ${body.subject},
        お問い合わせ内容:
        ${body.contents}
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      message: "メール送信に成功しました",
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "メール送信に失敗しました",
      status: 500,
    });
  }
}
