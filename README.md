# 1.Simple Web Music Player

A simple web-based music player built with HTML, CSS, and vanilla JavaScript.[web:1][web:2]  
It supports play/pause, previous/next track, a clickable playlist, progress bar, current time/duration display, volume control, and optional autoplay.[web:1]

## Features

- Play, pause, previous, and next song controls.[web:1]
- Displays current song title and artist.[web:1]
- Progress bar with current time and total duration.[web:1]
- Volume control slider.[web:1]
- Clickable playlist to select any song.[web:1]
- Autoplay option to automatically play the next track when the current one ends.[web:1]

## Technologies Used

- HTML5 audio element.[web:21]
- CSS3 for styling and layout.[web:2]
- Vanilla JavaScript (no frameworks).[web:2]

## Project Structure

.
├── index.html
├── style.css
└── script.js

text
- `index.html` – Markup for the player (audio tag, buttons, playlist, etc.).[web:1]
- `style.css` – Styles for the player container, controls, progress, and playlist.[web:1]
- `script.js` – Logic for loading songs, handling controls, progress, volume, and autoplay.[web:1]

## How It Works

- A `songs` array holds objects with `title`, `artist`, and `src` for each track.[web:1]
- `loadSong(index)` updates the audio source and song info based on the current index.[web:1]
- Event listeners on buttons handle play/pause, previous, and next song actions.[web:1]
- The `timeupdate` event updates the progress bar, current time, and duration display.[web:1]
- Range inputs control seeking (progress bar) and audio volume.[web:21]
- When a song ends, if autoplay is enabled, the next song is loaded and played automatically.[web:1]

## Getting Started

1. Clone or download this repository.[web:32]
2. Open `index.html` directly in your browser or via a simple local server.[web:32]
3. Ensure the `src` values in the `songs` array are valid URLs or correct local file paths.[web:1]
4. Adjust styles in `style.css` to match your preferred design.[web:2]

## Customization

- Add or remove songs by editing the `songs` array in `script.js`.[web:1]
- Change the background colors, button styles, or layout in `style.css`.[web:2]
- Replace remote MP3 URLs with your own local audio files (and update `src` paths).[web:21]

## License

Specify your preferred license (for example, MIT) and include a `LICENSE` file in the repository.[web:32]

2 # Simple Web Calculator

A simple, responsive web-based calculator built with HTML, CSS, and vanilla JavaScript.[web:23][web:29]  
It supports basic arithmetic operations, clear and backspace actions, and keyboard input for quick calculations.[web:23]

## Features

- Addition, subtraction, multiplication, division, and percentage operations.[web:23]
- Clear button to reset the current expression.[web:23]
- Backspace button to delete the last entered character.[web:23]
- `=` button to evaluate the full expression and show the result.[web:23]
- Keyboard support for digits, operators, Enter (to calculate), Backspace, and `C`/`c` (to clear).[web:36]

## Technologies Used

- HTML5 for structure and layout.[web:23]
- CSS3 for styling and basic responsiveness.[web:23]
- Vanilla JavaScript for calculator logic and event handling.[web:29]

## Project Structure

.
├── index.html # Calculator UI and layout
├── style.css # Styles for the calculator
└── code.js # Calculator logic and keyboard events


- `index.html` contains the calculator container, display input, and all buttons.[web:23]
- `style.css` styles the calculator panel, buttons, and display field.[web:23]
- `code.js` implements `Solve`, `Result`, `Clear`, `Back`, and the `keydown` listener.[web:29]

## How It Works

- The display field with `id="res"` shows the current expression and result.[web:23]
- `Solve(val)` appends digits or operators to the display value.[web:23]
- `Result()` reads the expression, evaluates it (after replacing visual `x` with `*`), and shows the result or an error message if invalid.[web:34]
- `Clear()` empties the display, and `Back()` removes the last character.[web:23]
- A `keydown` listener maps number and operator keys, Enter, Backspace, and `C`/`c` to the corresponding calculator functions.[web:36]

## Getting Started

1. Clone or download this repository.[web:32]
2. Make sure `index.html`, `style.css`, and `code.js` are in the same folder (or update paths accordingly).[web:32]
3. Open `index.html` in any modern web browser.[web:23]
4. Use the buttons or keyboard to perform calculations.[web:23]

