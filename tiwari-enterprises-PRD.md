# Tiwari Enterprises

## Product Requirements Document (PRD)

**Website:** Premium Aluminium, Glass & Architectural Solutions\
**Market:** Pune and nearby areas, Maharashtra, India\
**Technology:** Astro + Tailwind CSS + TypeScript\
**Document version:** 1.0\
**Status:** Product and design requirements for implementation

------------------------------------------------------------------------

## 1. Product vision

Build a distinctive, premium digital presence for **Tiwari Enterprises**
that presents the business as an architectural aluminium and glass
solutions specialist---not as a generic fabrication contractor.

The website must communicate craftsmanship, material quality, precision,
architectural understanding and dependable project execution. Its
primary job is to turn relevant visitors in Pune and nearby areas into
qualified enquiries and site-visit conversations.

The experience must feel editorial, architectural and premium. It must
not look like a typical contractor template with a generic Home / About
/ Services / Gallery / Contact navigation bar and a sequence of
interchangeable cards.

### Product positioning

**Brand line:** Spaces. Crafted to Perfection.\
**Primary positioning:** Premium Aluminium, Glass & Architectural
Solutions.\
**Primary market:** Pune and nearby areas.\
**Primary services:** Aluminium Works and Glass Works.\
**Secondary services:** Steel Works, POP & False Ceiling, Interior
Solutions.

### Core experience principles

1.  **Show the work before talking about the company.** Lead with
    architecture, materials and real project photography.
2.  **Make navigation feel curated.** Use a small number of meaningful
    destinations and contextual pathways, not a long generic menu.
3.  **Prioritise the two core disciplines.** Aluminium and Glass receive
    the strongest visual and content hierarchy.
4.  **Use evidence, not inflated claims.** Do not invent years of
    experience, project counts, certifications, warranties, client logos
    or ratings.
5.  **Make enquiry effortless.** Every major section should provide a
    relevant next step without turning the entire website into repeated
    sales buttons.
6.  **Keep the interface calm.** Use restrained motion, strong
    typography, generous spacing and high-quality photography.

------------------------------------------------------------------------

## 2. Goals and success criteria

### Business goals

-   Generate qualified aluminium and glass project enquiries.
-   Encourage site-visit and quotation requests.
-   Present completed work in a credible, organised portfolio.
-   Explain product and service capabilities clearly.
-   Build trust with residential, commercial and
    architect/interior-design audiences.
-   Improve discoverability for relevant Pune-area searches.

### Visitor goals

Visitors should be able to: - Understand what Tiwari Enterprises
specialises in within a few seconds. - See the quality and type of work
through photography. - Find the right aluminium or glass solution. -
Understand the project process and what information is needed for a
quote. - Start an enquiry using a short, mobile-friendly form or
WhatsApp.

### Success metrics

Track these after analytics and enquiry handling are configured:

-   Qualified enquiry submissions.
-   Clicks on call and WhatsApp actions.
-   Quote-form completion rate.
-   Project-detail page visits.
-   Core service page engagement.
-   Organic impressions and clicks for Pune-focused searches.
-   Mobile performance and Core Web Vitals.

Do not set numerical conversion targets until baseline traffic and lead
data are available.

------------------------------------------------------------------------

## 3. Audiences and use cases

### Primary audiences

**Homeowners and renovators** - Need windows, sliding doors, glass
railings, partitions or other residential solutions. - Want to see
examples, finishes and practical options. - Often browse on mobile and
prefer WhatsApp or a phone call.

**Commercial property owners and facility teams** - Need office
partitions, shopfronts, glass installations, aluminium systems or
refurbishment work. - Need clarity about scope, site assessment and
execution.

**Architects, interior designers and contractors** - Need a capable
execution partner. - Want to understand materials, detailing,
installation scope and previous work.

### Main user journeys

1.  Search result → relevant solution page → related project → enquiry.
2.  Homepage → featured project → project details → request a similar
    solution.
3.  Homepage → aluminium or glass discipline → product/solution detail →
    quote request.
4.  WhatsApp action → pre-filled enquiry context.
5.  Local search → location-relevant page → call or site-visit enquiry.

------------------------------------------------------------------------

## 4. Information architecture: curated, not conventional

The website must not use a generic navigation structure where every page
is a standard corporate page. The primary navigation should be
intentionally short and brand-led.

### Primary navigation

Use these labels:

-   **Work** --- completed projects and selected case studies.
-   **Solutions** --- aluminium, glass and supporting capabilities.
-   **Approach** --- consultation, measurement, proposal, execution and
    handover.
