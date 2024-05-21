// Get video elements
const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');

// Get control elements for video1
const playPauseBtn1 = document.getElementById('playPauseBtn1');
const rewindBtn1 = document.getElementById('rewindBtn1');
const forwardBtn1 = document.getElementById('forwardBtn1');
const progressBar1 = document.getElementById('progressBar1');
const fullscreenBtn1 = document.getElementById('fullscreenBtn1');

// Get control elements for video2
const playPauseBtn2 = document.getElementById('playPauseBtn2');
const rewindBtn2 = document.getElementById('rewindBtn2');
const forwardBtn2 = document.getElementById('forwardBtn2');
const progressBar2 = document.getElementById('progressBar2');
const fullscreenBtn2 = document.getElementById('fullscreenBtn2');

// Play/Pause functionality for video1
playPauseBtn1.addEventListener('click', () => {
  if (video1.paused) {
    video1.play();
    playPauseBtn1.innerHTML = '<i class="fas fa-pause"></i>'; // Change button icon to pause
  } else {
    video1.pause();
    playPauseBtn1.innerHTML = '<i class="fas fa-play"></i>'; // Change button icon to play
  }
});

// Rewind functionality for video1
rewindBtn1.addEventListener('click', () => {
  video1.currentTime -= 10; // Rewind 10 seconds
});

// Forward functionality for video1
forwardBtn1.addEventListener('click', () => {
  video1.currentTime += 10; // Forward 10 seconds
});

// Progress bar functionality for video1
video1.addEventListener('timeupdate', () => {
  const progress = (video1.currentTime / video1.duration) * 100;
  progressBar1.value = progress; // Update progress bar value
});

progressBar1.addEventListener('input', () => {
  const time = (progressBar1.value / 100) * video1.duration;
  video1.currentTime = time; // Seek video to specific time
});

// Fullscreen functionality for video1
fullscreenBtn1.addEventListener('click', () => {
  if (video1.requestFullscreen) {
    video1.requestFullscreen(); // Enter fullscreen mode
  } else if (video1.webkitRequestFullscreen) {
    video1.webkitRequestFullscreen(); // Webkit specific fullscreen mode
  } else if (video1.mozRequestFullScreen) {
    video1.mozRequestFullScreen(); // Mozilla specific fullscreen mode
  } else if (video1.msRequestFullscreen) {
    video1.msRequestFullscreen(); // MS specific fullscreen mode
  }
});

// Play/Pause functionality for video2
playPauseBtn2.addEventListener('click', () => {
  if (video2.paused) {
    video2.play();
    playPauseBtn2.innerHTML = '<i class="fas fa-pause"></i>'; // Change button icon to pause
  } else {
    video2.pause();
    playPauseBtn2.innerHTML = '<i class="fas fa-play"></i>'; // Change button icon to play
  }
});

// Rewind functionality for video2
rewindBtn2.addEventListener('click', () => {
  video2.currentTime -= 10; // Rewind 10 seconds
});

// Forward functionality for video2
forwardBtn2.addEventListener('click', () => {
  video2.currentTime += 10; // Forward 10 seconds
});

// Progress bar functionality for video2
video2.addEventListener('timeupdate', () => {
  const progress = (video2.currentTime / video2.duration) * 100;
  progressBar2.value = progress; // Update progress bar value
});

progressBar2.addEventListener('input', () => {
  const time = (progressBar2.value / 100) * video2.duration;
  video2.currentTime = time; // Seek video to specific time
});

// Fullscreen functionality for video2
fullscreenBtn2.addEventListener('click', () => {
  if (video2.requestFullscreen) {
    video2.requestFullscreen(); // Enter fullscreen mode
  } else if (video2.webkitRequestFullscreen) {
    video2.webkitRequestFullscreen(); // Webkit specific fullscreen mode
  } else if (video2.mozRequestFullScreen) {
    video2.mozRequestFullScreen(); // Mozilla specific fullscreen mode
  } else if (video2.msRequestFullscreen) {
    video2.msRequestFullscreen(); // MS specific fullscreen mode
  }
});

// Smooth scrolling functionality for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth' // Smooth scroll to the target element
    });
  });
});

