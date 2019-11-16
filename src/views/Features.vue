<template>
  <div id="features-container">
    <h1>Features</h1>
    <span>This app, is like no other. For real. It lets you:</span>
    <ol>
      <li><b>View news feed:</b> view tweets and retweets from accounts you follow. Unlike twitter, it doesn’t show likes from the accounts you follow and it doesn't show ads.</li>
      <li><b>Tweet:</b> write and post a tweet, include media or location. A maximum of 280 characters is allowed per tweet.</li>
      <li><b>View alerts (notifications):</b> view tweets that have mentioned you on them or replies. Unlike twitter, in this notification panel the likes from your tweets don't appear.</li>
      <li><b>Trending topics (hashtags):</b> a basic list of trending hashtags where you can select one and a thread of tweets with that hashtag appears</li>
      <li><b>Search:</b> search for tweets or users and a list of tweets and users appear matching the text entered</li>
      <li>
        <b>Direct messages</b>
        <ul>
          <li><b>Read:</b> view messages people have send you directly or that you have sent them</li>
          <li><b>Send:</b> compose a new message to a specific user and send it</li>
        </ul>
      </li>
      <li>
        <b>View profile</b>
        <ul>
          <li><b>View tweets:</b> a timeline of the tweets you have posted</li>
          <li><b>View media:</b> a timeline of the media you have posted on your tweets</li>
          <li><b>View likes:</b> a timeline of the tweets you have liked</li>
        </ul>
      </li>
      <li><b>edit profile:</b> change your profile image, profile banner, profile background, name, or description from your profile</li>
      <li><b>manage accounts:</b> switch between accounts or log in to a new account not added yet</li>
      <li>
        <b>Drafts</b>
        <ul>
          <li><b>View:</b> view your drafts of tweets you haven't tweeted</li>
          <li><b>Tweet:</b> post your drafted tweets</li>
        </ul>
      </li>
      <li><b>Filters:</b> filter users, keywords, sources or links that you don't want to see on your newsfeed</li>
      <li><b>Lists:</b> view and create new lists which aggregates tweets, members and subscribers that follow that list</li>
      <li><b>Settings:</b> configure app settings like appearance, functionalities (notifications, post settings, storage, etc.), and read the about the app</li>
    </ol>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
#features-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-top: 16px;
}
</style>
