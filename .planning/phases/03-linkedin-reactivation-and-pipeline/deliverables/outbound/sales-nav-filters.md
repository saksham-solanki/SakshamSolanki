# Sales Navigator Filter Specifications

**Exact targeting criteria for PE firms and funded startups.**

---

## 1. PE Firm Saved Search

### Filter Configuration

| Filter | Value |
|--------|-------|
| **Saved Search Name** | "PE - Operating Partners & Portfolio Ops" |
| **Job Titles** | Operating Partner, Portfolio Operations, VP of Value Creation, VP Operations, Managing Director, Partner |
| **Seniority Level** | VP, CXO, Director, Partner |
| **Company Type** | Privately Held |
| **Industry** | Financial Services, Investment Management, Venture Capital & Private Equity |
| **Company Headcount** | 11-50, 51-200 (for portfolio companies) |
| **Posted on LinkedIn** | Last 30 days |
| **Geography** | United States, United Kingdom, India |
| **Changed Jobs** | In the past 90 days (catches new operating partner hires) |

### Boolean Search String

Use in the "Keywords" field or "Title" field:

**Title Boolean:**
```
"Operating Partner" OR "Portfolio Operations" OR "VP of Value Creation" OR "Value Creation" OR "Portfolio Company Operations"
```

**Keyword Boolean (broader reach):**
```
("operating partner" OR "portfolio operations" OR "value creation") AND ("private equity" OR "portfolio company")
```

### Alert Settings

- **New lead alerts:** ON -- Daily email notification when new people match this search
- **Job change alerts:** ON -- Notifies when saved leads change roles (key trigger event)
- **Posted content alerts:** ON -- See when saved leads post (engagement opportunity)

### Notes

- PE firms themselves are small (10-50 people). The operating partners and managing directors ARE the firm.
- Portfolio company CEOs are a SEPARATE search (see below).
- Save individual leads, not just the search. This enables trigger event tracking per person.

---

## 2. PE Portfolio Company CEO Saved Search

### Filter Configuration

| Filter | Value |
|--------|-------|
| **Saved Search Name** | "PE Portfolio - CEOs & COOs" |
| **Job Titles** | CEO, COO, President, General Manager |
| **Seniority Level** | CXO, Owner |
| **Company Type** | Privately Held |
| **Company Headcount** | 50-200, 201-500 |
| **Industry** | All (portfolio companies span industries) |
| **Posted on LinkedIn** | Last 30 days |
| **Geography** | United States, United Kingdom, India |
| **Keywords** | "PE-backed" OR "private equity" OR "portfolio company" OR "board of directors" |

### Boolean Search String

**Keyword Boolean:**
```
("PE-backed" OR "private equity-backed" OR "portfolio company") AND ("CEO" OR "COO" OR "President")
```

### Alert Settings

- **New lead alerts:** ON -- Daily
- **Job change alerts:** ON -- New CEO at PE-backed company = strongest trigger event
- **Company news alerts:** ON -- Tracks restructuring, acquisitions, and growth announcements

---

## 3. Funded Startup Saved Search

### Filter Configuration

| Filter | Value |
|--------|-------|
| **Saved Search Name** | "Startups - Series A-C CEOs & CTOs" |
| **Job Titles** | CEO, CTO, VP Engineering, Co-founder, Head of Product, VP Product |
| **Seniority Level** | CXO, VP, Owner |
| **Company Type** | Privately Held |
| **Company Headcount** | 11-50, 51-200 |
| **Company Headcount Growth** | Greater than 10% (signals active growth) |
| **Posted on LinkedIn** | Last 30 days |
| **Geography** | United States, United Kingdom, India |
| **Technologies Used** | (if available in your Sales Nav tier) AI, Machine Learning, Python, TensorFlow |

### Boolean Search String

**Title Boolean:**
```
"CEO" OR "CTO" OR "Co-founder" OR "VP Engineering" OR "Head of Product"
```

**Keyword Boolean (to narrow to funded startups):**
```
("Series A" OR "Series B" OR "Series C") AND ("AI" OR "machine learning" OR "automation" OR "artificial intelligence")
```

**Alternative keyword approach (if above is too narrow):**
```
("Series A" OR "Series B" OR "raised" OR "funding") AND ("SaaS" OR "platform" OR "product")
```

### Alert Settings

- **New lead alerts:** ON -- Daily
- **Funding events:** ON (if available) -- Tracks when saved accounts raise new rounds
- **Job change alerts:** ON -- New CTO at funded startup = trigger event
- **Company news alerts:** ON -- Tracks product launches and funding announcements

---

## 4. Step-by-Step: Creating a Saved Search

### Step 1: Access Lead Search

1. Log into Sales Navigator
2. Click "Lead filters" in the top navigation
3. You are now in the advanced search interface

### Step 2: Apply Filters

1. **Title:** Enter job titles from the filter configuration above. Use "Current" (not "Past").
2. **Geography:** Click "Geography" and add United States, United Kingdom, India.
3. **Company headcount:** Select the ranges from the filter configuration.
4. **Industry:** Select relevant industries.
5. **Posted on LinkedIn:** Set to "Last 30 days" -- this ensures you target active users who will see your engagement.
6. **Boolean/Keywords:** Enter the Boolean search string in the Keywords field.

### Step 3: Save the Search

1. Click "Save search" in the top right
2. Name it exactly as specified above (e.g., "PE - Operating Partners & Portfolio Ops")
3. Toggle ON "Get alerted about new results" -- this sends you daily updates when new people match

### Step 4: Set Up Alerts

1. Go to Sales Navigator homepage
2. Click "Alerts" in the left sidebar
3. Verify your saved searches appear with alert toggles ON
4. Set alert frequency to "Daily" (not weekly -- you need real-time trigger events)

### Step 5: Save Accounts (for Company-Level Tracking)

For PE firms and funded startups you want to track closely:
1. Search for the company in Sales Navigator
2. Click "Save" on the company profile
3. This enables: funding event alerts, leadership change alerts, job posting alerts, company news alerts
4. Save 50-100 accounts in each ICP category

---

## 5. Funding Event Monitoring

Sales Navigator tracks funding events for saved accounts, but supplement with:

### Crunchbase (Free Tier)

- Set up alerts for "Series A," "Series B," "Series C" funding rounds
- Filter by industry: SaaS, AI/ML, Healthcare, Fintech (or whatever verticals you target)
- Check daily -- funding announcements are the strongest trigger event for startup outbound

### LinkedIn News

- Follow relevant hashtags or topics: #funding, #seriesA, #seriesB
- Monitor company pages of VC firms that fund your ICP (Sequoia, a16z, etc.)
- Their portfolio announcements are your lead list

### Manual Check (5 min/day)

- Check Sales Navigator "Alerts" tab each morning
- Note new leads matching your saved searches
- Note job changes and funding events for saved leads/accounts
- Add actionable ones to your tracking sheet immediately

---

## 6. Weekly Search Maintenance

Every Sunday during the content batch session, spend 10 minutes on search maintenance:

1. **Review saved search results:** Are the leads still matching your ICP? Adjust filters if too broad or too narrow.
2. **Withdraw stale connection requests:** Any pending request older than 2 weeks with no response -- withdraw it. Keeps pending count under 500.
3. **Update saved accounts:** Add new companies from the week's discoveries. Remove companies that are clearly not a fit.
4. **Check acceptance rate:** If below 40%, review your connection request approach and reduce daily volume.
5. **Cross-reference with tracking sheet:** Ensure every prospect in Sales Navigator is also in your Google Sheets tracker with current status.
