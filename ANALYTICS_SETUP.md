# Analytics Setup Guide

This website now includes Google Analytics 4 (GA4) tracking to monitor visitor activity.

## Setup Steps

### 1. Create Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Start measuring" or "Admin" (gear icon)
3. Create a new account or use existing one
4. Create a new property with these settings:
   - Property name: "Danny J Diaz - Personal Site"
   - Reporting time zone: Your timezone
   - Currency: USD

### 2. Get Your Measurement ID
1. In your GA4 property, go to Admin → Data Streams
2. Click "Add stream" → "Web"
3. Enter your website URL: `https://danny305.github.io`
4. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### 3. Update Your Website
1. Open `index.html`
2. Find **both** instances of `G-XXXXXXXXXX` (lines 6 and 11)
3. Replace with your actual Measurement ID
4. Save and deploy

### 4. Verify Tracking
1. Visit your website
2. Go to Google Analytics → Reports → Realtime
3. You should see your visit appear within 30 seconds

## What Data is Collected?

Google Analytics tracks:
- **Page views**: Which pages visitors view
- **User demographics**: Location, device type, browser
- **Traffic sources**: How visitors find your site (Google, direct, referral)
- **Engagement**: Time on site, bounce rate, conversions
- **Custom Events** (configured):
  - Link clicks (all external and internal links)
  - Email clicks (which email address was clicked)
  - Social media clicks (LinkedIn, X/Twitter, GitHub, Google Scholar)
  - Publication title clicks
  - Scroll depth (5%, 10%, 25%, 50%, 75%, 100%)
  - Time on page (5s, 15s, 30s, 1m, 3m, 5m milestones)

## Tracking Traffic from LinkedIn and Social Media

To track where your traffic comes from (LinkedIn vs Socal Media), use **UTM parameters** in your links:

### For LinkedIn:
When sharing your website on LinkedIn, use this URL:
```
https://danny305.github.io?utm_source=linkedin&utm_medium=social&utm_campaign=profile
```

### For other:
When sharing your website on other platforms, use this URL (or create a bit.ly short link bit.ly/dannyjdiaz):
```
https://danny305.github.io/?utm_source=bio&utm_medium=referral&utm_campaign=connect
```

### UTM Parameters Explained:
- `utm_source`: Where the traffic comes from (linkedin, social media etc.)
- `utm_medium`: Type of traffic (social, email, referral, etc.)
- `utm_campaign`: Specific campaign name (profile, bio_link, etc.)

### How to View Traffic Sources in Google Analytics:

1. Go to **Reports** → **Acquisition** → **Traffic acquisition**
2. You'll see all traffic sources including:
   - Direct traffic (typed URL)
   - Organic search (Google, Bing)
   - Referral (other websites linking to you)
   - Your custom UTM sources (linkedin, social media, etc.)

3. For detailed UTM tracking:
   - Go to **Reports** → **Acquisition** → **User acquisition**
   - Add secondary dimension: "Session campaign" or "Session source"
   - Filter by "linkedin" or "social" to see specific metrics

### Example Analytics You Can See:
- How many visitors came from LinkedIn vs other social media platforms
- Which source converts better (more email clicks, longer time on page)
- Which links each group clicks on most
- Geographic distribution of each source
- Device usage (mobile vs desktop) per source

## Viewing Custom Events in GA4

To see your custom tracking events:

1. **Real-time Events**: Reports → Realtime → Event count by Event name
2. **All Events**: Reports → Engagement → Events
3. **Event Details**: Click on any event name to see:
   - How many times it was triggered
   - Which links were clicked most
   - Which emails get the most clicks
   - Scroll depth patterns

### Most Useful Reports:
- **Engagement → Events**: See all link clicks, email clicks, social clicks
- **Engagement → Pages and screens**: See which pages get most views
- **Acquisition → Traffic acquisition**: See LinkedIn vs social meida traffic
- **User → Demographics**: See visitor location and language
- **Tech → Device info**: See mobile vs desktop usage

## Privacy Considerations

Google Analytics is GDPR compliant but you may want to:
- Add a privacy policy page
- Consider cookie consent banner (required in EU)
- Use privacy-focused alternatives like Plausible or Simple Analytics

## Alternative: Plausible Analytics

For a privacy-focused, simpler alternative:

1. Sign up at [Plausible.io](https://plausible.io/) ($9/month)
2. Replace Google Analytics code with:

```html
<script defer data-domain="danny305.github.io" src="https://plausible.io/js/script.js"></script>
```

Benefits:
- No cookies, GDPR compliant by default
- Lightweight (< 1KB script)
- Simple, clean dashboard
- No need for cookie banners

## GitHub Pages Note

If hosting on GitHub Pages, tracking will work automatically once deployed. No additional configuration needed.