// Keyboard navigation functionality
document.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowLeft') {
    event.preventDefault();
    rewindBtn1.click(); // Trigger rewind button for video1
    rewindBtn2.click(); // Trigger rewind button for video2
  } else if (event.code === 'ArrowRight') {
    event.preventDefault();
    forwardBtn1.click(); // Trigger forward button for video1
    forwardBtn2.click(); // Trigger forward button for video2
  } else if (event.code === 'Space') {
    event.preventDefault();
    playPauseBtn1.click(); // Trigger play/pause button for video1
    playPauseBtn2.click(); // Trigger play/pause button for video2
  }
});

// Show/hide video controls on hover
const videoWrappers = document.querySelectorAll('.video-wrapper');

videoWrappers.forEach(wrapper => {
  const videoControls = wrapper.querySelector('.video-controls');

  wrapper.addEventListener('mouseenter', () => {
    videoControls.style.opacity = '1'; // Show controls
  });

  wrapper.addEventListener('mouseleave', () => {
    videoControls.style.opacity = '0'; // Hide controls
  });
});

// Update progress bar on video seek
video1.addEventListener('seeking', () => {
  progressBar1.value = (video1.currentTime / video1.duration) * 100; // Update progress bar during seek
});

video2.addEventListener('seeking', () => {
  progressBar2.value = (video2.currentTime / video2.duration) * 100; // Update progress bar during seek
});

// Prevent context menu on video elements
video1.addEventListener('contextmenu', (event) => {
  event.preventDefault(); // Prevent default context menu
});

video2.addEventListener('contextmenu', (event) => {
  event.preventDefault(); // Prevent default context menu
});

// Keyboard shortcuts for video playback
document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyM') {
    event.preventDefault();
    video1.muted = !video1.muted; // Toggle mute for video1
    video2.muted = !video2.muted; // Toggle mute for video2
  } else if (event.code === 'KeyF') {
    event.preventDefault();
    fullscreenBtn1.click(); // Trigger fullscreen for video1
    fullscreenBtn2.click(); // Trigger fullscreen for video2
  }
});

// Show loading spinner while video is buffering
video1.addEventListener('waiting', () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  video1.parentElement.appendChild(spinner); // Add spinner
});

video1.addEventListener('canplay', () => {
  const spinner = video1.parentElement.querySelector('.spinner');
  if (spinner) {
    spinner.remove(); // Remove spinner
  }
});

video2.addEventListener('waiting', () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  video2.parentElement.appendChild(spinner); // Add spinner
});

video2.addEventListener('canplay', () => {
  const spinner = video2.parentElement.querySelector('.spinner');
  if (spinner) {
    spinner.remove(); // Remove spinner
  }
});

// Preload video metadata
video1.preload = 'metadata';
video2.preload = 'metadata';

// Set default volume
video1.volume = 0.5;
video2.volume = 0.5;

// Keyboard shortcuts for volume control
document.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowUp') {
    event.preventDefault();
    video1.volume = Math.min(video1.volume + 0.1, 1); // Increase volume for video1
    video2.volume = Math.min(video2.volume + 0.1, 1); // Increase volume for video2
  } else if (event.code === 'ArrowDown') {
    event.preventDefault();
    video1.volume = Math.max(video1.volume - 0.1, 0); // Decrease volume for video1
    video2.volume = Math.max(video2.volume - 0.1, 0); // Decrease volume for video2
  }
});

// Show volume level on volume change
video1.addEventListener('volumechange', () => {
  const volumeLevel = document.createElement('div');
  volumeLevel.classList.add('volume-level');
  volumeLevel.textContent = `Volume: ${Math.round(video1.volume * 100)}%`;
  video1.parentElement.appendChild(volumeLevel); // Show volume level
  setTimeout(() => {
    volumeLevel.remove(); // Remove volume level display
  }, 1000);
});

video2.addEventListener('volumechange', () => {
  const volumeLevel = document.createElement('div');
  volumeLevel.classList.add('volume-level');
  volumeLevel.textContent = `Volume: ${Math.round(video2.volume * 100)}%`;
  video2.parentElement.appendChild(volumeLevel); // Show volume level
  setTimeout(() => {
    volumeLevel.remove(); // Remove volume level display
  }, 1000);
});

// Show video duration and current time
video1.addEventListener('loadedmetadata', () => {
  const duration = formatTime(video1.duration);
  const currentTime = formatTime(video1.currentTime);
  const timeDisplay = document.createElement('div');
  timeDisplay.classList.add('time-display');
  timeDisplay.textContent = `${currentTime} / ${duration}`;
  video1.parentElement.appendChild(timeDisplay); // Show duration and current time
});

