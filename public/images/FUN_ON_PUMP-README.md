FUN ON PUMP - Logo asset
=========================

Files added:
- `public/images/fun-on-pump.svg` - Scalable SVG logo following the requested specs.
- `src/components/FunOnPumpLogo.tsx` - React component that inlines the same SVG and accepts `width`, `height`, `className`, and other SVG props.

Usage in React:
```tsx
import FunOnPumpLogo from '../components/FunOnPumpLogo'

// inside JSX
<FunOnPumpLogo width={300} height={150} className="my-logo" />
```

Direct SVG use:
```html
<img src="/images/fun-on-pump.svg" alt="FUN ON PUMP logo" width="300" />
```

Exporting to PNG (PowerShell examples):
- Using Inkscape (if installed):
```powershell
inkscape "public\images\fun-on-pump.svg" --export-type=png --export-filename="public\images\fun-on-pump-1000w.png" --export-width=1000
```

- Using ImageMagick (magick):
```powershell
magick convert "public\images\fun-on-pump.svg" -background none -resize 1000 "public\images\fun-on-pump-1000w.png"
```

Notes:
- The SVG uses Impact/Bebas Neue/Oswald font-family fallbacks; if those fonts are not available, browser fallback may slightly change letterforms. For pixel-perfect type, convert to outlines in Illustrator or export server-side with embedded fonts.
- If you want a version with exact font metrics, provide a webfont or allow me to convert the text to paths and produce a new SVG.