-   **Studio** --- the business, its values, capabilities and service
    area.
-   **Start a Project** --- prominent enquiry action, styled as the
    primary CTA.

The logo returns to the homepage. Do not add separate primary-nav items
for Home, Gallery, About Us or Contact Us.

### Recommended routes

  -----------------------------------------------------------------------
  Route                               Purpose
  ----------------------------------- -----------------------------------
  `/`                                 Editorial brand-led homepage

  `/work`                             Selected projects and project
                                      categories

  `/work/[slug]`                      Individual project story / case
                                      study

  `/solutions`                        Overview of all capabilities

  `/solutions/aluminium`              Aluminium systems and applications

  `/solutions/glass`                  Glass solutions and applications

  `/solutions/steel`                  Secondary steel work

  `/solutions/ceilings`               POP and false-ceiling work

  `/solutions/interiors`              Secondary interior solutions

  `/approach`                         Project journey, quality checks and
                                      coordination

  `/studio`                           Company profile, values,
                                      capabilities and Pune service area

  `/start-a-project`                  Enquiry form and contact methods

  `/privacy`                          Privacy policy

  `/thank-you`                        Confirmed enquiry acknowledgement
  -----------------------------------------------------------------------

### Navigation behaviour

-   Desktop: compact header with logo, four text destinations and one
    strong "Start a Project" CTA.
-   Mobile: restrained full-screen or large overlay menu; avoid a
    cramped dropdown list.
-   "Solutions" may open a structured mega-panel organised into
    **Aluminium**, **Glass** and **Other Capabilities**.
-   "Work" should expose category filters and featured projects.
-   Header can begin transparent over the hero and become a solid
    charcoal surface after scrolling.
-   Use clear active states, visible focus states and
    keyboard-accessible interactions.
-   Do not make every navigation item a pill or button.

### Distinctive page experience

Pages should have different compositions based on their purpose: -
Homepage: cinematic editorial storytelling. - Work index: image-led
portfolio with filters and generous image scale. - Project detail:
case-study layout with large photography, project brief, scope and
materials. - Solution pages: product/architecture editorial with
technical information and application imagery. - Approach: clear process
timeline and practical expectations. - Studio: brand story, capabilities
and service geography. - Start a Project: focused, calm conversion page
with a short form.

------------------------------------------------------------------------

## 5. Visual identity and design system

### Brand direction

Premium architectural, industrial and contemporary. Use the existing
approved TE logo without redesigning it as part of website
implementation.

### Colour tokens

  Token          Value       Usage
  -------------- ----------- ----------------------------------
  `ink`          `#151B24`   Main dark background
  `navy`         `#202C39`   Secondary dark surfaces
  `navy-soft`    `#293847`   Layered dark sections
  `gold`         `#B99A65`   Restrained premium accent
  `gold-light`   `#D1B783`   Hover/highlight accent
  `paper`        `#F5F5F2`   Warm light background
  `muted`        `#D8DCE0`   Borders and subdued surfaces
  `teal`         `#315B66`   Secondary accent, used sparingly
  `white`        `#FFFFFF`   Content surfaces and contrast

### Typography

-   Display: Barlow Condensed or a similarly confident industrial
    display family.
-   Body/UI: Inter or a highly legible neutral sans-serif.
-   Headings: strong scale contrast, compact line-height and controlled
    uppercase use.
-   Body: comfortable reading size, clear line length and generous
    line-height.
-   Avoid using condensed display type for paragraphs or form controls.

### Layout and components

-   Desktop content width: approximately 1200--1320px, with selected
    full-bleed photography.
-   Use a consistent spacing scale and responsive gutters.
-   Corner radii: restrained; avoid making every section/card heavily
    rounded.
-   Borders: thin, low-contrast, architectural.
-   Shadows: subtle and functional only.
-   Use a consistent grid, but vary compositions to avoid repetitive
    card layouts.
-   Use large image crops and strong alignment; avoid decorative
    clutter.

### Photography requirements

The hero should feature a luxury modern villa with a clear view of
aluminium framing and expansive glass. The visual should feel like real
architectural photography, not a CGI-heavy render.

Image standards: - Prioritise actual Tiwari Enterprises projects once
supplied. - Keep sample stock images clearly marked as temporary during
development. - Do not imply stock imagery is a completed company
project. - Use landscape and portrait crops suited to each section. -
Optimise images to AVIF/WebP where supported. - Provide meaningful alt
text for informative images; decorative images use empty alt text. -
Never stretch images or use low-resolution images in large hero areas.

