// api/send-email.js
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
export async function POST(request) {
  try {
    const body = await request.json();
    console.log(body);

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
      from: `"ポートフォリオサイト" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      replyTo: body.email,
      subject: `新しいお問い合わせ: ${body.subject}`,
      text: `
ポートフォリオサイトから新しいお問い合わせがありました。

送信者情報:
名前: ${body.name}
メールアドレス: ${body.email}

件名: ${body.subject}

お問い合わせ内容:
${body.contents}

---
このメールはポートフォリオサイトのお問い合わせフォームから自動送信されています。
  `,
      html: `
<h2>ポートフォリオサイトから新しいお問い合わせがありました。</h2>

<h3>送信者情報:</h3>
<p><strong>名前:</strong> ${body.name}</p>
<p><strong>メールアドレス:</strong> ${body.email}</p>

<h3>件名:</h3>
<p>${body.subject}</p>

<h3>お問い合わせ内容:</h3>
<p>${body.contents.replace(/\n/g, "<br>")}</p>

<hr>
<p><small>このメールはポートフォリオサイトのお問い合わせフォームから自動送信されています。</small></p>
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
