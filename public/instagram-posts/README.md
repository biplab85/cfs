# Instagram Posts - Static Content

This folder contains static images from @chilliflakesstudio Instagram account.

## How to Update

1. Go to https://www.instagram.com/chilliflakesstudio/
2. Download the latest 12 posts as images
3. Save them as:
   - post-1.jpg (newest)
   - post-2.jpg
   - post-3.jpg
   - ... up to post-12.jpg (oldest)
4. Update the titles in `/src/app/api/instagram/route.ts` if needed

## For Automatic Live Updates

To enable automatic syncing with Instagram:

### Step 1: Create Facebook Developer App
1. Go to https://developers.facebook.com/
2. Create a new app (Consumer type)
3. Add "Instagram Basic Display" product

### Step 2: Configure Instagram Basic Display
1. In App Dashboard > Instagram Basic Display > Basic Display
2. Add OAuth Redirect URI: `https://yourdomain.com/auth/`
3. Add Deauthorize Callback URL
4. Add Data Deletion Request URL

### Step 3: Add Test User
1. Go to Roles > Test Users
2. Add the Instagram account @chilliflakesstudio as test user
3. The account owner must accept the invitation on Instagram

### Step 4: Generate Access Token
1. Go to Instagram Basic Display > User Token Generator
2. Generate token for the test user
3. This gives a short-lived token (1 hour)

### Step 5: Get Long-Lived Token
Exchange short-lived token for long-lived (60 days):

```bash
curl -X GET "https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret={app-secret}&access_token={short-lived-token}"
```

### Step 6: Add to Environment
Add to `.env.local`:
```
INSTAGRAM_ACCESS_TOKEN=your_long_lived_token_here
```

### Step 7: Token Refresh
Long-lived tokens expire in 60 days. Set up a cron job to refresh:

```bash
curl -X GET "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token={long-lived-token}"
```

## API Documentation
- https://developers.facebook.com/docs/instagram-basic-display-api/getting-started
- https://developers.facebook.com/docs/instagram-basic-display-api/reference/media
