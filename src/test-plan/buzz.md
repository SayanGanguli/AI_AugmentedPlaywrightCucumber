# Buzz

## Objective
Verify Buzz feed posting, media actions, feed sorting, post interactions, and empty/error handling.

## Preconditions
- Authenticated user with Buzz access.
- Browser can access the configured media-upload control if the environment supports it.

## Test Data
- Non-sensitive text post.
- Valid image/video fixture and invalid/oversized media fixture.
- Existing post with comments/likes where available.

## Scenarios
1. Buzz loads the Newsfeed with What's on your mind, Post, Share Photos, and Share Video controls.
2. Post valid text and verify it appears in the feed.
3. Reject blank text submission or show the application's disabled/validation behavior.
4. Share a valid photo and video; reject unsupported or oversized media.
5. Sort by Most Recent, Most Liked, and Most Commented and verify order/state changes.
6. Open a long post with Read More and verify expanded content.
7. Exercise available like/comment/share controls and verify updated counts/content.
8. Verify feed and Upcoming Anniversaries render when records exist and show an explicit empty state otherwise.

## Steps
1. Open Buzz and record feed controls and initial posts.
2. Run text/media posts with isolated data.
3. Switch each sort mode and interact with one known post.
4. Reload and verify persistence appropriate to the action.

## Expected Results
- Valid posts appear once with correct content.
- Invalid media or blank content is rejected without corrupting the feed.
- Sort controls change the displayed ordering and post interactions update state.

## Coverage/Notes
The verified feed showed text posting, photo/video sharing, three sort modes, long-post Read More, and Upcoming Anniversaries.

## Known Limitations
Media upload and like/comment actions were not submitted during discovery; confirm file constraints and permissions before implementation.
