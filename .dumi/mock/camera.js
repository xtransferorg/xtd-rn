// Mock camera device
const useCameraDevice = () => ({
  id: 'mock-camera',
  position: 'back',
  hasFlash: true,
  hasTorch: true,
  minZoom: 1,
  maxZoom: 10,
  supportsLowLightBoost: true,
  supportsFocus: true,
  isActive: true,
  format: {
    photoWidth: 1920,
    photoHeight: 1080,
    videoWidth: 1920,
    videoHeight: 1080,
  },
});

function Camera() {
  return null
}

// Mock camera permissions
const requestCameraPermission = () => Promise.resolve('granted');
const requestMicrophonePermission = () => Promise.resolve('granted');

// Mock camera methods
Camera.prototype.takePhoto = () => Promise.resolve({
  path: 'mock-photo-path.jpg',
  width: 1920,
  height: 1080,
  isRawPhoto: false,
  metadata: {},
});

Camera.prototype.startRecording = () => Promise.resolve();
Camera.prototype.stopRecording = () => Promise.resolve({
  path: 'mock-video-path.mp4',
  duration: 5000,
  width: 1920,
  height: 1080,
});

// Export all mock functionality
module.exports = {
  Camera,
  useCameraDevice,
  requestCameraPermission,
  requestMicrophonePermission,
};

// Also export as default for compatibility
module.exports['default'] = {
  Camera,
  useCameraDevice,
  requestCameraPermission,
  requestMicrophonePermission,
};
