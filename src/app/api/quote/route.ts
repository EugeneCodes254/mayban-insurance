import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      phone,
      email,
      coverType,
      vehicleValue,
      dependents,
      coverAmount,
      turnover,
      coverOption,
      planType,
    } = body;

    if (!name || !phone || !email || !coverType) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const details = [
      ["Insurance Type", coverType],
      ["Vehicle Value", vehicleValue],
      ["Dependents", dependents],
      ["Cover Amount", coverAmount],
      ["Annual Turnover", turnover],
      ["Cover Required", coverOption],
      ["Plan Type", planType],
    ].filter(([, value]) => value);

    const detailsHtml = details
      .map(
        ([label, value]) => `
          <tr>
            <td style="padding:10px 12px;border:1px solid #e5e7eb;font-weight:bold;">
              ${label}
            </td>
            <td style="padding:10px 12px;border:1px solid #e5e7eb;">
              ${value}
            </td>
          </tr>
        `
      )
      .join("");

    const { error } = await resend.emails.send({
      from: "Mayban Insurance <info@maybaninsurance.com>",
      to: ["info@maybaninsurance.com"],
      replyTo: email,
      subject: `New ${coverType} Quote Request - ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:700px;margin:auto;color:#1f2937;">

          <div style="background:#063f32;padding:24px;border-radius:12px 12px 0 0;">
            <h1 style="margin:0;color:white;font-size:24px;">
              Mayban Insurance
            </h1>
            <p style="margin:6px 0 0;color:#d5a23b;">
              New Quote Request
            </p>
          </div>

          <div style="padding:28px;background:#ffffff;border:1px solid #e5e7eb;">

            <p>
              A new insurance quote request has been submitted through the
              Mayban Insurance website.
            </p>

            <h2 style="color:#063f32;font-size:18px;margin-top:28px;">
              Customer Details
            </h2>

            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 12px;border:1px solid #e5e7eb;font-weight:bold;">
                  Full Name
                </td>
                <td style="padding:10px 12px;border:1px solid #e5e7eb;">
                  ${name}
                </td>
              </tr>

              <tr>
                <td style="padding:10px 12px;border:1px solid #e5e7eb;font-weight:bold;">
                  Phone
                </td>
                <td style="padding:10px 12px;border:1px solid #e5e7eb;">
                  ${phone}
                </td>
              </tr>

              <tr>
                <td style="padding:10px 12px;border:1px solid #e5e7eb;font-weight:bold;">
                  Email
                </td>
                <td style="padding:10px 12px;border:1px solid #e5e7eb;">
                  ${email}
                </td>
              </tr>
            </table>

            <h2 style="color:#063f32;font-size:18px;margin-top:28px;">
              Quote Details
            </h2>

            <table style="width:100%;border-collapse:collapse;">
              ${detailsHtml}
            </table>

            <div style="margin-top:30px;padding:16px;background:#f5f8f6;border-radius:10px;">
              <p style="margin:0;font-size:12px;color:#6b7280;">
                This enquiry was submitted through the Mayban Insurance
                website.
              </p>
            </div>

          </div>

        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send quote request.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your quote request has been received.",
    });
  } catch (error) {
    console.error("Quote API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
