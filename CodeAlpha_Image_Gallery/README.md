Filterable Image Gallery with Preview
A responsive, filterable image gallery built with HTML, CSS, and vanilla JavaScript.
It lets users filter images by category and view them in a preview/lightbox with previous and next navigation.

Features
Category filter buttons to show images by type or show all.

Smooth hide/show animation when filtering.

Clickable images open a preview/lightbox.

Previous and next buttons to navigate between visible images in the preview.

Close button and dark overlay to exit the preview.

Responsive grid layout that adapts to different screen sizes.

Technologies Used
HTML5 for structure and gallery markup.

CSS3 for layout, responsive design, hover effects, and preview styling.

Vanilla JavaScript for filtering logic, preview handling, and navigation.

Project Structure
Example structure (adjust names to match your project):

text
.
├── index.html      # Main gallery page with filters and images
├── style.css       # Styles for gallery, filters, preview box, and overlay
└── script.js       # Filtering and preview/lightbox logic
index.html contains:

A heading and wrapper container.

A nav with .items and .item elements, each having a data-name for filtering (e.g., data-name="nature").

A .gallery with .image elements; each .image has data-name and an img tag inside a span.

A .preview-box with title, close icon, image area, and buttons with id="prev-btn" and id="next-btn".

A .shadow overlay element.

style.css includes:

Base reset and Google Fonts import.

Styles for the filter buttons, gallery grid, hover zoom effect, and responsive breakpoints.

Styles for the preview box, close icon, overlay shadow, and previous/next buttons.

script.js includes:

Selection of filter items, images, preview elements, and navigation buttons.

Filter logic based on data-name, adding/removing show and hide classes and maintaining a visibleImages array.

preview(element) to open the preview, set the image and category, and lock body scroll.

updateButtons() to enable/disable prev/next depending on the current index.

Handlers for prev/next buttons to navigate through visibleImages.

Handler for close icon to close the preview and restore scrolling.

How It Works
Clicking a filter button with class .item:

Updates the active button styling.

Reads its data-name, compares with each .image element’s data-name, and shows/hides images accordingly.

Rebuilds visibleImages with only the currently visible items.

Clicking an image:

Calls preview(this) (bound via setAttribute("onclick","preview(this)")).

Shows the preview box, sets the large image source, displays its category, and sets currentIndex within visibleImages.

Prev/Next buttons:

Move currentIndex backward or forward within visibleImages, update the preview image and category, and refresh button states.

Close icon:

Hides the preview box and overlay and restores page scrolling.

Getting Started
Clone or download this repository.

Ensure your HTML links to style.css and script.js correctly.

Add your own images in the gallery, setting appropriate data-name values for categories.

Open index.html in a browser to use the gallery.

Customization
Change colors, fonts, and spacing in style.css to match your design.

Add or rename categories by updating the filter .item elements and corresponding image data-name values.

Extend the preview with captions or image descriptions if needed.

Add keyboard controls (e.g., arrow keys to navigate, Esc to close) by enhancing script.js.