------------------------------------------------------------------------

## 6. Homepage requirements

The homepage must not be a generic stack of ten identical content
sections. Use an editorial rhythm with varied backgrounds, image scale
and content density.

### H01 --- Header and navigation

**Purpose:** Establish the brand and make the main journeys
discoverable.

Requirements: - Existing TE logo asset. - Brand name wordmark alongside
logo only if required for legibility. - Work, Solutions, Approach,
Studio and Start a Project. - Transparent over hero; solid charcoal on
scroll. - Mobile overlay menu with accessible open/close behaviour. -
Keyboard and screen-reader support.

### H02 --- Hero

**Purpose:** Communicate category, quality and location immediately.

Content direction: - Eyebrow: `ALUMINIUM & GLASS SOLUTIONS · PUNE` -
Headline: `Designed for Modern Spaces.` - Supporting line: premium
aluminium and glass solutions for contemporary homes and commercial
spaces. - Primary CTA: `Explore Our Work` - Secondary CTA:
`Start a Project`

Requirements: - Full-width architectural image of a luxury modern villa
with aluminium and glass facade. - Dark overlay only as needed for
readable text. - One clear hero composition; do not use an auto-rotating
carousel. - Hero must remain compelling on mobile with an intentional
crop and readable type. - Load hero image with high priority and correct
dimensions.

### H03 --- Brand statement

**Purpose:** Explain the Tiwari approach without a long corporate
introduction.

Content theme: - `Details make the difference.` - Short statement about
fit, finish, functionality and understanding each space. - Link to
Studio or Approach.

Do not make unsupported claims about company history or scale.

### H04 --- Core disciplines

**Purpose:** Make Aluminium and Glass the unmistakable primary services.

Requirements: - Two large editorial feature panels: Aluminium and
Glass. - Each panel includes a relevant image, concise description and a
contextual link. - Aluminium and Glass must receive more visual area
than secondary services. - Secondary capabilities appear in a smaller,
quieter supporting row: Steel, POP & False Ceiling, Interior Solutions.

### H05 --- Selected work

**Purpose:** Demonstrate real execution quality.

Requirements: - Feature 3--6 projects when real project content is
available. - Project cards show title, category and verified location. -
Filters may include Residential, Commercial, Aluminium and Glass. - Each
project links to a case-study page. - Avoid fake project names, fake
client names or fabricated locations. - If there are not enough real
projects, show a smaller honest selection rather than filling the grid
with stock images.

### H06 --- Craft and execution statement

**Purpose:** Explain what customers should expect from the business.

Possible themes: - Thoughtful solutions. - Attention to measurement and
finishing. - Clear material discussion. - Installation coordination.

These are positioning themes, not claims of certifications or guaranteed
outcomes. Final wording must be approved by the business.

### H07 --- Approach preview

**Purpose:** Reduce uncertainty about what happens after enquiry.

Steps: 1. Consultation. 2. Site assessment and measurement. 3. Scope and
quotation. 4. Fabrication and installation. 5. Review and handover.

Link to the full Approach page.

### H08 --- Testimonial / trust area

**Purpose:** Add genuine social proof.

Requirements: - Use only authentic customer reviews with permission. -
Do not fabricate star ratings, quotes, names or Google review counts. -
If no approved testimonials are available, replace this section with a
factual "What to expect" section.

### H09 --- Project CTA

**Purpose:** Invite visitors to discuss a project.

Headline direction: `Let's shape your next space.`

CTA: `Start a Project`

### H10 --- Footer

Include: - Brand mark and concise positioning. - Solutions links. -
Work, Approach and Studio links. - Verified phone, email and business
address once provided. - Service area: Pune and only those nearby
locations actually served. - Social links only when official accounts
are supplied. - Privacy policy and copyright.

------------------------------------------------------------------------

## 7. Solution page requirements

### Aluminium solution page

Cover relevant services only after confirming actual business
capability. Potential content categories: - Aluminium sliding windows. -
Aluminium hinged doors. - Aluminium partitions. - Aluminium frames and
custom systems. - Other verified aluminium applications.

Each product/solution detail should explain: - What it is. - Where it is
typically used. - Available configurations (only confirmed options). -
Finish and colour choices (only confirmed options). - Hardware/profile
information where available. - Care or maintenance notes where
appropriate. - Related completed projects. - Enquiry CTA.

### Glass solution page

