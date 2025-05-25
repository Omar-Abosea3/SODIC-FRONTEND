import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Download, Volume2 } from 'lucide-react';

const VideoPlayer = ({ src, title = "Video Player" }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showControls, setShowControls] = useState(true);

  // Format time helper
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Play/Pause toggle
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Skip forward 10 seconds
  const skipForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10;
    }
  };

  // Skip backward 10 seconds
  const skipBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10;
    }
  };

  // Download video
  const downloadVideo = () => {
    const link = document.createElement('a');
    link.href = src;
    link.download = title || 'video.mp4';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle progress bar change
  const handleProgressChange = (e) => {
    if (videoRef.current) {
      const newTime = (e.target.value / 100) * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  // Handle volume change
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100;
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  // Handle speed change
  const handleSpeedChange = (e) => {
    const newRate = parseFloat(e.target.value);
    setPlaybackRate(newRate);
    if (videoRef.current) {
      videoRef.current.playbackRate = newRate;
    }
  };

  // Video event handlers
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT') return; // Don't interfere with input fields
      
      switch (e.key) {
        case ' ':
        case 'k':
          e.preventDefault();
          togglePlayPause();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          skipBackward();
          break;
        case 'ArrowRight':
          e.preventDefault();
          skipForward();
          break;
        case 'ArrowUp':
          e.preventDefault();
          setVolume(prev => Math.min(1, prev + 0.1));
          if (videoRef.current) {
            videoRef.current.volume = Math.min(1, volume + 0.1);
          }
          break;
        case 'ArrowDown':
          e.preventDefault();
          setVolume(prev => Math.max(0, prev - 0.1));
          if (videoRef.current) {
            videoRef.current.volume = Math.max(0, volume - 0.1);
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, volume]);

  // Auto-hide controls
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isPlaying, showControls]);

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="video-player-container position-relative bg-dark rounded-3 overflow-hidden">
      <div 
        className="video-wrapper"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
        onMouseMove={() => setShowControls(true)}
      >
        <video
          ref={videoRef}
          className="w-100"
          src={src}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onPlay={handlePlay}
          onPause={handlePause}
          onClick={togglePlayPause}
          style={{ maxHeight: '70vh' }}
        />

        {/* Video Controls Overlay */}
        <div 
          className={`position-absolute bottom-0 start-0 end-0 bg-gradient p-3 transition-opacity ${
            showControls ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
            transition: 'opacity 0.3s'
          }}
        >
          {/* Progress Bar */}
          <div className="mb-3">
            <input
              type="range"
              className="form-range"
              min="0"
              max="100"
              value={progressPercentage}
              onChange={handleProgressChange}
              style={{ cursor: 'pointer' }}
            />
            <div className="d-flex justify-content-between text-white small">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              {/* Skip Back Button */}
              <button 
                className="btn btn-light btn-sm"
                onClick={skipBackward}
                title="Skip back 10s (←)"
              >
                <SkipBack size={16} />
              </button>

              {/* Play/Pause Button */}
              <button 
                className="btn btn-primary"
                onClick={togglePlayPause}
                title="Play/Pause (Space)"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>

              {/* Skip Forward Button */}
              <button 
                className="btn btn-light btn-sm"
                onClick={skipForward}
                title="Skip forward 10s (→)"
              >
                <SkipForward size={16} />
              </button>

              {/* Volume Control */}
              <div className="d-flex align-items-center gap-2 ms-3">
                <Volume2 className="text-white" size={16} />
                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max="100"
                  value={volume * 100}
                  onChange={handleVolumeChange}
                  style={{ width: '80px' }}
                  title="Volume (↑↓)"
                />
              </div>
            </div>

            <div className="d-flex align-items-center gap-3">
              {/* Speed Control */}
              <div className="d-flex align-items-center gap-2">
                <small className="text-white">Speed:</small>
                <select 
                  className="form-select form-select-sm"
                  value={playbackRate}
                  onChange={handleSpeedChange}
                  style={{ width: 'auto' }}
                >
                  <option value={0.25}>0.25x</option>
                  <option value={0.5}>0.5x</option>
                  <option value={0.75}>0.75x</option>
                  <option value={1}>1x</option>
                  <option value={1.25}>1.25x</option>
                  <option value={1.5}>1.5x</option>
                  <option value={2}>2x</option>
                </select>
              </div>

              {/* Download Button */}
              <button 
                className="btn btn-success btn-sm"
                onClick={downloadVideo}
                title="Download video"
              >
                <Download size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Keyboard Shortcuts Info */}
        <div className="position-absolute top-0 end-0 m-3">
          <button 
            className="btn btn-dark btn-sm"
            data-bs-toggle="tooltip"
            title="Keyboard shortcuts: Space/K = Play/Pause, ←/→ = Skip 10s, ↑/↓ = Volume"
          >
            ?
          </button>
        </div>
      </div>

    </div>
  );
};

export default VideoPlayer;