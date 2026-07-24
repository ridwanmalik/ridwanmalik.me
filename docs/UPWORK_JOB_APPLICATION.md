# Upwork Job Application Guide

Reference for applying to Next.js / Full Stack jobs on Upwork via Playwright automation.

---

## User Preferences

- **Rate:** $25/hr (hourly) — for fixed price, judge by scope
- **Job types:** Both hourly and fixed price are OK
- **Preferred clients:** Europe or America — skip Africa and Asia
- **Requirement:** Payment verified clients only
- **Cover letter:** Always write a custom cover letter per job
- **Target:** 10 applications per session
- **Portfolio URL:** `ridwanmalik.me` — **NOT live yet, do NOT include in proposals**

---

## Connect Budget

- Each "Expert" level job costs **16–26 connects**
- Check connect balance before starting: go to `https://www.upwork.com/nx/find-work/`
- With 42 connects, only ~2 applications are possible at the Expert tier
- If connects run low, inform the user before applying

---

## Application Process (Step by Step)

### 1. Find Jobs
- Go to Upwork job search, filter by: Next.js, React, Full Stack
- Check each job for:
  - ✅ Payment verified badge
  - ✅ Client country (Europe/America)
  - ❌ Skip if Africa or Asia
  - ✅ Either hourly or fixed price

### 2. Write Cover Letter
- Always custom — reference the specific job, tech stack, and client's product
- Mention relevant experience: 8+ years, Next.js, React, React Native, Node.js, Laravel, TypeScript
- Keep it concise and conversational, not templated
- **Do NOT include `ridwanmalik.me`** — portfolio is not live yet

### 3. Hourly Proposals
- Submit button is labeled **"Send for X Connects"** (not "Submit proposal")
- Rate field: enter `25` for $25/hr
- **Rate increase fields:** If a "Select a frequency" dropdown appears, select **"Never"** — leaving it untouched or opening without selecting triggers required field errors
- Screening questions are **separate textarea fields**, not part of the cover letter — fill each one individually (`textarea >> nth=1` through `nth=5`)

### 4. Fixed Price Proposals
- After submitting, a **"3 things you need to know"** dialog appears
- Must check **"Yes, I understand."** checkbox, then click **"Continue"** to complete submission
- Milestone form:
  - Description: use `browser_type` (Playwright `fill()`) — not `nativeSetter` + `dispatchEvent`, which doesn't register in React state
  - "By milestone" radio: click `label:has(input[value="milestone"])` — the label intercepts pointer events on the input
  - Date picker: use `getByRole("gridcell", { name: "Saturday, August 08," })` style selectors — `td:has-text("8")` fails strict mode

---

## Known Errors & Fixes

| Error | Fix |
|---|---|
| Milestone description not registering ("A description is needed") | Use `browser_type` / `fill()` instead of `nativeSetter` |
| "By milestone" radio click timed out | Click the `<label>` wrapper, not the `<input>` directly |
| Date picker `td:has-text("8")` fails strict mode | Use `getByRole("gridcell", { name: "Saturday, August 08," })` |
| Screening questions missing | Fill each separately: `textarea >> nth=1` through `nth=5` |
| Rate increase field shows required error | Open dropdown and select "Never" |

---

## Applications History

| Date | Job | Client Country | Type | Amount | Proposal ID |
|---|---|---|---|---|---|
| 2026-06-19 | Origen Digital — Next.js + Supabase | Colombia 🇨🇴 | Fixed | $3,000 | 2068052508533100545 |
| 2026-06-19 | Full-Stack Developer for Web App | USA 🇺🇸 | Hourly | $15–35/hr | 2068053328861294593 |
| 2026-06-21 | Senior Software Engineer / Technical Lead (Clone.Store/Blocky) | USA 🇺🇸 | Hourly | $40–50/hr | 2068487306680909825 |

---

## Resume / Profile Summary (for cover letters)

- **8+ years** of full stack development experience
- **Stack:** Next.js, React, React Native, Node.js, Laravel, TypeScript, Tailwind CSS, Firebase, Supabase, MySQL, Docker
- **Notable projects:** Scouty (scouty.io), RealEzy (realezy.com), SENSE HAIR (sensehair.nl), ETS Telco (etstelco.com)
- **Current roles:** Senior Full Stack Developer at Source Expert (remote), Software Developer at Oxford International School (part-time)
- See `docs/RESUME.md` for full resume details
