# Send Contact Email Edge Function

This Supabase Edge Function handles contact form submissions and sends emails via Resend.

## Setup

### 1. Set Environment Variables

Set your Resend API key in Supabase:

```bash
supabase secrets set RESEND_API_KEY=your_resend_api_key_here
```

### 2. Update Email Configuration

Edit `index.ts` and update these values:
- `from`: Change to your verified domain email (e.g., `contact@yourdomain.com`)
- `to`: Change to your email address where you want to receive notifications

### 3. Deploy

Deploy the function to Supabase:

```bash
supabase functions deploy send-contact-email
```

### 4. Get Function URL

Your function will be available at:
```
https://YOUR_PROJECT_REF.supabase.co/functions/v1/send-contact-email
```

## API

### Request

```typescript
POST /functions/v1/send-contact-email
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message here"
}
```

### Response

Success (200):
```json
{
  "status": "Transmitted",
  "message": "Contact form submitted successfully"
}
```

Error (400/500):
```json
{
  "error": "Error message",
  "status": "Failed"
}
```

## Validation

The function validates:
- All fields (name, email, message) are present
- Email format is valid (basic regex check)

## CORS

CORS is enabled for all origins (`*`). Update `corsHeaders` in `index.ts` to restrict to your domain in production.
