(() => {
  const downloadLink = document.querySelector("[data-release-download]");
  if (!downloadLink || !window.location.hostname.endsWith(".github.io")) return;

  const owner = window.location.hostname.slice(0, -".github.io".length);
  const repository = window.location.pathname.split("/").filter(Boolean)[0];
  const asset = downloadLink.dataset.releaseAsset;
  if (!owner || !repository || !asset) return;

  downloadLink.href = `https://github.com/${owner}/${repository}/releases/latest/download/${asset}`;
  downloadLink.removeAttribute("download");

  const previewNote = document.querySelector("[data-preview-note]");
  if (previewNote) previewNote.textContent = "Download from the official FeedFence GitHub Release.";
})();
