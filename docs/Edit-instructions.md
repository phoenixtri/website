# Editing the Phoenix Tri Website

This guide explains how to edit the website content using the GitHub web interface. No technical knowledge is required!

## Quick Start

1. Go to the [Phoenix Tri repository on GitHub](https://github.com/phoenixtri/website)
2. Log in with your GitHub account
3. Navigate to the file you want to edit
4. Click the pencil icon (✏️) to edit
5. Make your changes
6. Click "Commit changes" and add a brief description
7. The site will automatically update within a few minutes

---

## What Can I Edit?

### Easy to Edit (Data Files)

The simplest files to edit are in the `_data/` folder. These are YAML files that contain structured information.

#### `_data/races.yml` - Race Dates & Entry Links

Update race dates and entry links for the aquathlon series:

```yaml
upcoming:
  - date: "June 13"
    entry_url: "https://www.britishtriathlon.org/events/..."
  - date: "July 11"
    entry_url: "https://www.britishtriathlon.org/events/..."
```

#### `_data/raceresults.yml` - Race Results Links

Add new race results as they become available:

```yaml
results:
  - name: "Race 1 - Friday 27th June 2025"
    url: "http://www.raceclocker.com/..."
```

#### `_data/team.yml` - Coaches & Committee

Update team members, roles, and photos:

```yaml
coaches:
  - name: "John Smith"
    photo: "JohnSmith.jpg"  # Photo must be in assets/images/team/

committee:
  - name: "Jane Doe"
    role: "Chair"
    photo: "JaneDoe.jpg"
```

**Note:** Photo files must be uploaded to `assets/images/team/` before adding them here.

#### `_data/pricing.yml` - Membership Prices

Update membership types and prices:

```yaml
memberships:
  - name: "Triathlon Membership"
    price: 405
    period: "per year"
    description: "Full access to all sessions"
    featured: true  # Makes this card stand out
```

#### `_data/schedule.yml` - Training Schedule

Update the weekly training schedule:

```yaml
days:
  - day: "Tuesday"
    type: "run"      # Options: rest, run, swim, bike, fitness
    activity: "Running"
    details: "Track Session"
    location: "Guildford Spectrum"
```

#### `_data/contact.yml` - Contact Information

Update email addresses and social media links:

```yaml
contacts:
  - title: "General Enquiries"
    email: "info@phoenixtri.co.uk"

social:
  facebook: "https://www.facebook.com/PhoenixTriathlonGuildford"
  instagram: "https://www.instagram.com/phoenixtri_club"
```

#### `_data/sponsors.yml` - Aquathlon Sponsors

Manage sponsor logos:

```yaml
sponsors:
  - name: "Sponsor Name"
    logo: "sponsor_logo.png"  # Must be in assets/images/
    url: "https://sponsor-website.com"  # Optional
```

#### `_data/navigation.yml` - Menu Links

Update the main navigation menu:

```yaml
main:
  - title: "Aquathlon"
    url: "#aquathlon"
  - title: "Training"
    url: "#training"
```

---

### Markdown Pages

The following pages can be edited using Markdown (a simple text formatting language):

| Page | File Location |
|------|---------------|
| Race Info | `raceinfo/index.md` |
| Race Results | `raceresults/index.md` |
| Medical Declaration | `medical-declaration/index.md` |
| Race Entry | `raceentry/index.md` |

#### Basic Markdown Syntax

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet point
- Another bullet

1. Numbered list
2. Second item

[Link text](https://example.com)

![Image alt text](image-url.jpg)
```

---

## How to Upload Images

1. Navigate to `assets/images/` (or `assets/images/team/` for team photos)
2. Click "Add file" → "Upload files"
3. Drag and drop your images
4. Click "Commit changes"
5. Update the relevant data file to reference the new image

**Image Guidelines:**
- Team photos should be square (e.g., 400x400 pixels)
- Use descriptive filenames (e.g., `JohnSmith.jpg` not `IMG_1234.jpg`)
- JPG for photos, PNG for logos/graphics, SVG for icons

---

## Important YAML Formatting Rules

YAML files are sensitive to formatting. Follow these rules:

1. **Use spaces, not tabs** - Indent with 2 spaces
2. **Colons need a space after them** - `name: "Value"` not `name:"Value"`
3. **Quotes around text with special characters** - Use quotes if text contains `:`, `#`, or starts with special characters
4. **Keep the structure** - Don't remove the `-` before list items

### Example of Correct YAML

```yaml
team:
  - name: "John Smith"
    role: "Coach"
    photo: "JohnSmith.jpg"
```

### Common Mistakes

```yaml
# WRONG - missing space after colon
name:"John Smith"

# WRONG - using tabs instead of spaces
team:
	- name: "John"    # This uses a tab!

# WRONG - missing quotes around text with colon
activity: 9:00 AM Start    # Should be: "9:00 AM Start"
```

---

## Testing Your Changes

After committing changes:

1. Wait 2-3 minutes for GitHub Pages to rebuild
2. Visit https://phoenixtri.co.uk to see your changes
3. If something looks wrong, you can always revert by viewing the file history

---

## Need Help?

If you're unsure about making a change:

1. Make the change on a branch first (optional safety step)
2. Ask the webmaster for help
3. Check the file history to see how previous edits were made

---

## File Structure Overview

```
website/
├── _config.yml          # Site configuration (don't edit)
├── _data/               # ⭐ EASY TO EDIT - Data files
│   ├── contact.yml      # Contact emails & social links
│   ├── navigation.yml   # Menu items
│   ├── pricing.yml      # Membership prices
│   ├── raceinfo.yml     # Race day timing & route info
│   ├── raceresults.yml  # Results links
│   ├── races.yml        # Race dates & entry links
│   ├── schedule.yml     # Training schedule
│   ├── sponsors.yml     # Sponsor logos
│   └── team.yml         # Coaches & committee
├── _includes/           # Reusable page parts (don't edit)
├── _layouts/            # Page templates (don't edit)
├── assets/
│   ├── images/          # ⭐ Upload images here
│   │   └── team/        # ⭐ Team photos go here
│   ├── scripts/         # JavaScript (don't edit)
│   └── styles/          # CSS styles (don't edit)
├── index.html           # Homepage (advanced)
├── raceinfo/index.md    # ⭐ Race info page (Markdown)
├── raceresults/index.md # ⭐ Results page (Markdown)
├── medical-declaration/ # Redirect page
└── raceentry/           # Redirect page
```

**⭐ = Recommended for editing**