Potential categories, subject to capability confirmation: - Toughened
glass. - Glass partitions. - Glass railings. - Shower enclosures. -
Glass facades and shopfronts. - Other custom glass installations.

For each, explain use case, available glass type/thickness, safety
requirements and installation scope only where verified by the business.

### Secondary solution pages

Steel Works, POP & False Ceiling and Interior Solutions should be
accessible but visually subordinate to Aluminium and Glass.

Do not create thin SEO pages with repeated generic copy. Each page must
have unique, useful information and genuine examples or be held back
until enough content is available.

------------------------------------------------------------------------

## 8. Work / portfolio requirements

### Work index

-   Image-led portfolio.
-   Filters: All, Residential, Commercial, Aluminium, Glass.
-   Responsive grid with varied image ratios.
-   Clear empty state when a category has no projects.
-   No fake counters or fabricated project totals.

### Project detail / case study

Recommended fields: - Project title. - Project type. - Verified location
(optional). - Project summary. - Customer requirement / brief (only with
permission). - Scope of work. - Materials and systems used (verified). -
Project photographs. - Related projects. - `Discuss a similar project`
CTA.

Use Astro content collections or typed local data for project content.
Keep the content model ready for a future CMS without requiring one for
V1.

------------------------------------------------------------------------

## 9. Approach page requirements

Explain the actual customer journey in plain language.

Required stages: 1. Initial conversation and requirements. 2. Site visit
and measurements, where required. 3. Material and solution discussion.
4. Quotation and scope confirmation. 5. Fabrication, coordination and
installation. 6. Final review and handover.

Include: - What information customers should prepare. - What may affect
quotation timelines. - How scope changes are handled (business policy to
be supplied). - How customers can contact the team.

Do not promise fixed turnaround times until the business confirms them.

------------------------------------------------------------------------

## 10. Studio page requirements

This page replaces the conventional "About Us" template with a more
editorial company profile.

Content: - What Tiwari Enterprises does. - Its focus on Aluminium and
Glass. - Supporting capabilities. - Working philosophy. - Types of
projects served. - Pune and nearby service coverage. - Real
team/workshop/site photographs if available.

Do not publish invented founding dates, team sizes, years of experience,
certifications, awards or client lists.

------------------------------------------------------------------------

## 11. Start a Project / enquiry requirements

### Form fields

Required: - Full name. - Phone number. - Service required. - Project
location. - Brief project description. - Consent to be contacted.

Optional: - Email. - Property/project type. - Approximate dimensions. -
Preferred contact method. - Photo or drawing attachment (future
enhancement; not required for V1).

### Service options

-   Aluminium Works.
-   Glass Works.
-   Steel Works.
-   POP & False Ceiling.
-   Interior Solutions.
-   Not sure / Need guidance.

### Behaviour

-   Validate on client and server.
-   Normalise and validate Indian phone numbers without rejecting valid
    formats unnecessarily.
-   Add spam protection and rate limiting at the API layer.
-   Use clear inline error messages.
-   Preserve entered values when validation fails.
-   Show a success state only after the backend confirms successful
    receipt.
-   On confirmed submission, redirect to `/thank-you` or show an
    equivalent accessible confirmation.
-   Provide a WhatsApp alternative with a pre-filled message.
-   Do not expose secrets or API credentials in client-side code.

### Backend integration

Recommended V1: - Astro static frontend. - Cloudflare Worker/Hono API
endpoint. - Cloudflare D1 for enquiry records if the business wants a
lead database. - Email notification to the business after successful
submission. - Optional customer acknowledgement email. - WhatsApp
click-to-chat as an immediate alternative; automated WhatsApp messaging
requires the appropriate approved integration.

Suggested enquiry record fields: - `id` - `name` - `phone` - `email` -
`service` - `project_location` - `project_type` - `dimensions` -
`message` - `consent` - `source_page` - `status` - `created_at`

Do not store unnecessary personal data. Define access controls and
retention policy before production use.

------------------------------------------------------------------------

## 12. Local SEO and discoverability

### Geographic strategy

Primary target: Pune, Maharashtra.

Nearby areas may include Baner, Wakad, Hinjewadi, Kothrud, Hadapsar and
Pimpri-Chinchwad only if the business confirms service coverage.

### SEO requirements

-   Unique title and meta description per indexable page.
-   Canonical URLs.
-   XML sitemap.
-   Robots.txt.
-   Open Graph metadata.
-   Semantic HTML landmarks and heading hierarchy.
-   Descriptive image alt text.
-   Internal links between solutions and relevant projects.
-   Breadcrumbs on nested pages.
-   Appropriate LocalBusiness / relevant structured data with verified
    business information only.
