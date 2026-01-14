# Color Scheme Generator

Hey there! This is a fun little web app I built that helps you generate color schemes based on a color you pick. It uses The Color API to create beautiful palettes for your projects.

## What It Does

- Pick any color with the color picker
- Choose a scheme type like Monochrome, Analogic, Triad, or others
- Hit "Get Color Scheme" and boom – you get 5 colors that go great together
- Click on any color to copy its hex code (it'll say "Copied!" for a sec so you know it worked)
- Switch between light and dark modes with the toggle button for that comfy vibe

## Getting Started

Super easy to run:
1. Make sure Python is installed on your machine
2. Open a terminal in this folder
3. Type: `python -m http.server 8000`
4. Open your browser and go to `http://localhost:8000`
5. Play around! It'll show a scheme right away.

## Tech Stuff

Built with:
- HTML for the structure
- CSS for the looks (and themes with those cool custom properties)
- JavaScript for the magic (fetching colors, copying to clipboard)
- The Color API for the actual color schemes

## Files

- `index.html` – the main page
- `index.js` – all the interactive bits
- `styles.css` – makes it pretty

## API Note

It talks to The Color API at `https://www.thecolorapi.com/scheme?hex={yourcolor}&mode={type}&count=5`. Check their site for more details.

## Works In

Modern browsers with support for Fetch, CSS variables, and the Clipboard API. Should be fine on Chrome, Firefox, Edge, etc.

## Have Fun!

This was a cool project to make. Feel free to tweak it or use it in your designs!