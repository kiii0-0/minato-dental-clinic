# minato-dental-clinic
Name: みなと歯科クリニック
Dental clinic in Japan, main clients are children and teenagers.
All vibe should be clean, modern and warm.
We are doing the landing page / homepage, and everything should in japanese

## Styles
Modern, classic, healthy
#### Colors
- Primary color: #FFFFFFFF
- Secondary color: #c0b9dd
- Other Color: #75c9c8

#### Fonts
- 筑紫B丸ゴシック
If you dont have it, use an equivalent font


## Inspiration
You can access the `inspiration` folder to see the design inspiration, you can also access the `reference` folder to see some idea. And `photos` folder to see the photos to use in public.

## Technologies
- NuxtJs (VueJs)
- Typescript
- Tailwind CSS

### Rules
- DRY principle (dont repeat yourself)
- Clean code
- **Only Frontend** no backend
- **Dont import component** make them custom to the project
- No IA SLOP colors, use the colors defined in `Colors`
## Local development

Use Node.js 24 LTS. On macOS, install it with Homebrew:

```sh
brew install node@24
export PATH="/opt/homebrew/opt/node@24/bin:$PATH"
npm install
npm run dev
```

The development site is available at `http://localhost:3000`.

```sh
npm run typecheck
npm run build
npm run generate
```

`npm run generate` produces a static frontend in `.output/public`.

## Implementation

- Nuxt 4, Vue, TypeScript and Tailwind CSS 4 with the Vite plugin.
- Custom, auto-imported components live in `app/components`.
- Navigation, treatment and FAQ content live in `app/data/clinic.ts`.
- Original inspiration is preserved; resized photos live in `public/images`.
- Zen Maru Gothic is used as a rounded Japanese font alternative, with local fallbacks.
- Reservations use the supplied telephone number; no backend or booking submission is implemented.
- `www.minato-dental.jp` is the intended sample domain and is not treated as a live booking service.
- Treatment descriptions and FAQs are draft copy for clinic review.

## Verification notes

Build, TypeScript validation, and static generation pass under Homebrew Node 24.21.0. The generated Japanese page includes the supplied clinic details. Browser visual review could not be completed because browser access was not authorized in this session.

The dependency audit currently reports seven high-severity entries stemming from the transitive `node-forge` dependency used by the Nuxt development tooling. The latest published `node-forge` version is 1.4.0 and is still flagged. The generated static site does not ship this server-side dependency. Recheck the audit when updating dependencies; avoid the suggested forced downgrade to Nuxt 3.

## Brand assets and link previews

`ClinicLogo.vue` frames the supplied horizontal and stacked logos without changing their lettering or source files. The first-visit section uses `public/images/interior.png`. Open Graph and Twitter Card metadata use the supplied `public/seo_image.png`. Set `NUXT_PUBLIC_SITE_URL` to the real public origin before building or generating the site (default sample domain: `https://www.minato-dental.jp`). Link previews require a publicly accessible deployed image.