## Customization

- Edit `style.css` to change colors, button shapes, fonts, or layout.[web:23]
- Add advanced operations (like square root or exponent) by adding new buttons and extending `Result()` logic.[web:34]
- Improve error handling or input validation as needed.[web:23]

## License

Add your preferred license (for example, MIT License) and include a `LICENSE` file in the repository.[web:32]

3. Filterable Image Gallery
# Filterable Image Gallery with Preview

A responsive, filterable image gallery built with HTML, CSS, and vanilla JavaScript.[web:35]  
Users can filter images by category and open a preview/lightbox with previous and next navigation.[web:35]

## Features

- Category filter buttons to show images by type or show all.[web:35]
- Smooth hide/show animation when filtering.[web:35]
- Clickable images that open a preview/lightbox.[web:35]
- Previous and next buttons to navigate through the currently visible images.[web:35]
- Close icon and dark overlay to exit the preview.[web:35]
- Responsive grid layout that adapts to different screen sizes.[web:30]

## Technologies Used

- HTML5 for gallery structure and preview markup.[web:35]
- CSS3 for layout, hover effects, animations, and responsive design.[web:30]
- Vanilla JavaScript for filtering, preview control, and navigation logic.[web:35]

## Project Structure

.
├── index.html # Main gallery page with filters and images
├── style.css # Styles for gallery, filters, preview box, and overlay
└── script.js # Filtering and preview/lightbox logic

text

- `index.html` includes:
  - A heading and wrapper container.[web:35]
  - A `nav` with `.items` and `.item` elements, each with `data-name` for filtering.[web:35]
  - A `.gallery` with `.image` elements, each having `data-name` and an `img` tag inside a `span`.[web:35]
  - A `.preview-box` with title, close icon, preview image, and buttons with `id="prev-btn"` and `id="next-btn"`.[web:35]
  - A `.shadow` overlay element.[web:35]

- `style.css` defines:
  - Base reset and Google Fonts import.[web:30]
  - Styles for the filter buttons, gallery grid, hover zoom, and responsive breakpoints.[web:30]
  - Styles for the preview box, close icon, overlay shadow, and prev/next buttons.[web:35]

- `script.js` provides:
  - Selection of filter controls, images, preview elements, and navigation buttons.[web:35]
  - Filter logic based on `data-name`, toggling `show` and `hide` classes and maintaining a `visibleImages` array.[web:35]
  - `preview(element)` to open the preview, set the large image source and category, and lock body scroll.[web:35]
  - `updateButtons()` to enable/disable prev/next based on the current index.[web:35]
  - Handlers for prev/next buttons to navigate within `visibleImages`.[web:35]
  - A close handler that hides the preview and overlay and restores scrolling.[web:35]

## How It Works

- Clicking a filter `.item`:
  - Updates the active button.[web:35]
  - Reads its `data-name` and shows only `.image` elements with matching `data-name` or all when `data-name="all"`.[web:35]
  - Rebuilds `visibleImages` with the currently shown images.[web:35]

- Clicking an image:
  - Triggers `preview(this)` (attached via `setAttribute("onclick","preview(this)")`).[web:35]
  - Opens the preview box, sets the large image `src`, updates the category label, and sets `currentIndex` based on `visibleImages`.[web:35]

- Prev/Next buttons:
  - Change `currentIndex` within `visibleImages`, update the preview image and category, and refresh button states.[web:35]

## Getting Started

1. Clone or download this repository.[web:32]
2. Confirm `index.html` correctly links `style.css` and `script.js`.[web:32]
3. Add your own images to the gallery and set appropriate `data-name` attributes for categories.[web:35]
4. Open `index.html` in a browser to use the gallery.[web:35]

## Customization

- Adjust colors, fonts, spacing, and animations in `style.css` to match your branding.[web:30]
- Add or rename categories by editing the filter `.item` elements and image `data-name` values.[web:35]
- Extend the preview with captions, descriptions, or download links if needed.[web:35]
- Optionally add keyboard controls (arrow keys to navigate, Esc to close) in `script.js`.[web:36]

## License

Choose and document a license (such as MIT) and include a `LICENSE` file.[web:32]