-   Consistent name, address and phone details across the site and
    Google Business Profile.
-   Google Search Console and analytics setup after consent/privacy
    review.
-   No doorway pages or location pages with duplicated content.

### Suggested keyword themes

-   Aluminium windows Pune.
-   Aluminium doors Pune.
-   Aluminium fabrication Pune.
-   Glass works Pune.
-   Glass partitions Pune.
-   Glass railing Pune.
-   Aluminium and glass solutions Pune.

Use natural language; do not stuff exact-match keywords into headings.

------------------------------------------------------------------------

## 13. Technical architecture

### Stack

-   Astro 5 or current stable compatible release.
-   Tailwind CSS 4.
-   TypeScript strict mode.
-   Astro content collections for solutions and work.
-   Cloudflare Pages for static hosting.
-   Cloudflare Worker/Hono for enquiry API.
-   Cloudflare D1 for lead storage if required.

### Rendering

-   Pre-render public content pages as static HTML.
-   Use client-side JavaScript only for interactions that need it.
-   Avoid large client-side frameworks for a mostly content-driven
    website.
-   Do not add a CMS until editing needs justify it.

### Proposed code organisation

``` text
src/
  components/
    shell/
      SiteHeader.astro
      NavigationOverlay.astro
      SiteFooter.astro
    home/
      Hero.astro
      BrandStatement.astro
      CoreDisciplines.astro
      SelectedWork.astro
      CraftStatement.astro
      ApproachPreview.astro
      TrustSection.astro
      ProjectCTA.astro
    work/
      WorkGrid.astro
      WorkFilters.astro
      ProjectCard.astro
    solutions/
      SolutionHero.astro
      SolutionOverview.astro
      ProductFeature.astro
      RelatedWork.astro
    forms/
      ProjectEnquiryForm.astro
    ui/
      Button.astro
      Eyebrow.astro
      SectionIntro.astro
      Breadcrumbs.astro
  content/
    config.ts
    solutions/
    work/
  layouts/
    SiteLayout.astro
    EditorialLayout.astro
  pages/
    index.astro
    work/
    solutions/
    approach.astro
    studio.astro
    start-a-project.astro
    privacy.astro
    thank-you.astro
  styles/
    tokens.css
    global.css
  utils/
    seo.ts
    validation.ts
public/
  images/
    brand/
    hero/
    solutions/
    work/
```

### Quality requirements

-   Responsive from 360px mobile widths through large desktop.
-   Semantic HTML and accessible controls.
-   Keyboard-operable navigation and forms.
-   Visible focus indicators.
-   Sufficient text/background contrast.
-   Respect reduced-motion preferences.
-   No layout shift caused by missing image dimensions.
-   Lazy-load below-the-fold images.
-   Prioritise hero image loading.
-   Avoid unnecessary animation libraries.
-   Use optimised local image assets in production.

### Performance targets

Targets for production testing, not assumed results: - Lighthouse
Performance: 90+ on representative mobile and desktop test runs. -
Lighthouse Accessibility: 95+. - Lighthouse SEO: 95+. - Lighthouse Best
Practices: 95+. - Core Web Vitals: aim for LCP ≤ 2.5s, INP ≤ 200ms, CLS
≤ 0.1 at the 75th percentile when field data becomes available.

------------------------------------------------------------------------

## 14. Analytics and event tracking

Track only events needed to understand the enquiry journey:

-   `project_cta_click`
-   `solution_view`
-   `work_project_view`
-   `enquiry_form_start`
-   `enquiry_form_error`
-   `enquiry_form_success` (only after API success)
-   `phone_click`
-   `whatsapp_click`

Do not send phone numbers, names, messages or other personally
identifiable form values to analytics.

------------------------------------------------------------------------

## 15. Content and asset requirements from the business

The following inputs are needed before production launch.

### Brand

-   Approved transparent TE logo (SVG preferred, PNG acceptable).
-   Brand name spelling and approved tagline.
-   Official social profile URLs.

### Business details

-   Correct business phone and WhatsApp number.
-   Business email.
-   Full business address, if it should be public.
-   Confirmed service areas around Pune.
-   Business working hours.
-   Preferred enquiry notification recipient.

### Services and products

-   Confirmed aluminium product/service list.
-   Confirmed glass product/service list.
-   Available profiles, glass types, thicknesses, finishes and hardware.
-   Secondary service scope.
-   Any safety, installation or warranty policies that can be publicly
    stated.

