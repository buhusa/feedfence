# FeedFence 2.3.3

FeedFence 2.3.3 improves throughput and reliability while continuing to pace
X account-location requests conservatively.

## Highlights

- Prioritizes visible accounts and discards stale queued checks.
- Moves an in-flight lookup to another visible X tab when useful.
- Learns a safer local request pace after a headerless rate limit.
- Quarantines rejected account-query identifiers for the browser session.
- Serializes and deduplicates explicit account-block actions.
- Improves placement of account-location indicators across X layouts.
- Adds direct links to the official FeedFence website.
- Includes the FeedFence Proprietary Software License.

## Package verification

File: `feedfence-2.3.3.zip`

SHA-256: `cd3a4d95e9488e36143ea2a14ddbfb4eb8315c66e6d4cecf03e2667d1080775e`

## Manual installation

1. Extract the ZIP to a folder you want to keep.
2. Open `chrome://extensions` or `brave://extensions`.
3. Enable **Developer mode**.
4. Select **Load unpacked** and choose the extracted FeedFence folder.

This manually installed beta does not update automatically.
