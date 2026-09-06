# Sporings-IDer (GA4 / Google Ads / Meta Pixel)

**Status: Ingen sporing funnet på kildesiden (emils.no).**

Sjekket 2026-09-06 mot det lokale HTTrack-speilet i `../emils-no-mirror/`
(hentet 2026-09-04). Gjennomsøkte alle HTML/JS/JSON-filer i speilet for
kjente sporingsmønstre:

- Google Analytics (GA4 `G-XXXXXXXXXX`, gtag.js, googletagmanager.com)
- Google Tag Manager (`GTM-XXXXXXX`)
- Google Ads (`AW-XXXXXXXXX`)
- Meta/Facebook Pixel (connect.facebook.net, fbq(), fbevents.js)
- TikTok-piksel, Hotjar, Microsoft Clarity

**Ingen treff.** Bekreftet fra tre uavhengige kilder i speilet:

1. `hts-cache/new.txt` (HTTracks fullstendige liste over alle hentede
   URL-er) inneholder kun forespørsler til `emils.no` og `gmpg.org`
   (sistnevnte er WordPress' standard XFN-profil-lenke, ikke sporing).
2. Installerte WordPress-plugins er kun `astra-addon`, `spectra-pro` og
   `ultimate-addons-for-gutenberg` — alle tema/side-bygger-verktøy, ingen
   analytics- eller cookie-consent-plugin (ingen MonsterInsights, Site Kit,
   Facebook for WooCommerce, Complianz, CookieYes e.l.).
3. Direkte tekstsøk etter `gtag(`, `dataLayer`, `G-`, `AW-`, `GTM-` i
   index.html, kontakt/, meny/ og wp-json-sidene ga ingen ekte treff.

Kilden emils.no har med andre ord **ingen analytics og ingen cookie-banner**
installert i det hele tatt (jf. [[emils-no-redesign]]-notatet fra
byggingen: samme konklusjon — "ingen kjente plugins funnet").

## Konsekvens for redesignet

`emils-no-redesign` (denne mappen) er bygget fra bunnen av og inneholder
derfor heller ingen sporingskode — bekreftet ved samme gjennomsøk av
index.html, meny.html, kontakt.html, app.js og style.css.

Ønsker Adrian/kunden sporing på denne siden senere, må det legges inn som
**nye, egne IDer** (kundens egen GA4/Ads-konto) — det finnes ingenting å
"arve" fra kilden siden det aldri var noe sporing der. Se
[[tracking-scripts-i-speil]] for den generelle rutinen dette følger.
