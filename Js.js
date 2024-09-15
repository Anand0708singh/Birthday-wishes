// JavaScript to show the video on button click
document.getElementById('reveal-video-btn').addEventListener('click', function() {
    document.getElementById('video-container').classList.remove('hidden'); // Show video
    document.getElementById('reveal-video-btn').style.display = 'none'; // Hide button
});