### Portfolio

For each project: - Project name or approved anonymised title. - Project
category. - Location (if approved). - Scope of work. - Materials used. -
5--10 good photographs where possible. - Permission to publish photos
and customer/project references.

### Trust material

-   Genuine customer reviews with permission.
-   Verifiable certifications, if any.
-   Approved company introduction.
-   Any genuine project credentials.

------------------------------------------------------------------------

## 16. Out of scope for V1

Unless separately approved, V1 will not include: - Customer login or
account portal. - Online payments. - Product configurator or 3D room
visualiser. - Instant automated price calculator. - Inventory or ERP
integration. - Full CRM dashboard. - Automated WhatsApp campaigns. -
Multilingual content management. - CMS administration panel.

These may be considered after the core website and enquiry workflow are
stable.

------------------------------------------------------------------------

## 17. Acceptance criteria

V1 is ready for launch only when all applicable criteria pass:

### Brand and design

-   [ ] Approved TE logo is used without unauthorised alteration.
-   [ ] Charcoal, navy, metallic gold and warm off-white tokens are
    consistent.
-   [ ] Website does not resemble a generic contractor template.
-   [ ] Primary navigation uses Work, Solutions, Approach, Studio and
    Start a Project.
-   [ ] Aluminium and Glass are visually prioritised over secondary
    services.
-   [ ] Hero communicates premium architectural aluminium and glass
    solutions in Pune.

### Content

-   [ ] No fabricated experience, statistics, testimonials, ratings or
    certifications.
-   [ ] Temporary stock photos are replaced or clearly not presented as
    company projects.
-   [ ] All public business details are verified.
-   [ ] Service descriptions match actual business capabilities.
-   [ ] Every published project has approved information and images.

### Functionality

-   [ ] All navigation and contextual links work.
-   [ ] Mobile menu works with keyboard and screen readers.
-   [ ] Enquiry form validates correctly.
-   [ ] API stores or forwards enquiries successfully.
-   [ ] Success is shown only after confirmed API receipt.
-   [ ] Phone and WhatsApp links use verified contact details.
-   [ ] Privacy policy is published.

### SEO and performance

-   [ ] Unique metadata and canonical URL on each indexable page.
-   [ ] Sitemap and robots.txt are valid.
-   [ ] Structured data contains verified details only.
-   [ ] Images have correct dimensions and suitable alt text.
-   [ ] Mobile and desktop layouts are tested.
-   [ ] Accessibility and Lighthouse checks are completed.
-   [ ] Production build completes without errors.

------------------------------------------------------------------------

## 18. Delivery phases

### Phase 1 --- Design foundation

-   Confirm logo asset.
-   Implement design tokens and typography.
-   Build header, overlay navigation, footer and reusable UI primitives.
-   Establish responsive grid and image rules.

### Phase 2 --- Homepage

-   Hero.
-   Brand statement.
-   Core disciplines.
-   Selected work.
-   Craft statement.
-   Approach preview.
-   Trust section.
-   Project CTA.

### Phase 3 --- Core inner pages

-   Work index and project detail.
-   Solutions overview.
-   Aluminium page.
-   Glass page.
-   Approach page.
-   Studio page.
-   Start a Project page.

### Phase 4 --- Enquiry workflow

-   Worker/Hono API.
-   Server-side validation.
-   D1 schema if selected.
-   Business notification.
-   Spam protection and rate limiting.
-   Confirmation state.

### Phase 5 --- Content and optimisation

-   Add verified company content and real project images.
-   SEO metadata and structured data.
-   Responsive, accessibility and performance testing.
-   Search Console and analytics.

### Phase 6 --- Production launch

-   Configure domain and HTTPS.
-   Deploy to Cloudflare Pages.
-   Verify form delivery and notifications.
-   Submit sitemap.
-   Test live pages and monitor initial enquiries.

------------------------------------------------------------------------

## 19. Final product decision

The Tiwari Enterprises website should feel like a **specialist
architectural studio with strong execution capability**.

It should not feel like a standard local contractor website. The
difference must come from: - Curated, brand-led navigation. - Strong
editorial page compositions. - Large, authentic project photography. -
Clear distinction between Aluminium, Glass and supporting services. -
Useful project stories and material information. - A refined,
low-friction enquiry journey.

**The first implementation milestone is the design system, premium
navigation experience and homepage.** Inner pages should inherit the
design language but use layouts tailored to their content rather than
repeating one generic template.
