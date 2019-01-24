export function startGame() {
  return FBInstant.initializeAsync().then(() => FBInstant.startGameAsync());
}

export function shareResult(result) {
  return FBInstant.shareAsync(result);
}
