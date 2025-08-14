module.exports = asset => {
  if (process.env.platform === 'harmony') {
    asset.httpServerLocation = asset.httpServerLocation.replace(
      '/assets/..',
      '/assets',
    );
  }
  return asset;
};