video1.addEventListener('timeupdate', () => {
  const duration = formatTime(video1.duration);
  const currentTime = formatTime(video1.currentTime);
  const timeDisplay = video1.parentElement.querySelector('.time-display');
  timeDisplay.textContent = `${currentTime} / ${duration}`; // Update time display
});

video2.addEventListener('loadedmetadata', () => {
  const duration = formatTime(video2.duration);
  const currentTime = formatTime(video2.currentTime);
  const timeDisplay = document.createElement('div');
  timeDisplay.classList.add('time-display');
  timeDisplay.textContent = `${currentTime} / ${duration}`;
  video2.parentElement.appendChild(timeDisplay); // Show duration and current time
});

video2.addEventListener('timeupdate', () => {
  const duration = formatTime(video2.duration);
  const currentTime = formatTime(video2.currentTime);
  const timeDisplay = video2.parentElement.querySelector('.time-display');
  timeDisplay.textContent = `${currentTime} / ${duration}`; // Update time display
});

// Format time in minutes and seconds
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`; // Format time display
}

// Show playback speed on speed change
video1.addEventListener('ratechange', () => {
  const playbackSpeed = document.createElement('div');
  playbackSpeed.classList.add('playback-speed');
  playbackSpeed.textContent = `Playback Speed: ${video1.playbackRate.toFixed(1)}x`;
  video1.parentElement.appendChild(playbackSpeed); // Show playback speed
  setTimeout(() => {
    playbackSpeed.remove(); // Remove playback speed display
  }, 1000);
});

video2.addEventListener('ratechange', () => {
  const playbackSpeed = document.createElement('div');
  playbackSpeed.classList.add('playback-speed');
  playbackSpeed.textContent = `Playback Speed: ${video2.playbackRate.toFixed(1)}x`;
  video2.parentElement.appendChild(playbackSpeed); // Show playback speed
  setTimeout(() => {
    playbackSpeed.remove(); // Remove playback speed display
  }, 1000);
});

// Keyboard shortcuts for playback speed control
document.addEventListener('keydown', (event) => {
  if (event.code === 'Period') {
    event.preventDefault();
    video1.playbackRate = Math.min(video1.playbackRate + 0.25, 2); // Increase playback speed for video1
    video2.playbackRate = Math.min(video2.playbackRate + 0.25, 2); // Increase playback speed for video2
  } else if (event.code === 'Comma') {
    event.preventDefault();
    video1.playbackRate = Math.max(video1.playbackRate - 0.25, 0.25); // Decrease playback speed for video1
    video2.playbackRate = Math.max(video2.playbackRate - 0.25, 0.25); // Decrease playback speed for video2
  }
});

// Toggle picture-in-picture mode
const pipButtons = document.querySelectorAll('.pip-button');

pipButtons.forEach(button => {
  button.addEventListener('click', () => {
    const video = button.parentElement.previousElementSibling.querySelector('video');
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture(); // Exit PiP mode
    } else if (document.pictureInPictureEnabled) {
      video.requestPictureInPicture(); // Enter PiP mode
    }
  });
});

// Show/hide captions
const captionButtons = document.querySelectorAll('.caption-button');

captionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const video = button.parentElement.previousElementSibling.querySelector('video');
    const track = video.textTracks[0];
    if (track) {
      track.mode = track.mode === 'showing' ? 'hidden' : 'showing'; // Toggle captions
    }
  });
});

// Load captions from external file
video1.addEventListener('loadedmetadata', () => {
  const track = document.createElement('track');
  track.kind = 'captions';
  track.label = 'English';
  track.srclang = 'en';
  track.src = 'captions1.vtt';
  track.mode = 'hidden';
  video1.appendChild(track); // Add captions track to video1
});

video2.addEventListener('loadedmetadata', () => {
  const track = document.createElement('track');
  track.kind = 'captions';
  track.label = 'English';
  track.srclang = 'en';
  track.src = 'captions2.vtt';
  track.mode = 'hidden';
  video2.appendChild(track); // Add captions track to video2
});

// Show/hide video annotations
const annotationButtons = document.querySelectorAll('.annotation-button');

annotationButtons.forEach(button => {
  button.addEventListener('click', () => {
    const annotations = button.parentElement.previousElementSibling.querySelectorAll('.annotation');
    annotations.forEach(annotation => {
      annotation.style.display = annotation.style.display === 'none' ? 'block' : 'none'; // Toggle annotations
    });
  });
});

// Load video annotations from external file
video1.addEventListener('loadedmetadata', () => {
  fetch('annotations1.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(annotation => {
        const annotationElement = document.createElement('div');
        annotationElement.classList.add('annotation');
        annotationElement.textContent = annotation.text;
        annotationElement.style.left = `${annotation.position.x}%`;
        annotationElement.style.top = `${annotation.position.y}%`;
        annotationElement.style.display = 'none';
        video1.parentElement.appendChild(annotationElement); // Add annotation to video1
      });
    });
});

video2.addEventListener('loadedmetadata', () => {
  fetch('annotations2.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(annotation => {
        const annotationElement = document.createElement('div');
        annotationElement.classList.add('annotation');
        annotationElement.textContent = annotation.text;
        annotationElement.style.left = `${annotation.position.x}%`;
        annotationElement.style.top = `${annotation.position.y}%`;
        annotationElement.style.display = 'none';
        video2.parentElement.appendChild(annotationElement); // Add annotation to video2
      });
    });
});

// Keyboard shortcuts for seeking
document.addEventListener('keydown', (event) => {
  if (event.code === 'Digit1') {
    event.preventDefault();
    video1.currentTime = video1.duration * 0.1; // Seek to 10% for video1
    video2.currentTime = video2.duration * 0.1; // Seek to 10% for video2
  } else if (event.code === 'Digit2') {
    event.preventDefault();
    video1.currentTime = video1.duration * 0.2; // Seek to 20% for video1
    video2.currentTime = video2.duration * 0.2; // Seek to 20% for video2
  } else if (event.code === 'Digit3') {
    event.preventDefault();
    video1.currentTime = video1.duration * 0.3; // Seek to 30% for video1
    video2.currentTime = video2.duration * 0.3; // Seek to 30% for video2
  } else if (event.code === 'Digit4') {
    event.preventDefault();
    video1.currentTime = video1.duration * 0.4; // Seek to 40% for video1
    video2.currentTime = video2.duration * 0.4; // Seek to 40% for video2
  } else if (event.code === 'Digit5') {
    event.preventDefault();
    video1.currentTime = video1.duration * 0.5; // Seek to 50% for video1
    video2.currentTime = video2.duration * 0.5; // Seek to 50% for video2
  } else if (event.code === 'Digit6') {
    event.preventDefault();
    video1.currentTime = video1.duration * 0.6; // Seek to 60% for video1
    video2.currentTime = video2.duration * 0.6; // Seek to 60% for video2
  } else if (event.code === 'Digit7') {
    event.preventDefault();
    video1.currentTime = video1.duration * 0.7; // Seek to 70% for video1
    video2.currentTime = video2.duration * 0.7; // Seek to 70% for video2
  } else if (event.code === 'Digit8') {
    event.preventDefault();
    video1.currentTime = video1.duration * 0.8; // Seek to 80% for video1
    video2.currentTime = video2.duration * 0.8; // Seek to 80% for video2
  } else if (event.code === 'Digit9') {
    event.preventDefault();
    video1.currentTime = video1.duration * 0.9; // Seek to 90% for video1
    video2.currentTime = video2.duration * 0.9; // Seek to 90% for video2
  } else if (event.code === 'Digit0') {
    event.preventDefault();
    video1.currentTime = 0; // Seek to start for video1
    video2.currentTime = 0; // Seek to start for video2
  }
});

// Show/hide video quality settings
const qualityButtons = document.querySelectorAll('.quality-button');

qualityButtons.forEach(button => {
  button.addEventListener('click', () => {
    const video = button.parentElement.previousElementSibling.querySelector('video');
    const qualityOptions = video.querySelectorAll('source[data-quality]');
    const qualitySettings = button.nextElementSibling;
    qualitySettings.style.display = qualitySettings.style.display === 'none' ? 'block' : 'none'; // Toggle quality settings display
  });
});

// Change video quality
const qualityOptions = document.querySelectorAll('.quality-option');

qualityOptions.forEach(option => {
  option.addEventListener('click', () => {
    const video = option.parentElement.parentElement.previousElementSibling.querySelector('video');
    const qualityValue = option.dataset.quality;
    const sources = video.querySelectorAll('source');
    sources.forEach(source => {
      if (source.dataset.quality === qualityValue) {
        video.src = source.src; // Change video source based on quality
      }
    });
    video.play(); // Play video after changing source
  });
});
