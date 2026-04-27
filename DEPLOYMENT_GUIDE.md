# Deployment Guide for cleaningmonterey.com

## Quick Start

Your On-The-Spot website is ready to deploy. Follow these steps to go live today.

## Step 1: Verify Domain Setup with Bluehost

Contact Bluehost support and confirm:
- ✅ You can point cleaningmonterey.com to a different hosting provider
- ✅ You have access to DNS/nameserver settings
- ✅ They support custom nameservers or CNAME records

## Step 2: Deploy via Manus (5 minutes)

1. **Open the Management UI** — Click the panel icon in the top-right of the dev preview
2. **Click "Publish"** button (top-right header)
3. **Select your domain** — Choose cleaningmonterey.com from the domain settings
4. **Confirm deployment** — Your site will be live at a temporary Manus URL

## Step 3: Point cleaningmonterey.com to Manus

Once deployed, Manus will provide you with:
- **Nameservers** (if using full domain delegation)
- **CNAME record** (if using DNS CNAME)

### Option A: Full Nameserver Delegation (Recommended)

1. Log into Bluehost account
2. Go to Domain Management → cleaningmonterey.com
3. Update nameservers to Manus nameservers (provided after publishing)
4. Wait 5-30 minutes for DNS propagation
5. Visit cleaningmonterey.com — should be live!

### Option B: CNAME Record (If Bluehost requires it)

1. Log into Bluehost DNS settings
2. Add CNAME record pointing to Manus (details provided after publishing)
3. Wait 5-30 minutes for DNS propagation
4. Visit cleaningmonterey.com — should be live!

## Step 4: Initialize Database (Important!)

Before your site is fully functional, initialize the database:

```bash
pnpm db:push
```

This creates the gallery tables needed for the image upload feature.

## Verification Checklist

- [ ] cleaningmonterey.com loads without errors
- [ ] All pages (Home, Services & Prices, Gallery, Contact) are accessible
- [ ] Gallery page loads (images may be empty until you upload)
- [ ] Phone number (831-383-0791) is clickable on all pages
- [ ] Navigation menu works on mobile and desktop
- [ ] Contact form is functional

## Troubleshooting

### Domain Not Resolving

- Wait 10-30 minutes for DNS propagation
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Try in an incognito/private window
- Check DNS propagation at https://dnschecker.org

### Gallery Not Working

- Ensure `pnpm db:push` was run
- Check browser console for errors (F12)
- Verify database credentials are set

### Images Not Uploading

- Check file size (must be under 5MB)
- Verify storage credentials are configured
- Check browser console for error messages

## Next Steps After Going Live

1. **Upload Portfolio Photos** — Add before/after photos to the Gallery
2. **Monitor Performance** — Check the Dashboard in Management UI
3. **Test Forms** — Verify contact form submissions work
4. **Share with Clients** — Send cleaningmonterey.com link to prospects

## Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review browser console (F12) for error messages
3. Contact Manus support through the Management UI

---

**Estimated Time to Live:** 30 minutes from clicking Publish
**No additional costs:** Hosting is included free with Manus
