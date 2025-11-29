Simple Web Music Player
A simple web-based music player built with HTML, CSS, and vanilla JavaScript.
It supports play/pause, previous/next track, a clickable playlist, progress bar, current time/duration display, volume control, and optional autoplay.

Features
Play, pause, previous, and next song controls.

Displays current song title and artist.

Progress bar with current time and total duration.

Volume control slider.

Clickable playlist to select any song.

Autoplay option to automatically play the next track when the current one ends.

Technologies Used
HTML5 audio element

CSS3 for styling and layout

Vanilla JavaScript (no frameworks)

Project Structure
Example structure (adjust names if yours are different):

text
.
├── index.html
├── style.css
├── script.js
└── assets/
    └── audio/   (optional local mp3 files)
index.html – Markup for the player (audio tag, buttons, playlist, etc.).

style.css – Styles for the player container, buttons, playlist, and layout.

script.js – Logic for loading songs, handling controls, progress, volume, and autoplay.

How It Works
A songs array holds song objects with title, artist, and src (mp3 URL).

loadSong(index) updates the audio source and song info based on the current index.

Event listeners on buttons handle play/pause, previous, and next song actions.

The timeupdate event updates the progress bar, current time, and duration display.

Range inputs control seek (progress bar) and audio volume.

When a song ends, if autoplay is enabled, the next song is loaded and played.

Getting Started
Clone or download this repository.

Open index.html directly in your browser, or serve it with a simple local server.

Ensure the src values in the songs array are valid URLs or correct local file paths.

Adjust styles in style.css to match your preferred design.

Customization
Add or remove songs by editing the songs array in script.js.

Change the background colors, button styles, or layout in style.css.

Replace remote mp3 URLs with your own local audio files (and update src paths).

License
Add your preferred license here (for example, MIT License) and include a LICENSE file if needed.