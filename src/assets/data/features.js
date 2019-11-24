export default [
  {
    name: 'View news feed',
    imgSrc: 'newsfeed.jpeg',
    description: 'view tweets and retweets from accounts you follow. Unlike twitter, it doesn’t show likes from the accounts you follow and it doesn\'t show ads.',
  },
  {
    name: 'Tweet',
    imgSrc: 'tweet.jpeg',
    description: 'write and post a tweet, include media or location. A maximum of 280 characters is allowed per tweet.',
  },
  {
    name: 'View notifications',
    imgSrc: 'alerts.jpeg',
    description: 'view tweets that have mentioned you on them or replies. Unlike twitter, in this notification panel the likes from your tweets don\'t appear.',
  },
  {
    name: 'Trending hashtags',
    imgSrc: 'hashtags.jpeg',
    description: 'a basic list of trending hashtags where you can select one and a thread of tweets with that hashtag appears.',
  },
  {
    name: 'Search',
    imgSrc: 'search.jpeg',
    description: 'search for tweets or users and a list of tweets and users appear matching the text entered.',
  },
  {
    name: 'Direct messages',
    imgSrc: 'messages.jpeg',
    features: [
      {
        name: 'Read',
        description: 'view messages people have send you directly or that you have sent them',
      },
      {
        name: 'Send',
        description: 'compose a new message to a specific user and send it',
      },
    ],
  },
  {
    name: 'View profile',
    imgSrc: 'profile.jpeg',
    features: [
      {
        name: 'View tweets',
        description: 'a timeline of the tweets you have posted.',
      },
      {
        name: 'View media',
        description: 'a timeline of the media you have posted on your tweets.',
      },
      {
        name: 'View likes',
        description: 'a timeline of the tweets you have liked.',
      },
    ],
  },
  {
    name: 'Edit profile',
    imgSrc: 'edit-profile.png',
    description: 'change your profile image, profile banner, profile background, name, or description from your profile.',
  },
  {
    name: 'Manage accounts',
    imgSrc: 'manage.jpeg',
    description: 'switch between accounts or log in to a new account not added yet.',
  },
  {
    name: 'Filters',
    imgSrc: 'filter.png',
    description: 'filter users, keywords, sources or links that you don\'t want to see on your newsfeed.',
  },
  {
    name: 'Drafts',
    imgSrc: 'drafts.jpeg',
    features: [
      {
        name: 'View',
        description: 'view your drafts of tweets you haven\'t tweeted',
      },
      {
        name: 'Tweet',
        description: 'post your drafted tweets',
      },
    ],
  },
  {
    name: 'Lists',
    imgSrc: 'lists.png',
    description: 'view and create new lists which aggregates tweets, members and subscribers that follow that list',
  },
  {
    name: 'Settings',
    imgSrc: 'settings.jpeg',
    description: 'configure app settings like appearance, functionalities (notifications, post settings, storage, etc.), and read the about the app.',
  },
];
