// @ts-nocheck - Deno runtime, ignore TypeScript errors
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

serve(async (req) => {
    // Handle CORS preflight requests
    if (req.method === "OPTIONS") {
        return new Response("ok", { headers: corsHeaders });
    }

    try {
        // Parse request body
        const { name, email, message }: ContactFormData = await req.json();

        // Validation
        if (!name || !email || !message) {
            return new Response(
                JSON.stringify({
                    error: "Missing required fields",
                    status: "Failed",
                }),
                {
                    status: 400,
                    headers: { ...corsHeaders, "Content-Type": "application/json" },
                }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return new Response(
                JSON.stringify({
                    error: "Invalid email format",
                    status: "Failed",
                }),
                {
                    status: 400,
                    headers: { ...corsHeaders, "Content-Type": "application/json" },
                }
            );
        }

        // Send email via Resend
        const resendResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: `${name} <bryce@brycedigital.io>`, // Replace with your verified domain
                to: ["bryce@brycedigital.io"], // Replace with your email
                subject: `New Contact Form Submission from ${name}`,
                html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
            }),
        });

        if (!resendResponse.ok) {
            const errorText = await resendResponse.text();
            console.error("Resend API error:", errorText);
            console.error("Resend status:", resendResponse.status);

            // Parse error for better debugging
            let errorDetails = errorText;
            try {
                const errorJson = JSON.parse(errorText);
                errorDetails = errorJson.message || errorText;
            } catch (e) {
                // If not JSON, use raw text
            }

            return new Response(
                JSON.stringify({
                    error: `Failed to send email: ${errorDetails}`,
                    status: "Failed",
                }),
                {
                    status: 500,
                    headers: { ...corsHeaders, "Content-Type": "application/json" },
                }
            );
        }

        // Success response
        return new Response(
            JSON.stringify({
                status: "Transmitted",
                message: "Contact form submitted successfully",
            }),
            {
                status: 200,
                headers: { ...corsHeaders, "Content-Type": "application/json" },
            }
        );
    } catch (error) {
        console.error("Error processing request:", error);

        return new Response(
            JSON.stringify({
                error: "Internal server error",
                status: "Failed",
            }),
            {
                status: 500,
                headers: { ...corsHeaders, "Content-Type": "application/json" },
            }
        );
    }
});
