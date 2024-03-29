export default [
  {
    name: 'View news feed',
    scenarioDescription: 'The user checks his/her newsfeed and connection is lost',
    response: 'The tweets that were already loaded appear, but scrolling down images and videos start to disappear and so do tweets. More amount of text appears than images and videos. When you click refresh nothing happens',
    goodPractice: 'The application shows a message indicating that there is a problem with the internet connection. The message should be temporary, and the UI of components that need connection render a message indicating the lack of connection',
    antiPattern: 'The app detects a lack of connection and sends a message although the message is not clear to the user that there is a lack of connectivity',
    comments: 'The app should show a message when you try to refresh and nothing happens, and it should show a message when connectivity is lost even if the user does not try to refresh the page',
    demoSrc: 'newsfeed.mp4',
  },
  {
    name: 'Tweet',
    scenarioDescription: 'The user tries to post a tweet when connection is lost',
    response: 'The app shows a message that is not clear for the user and saves the tweet as a draft, showing it on the notification bar under the title “Tweet not sent”, where you click it and the draft opens',
    goodPractice: 'The application can save the tweet as a draft or queue it and post it once connection is available',
    antiPattern: '',
    comments: 'The app saves the tweet as a draft in order for the user to try to post it again when it finds connectivity. Even if the mobile is turned off, once it is turned on again, the draft remains.',
    demoSrc: 'tweet.mp4',
  },
  {
    name: 'Send direct message',
    scenarioDescription: 'The user tries to send a direct message to another user',
    response: 'When the user creates the message it has to select the other user first, if it is on the app cache it will show the user, if it\'s not then nothing will appear. If the user is able to select the recipient then the screen to compose the message appears, when the user hits send an unclear message pops up and disappears ',
    goodPractice: 'When the recipient doesn\'t load a message of lack of connectivity should appear. When the recipient loads, the app should save the message as a draft once the user hits send',
    antiPattern: 'Nonexistent notification of problem when performing an action (NNPPA). The app had a connectivity problem and does not inform the user about the issue. Message with exception trace. The app detects a lack of connection and sends a message although the message is not clear to the user that there is a lack of connectivity',
    comments: 'The app should show a message when no recipients load informing about a lack of connectivity and if it loads save the message as a draft or queue it and send once it has connection',
    demoSrc: 'directmessage.mp4',
  },
  {
    name: 'View hashtags',
    scenarioDescription: 'The user accesses the hashtags panel and clicks on a hashtag',
    response: 'The app displays a cache of a list of hashtags and when the user clicks on a hashtag, a message with exception trace appears, which is unclear for the user',
    goodPractice: 'When the list of hashtags appears, it can show a cache but a message should pop up indicating the user that there is a lost of connectivity. Then, when a user clicks on a specific hashtag, a message of connection lost should appear also, not an unclear message for the user',
    antiPattern: 'Message with exception trace. The app detects a lack of connection and sends a message although the message is not clear to the user that there is a lack of connectivity',
    comments: 'The app should show a message of lack of connection when the hashtag list appears and when the user clicks on one',
    demoSrc: 'hashtags.mp4',
  },
  {
    name: 'Search',
    scenarioDescription: 'The user types in some text and clicks search',
    response: 'When the user click on the search button, a text field at the top appears with a list of recent search query. As the user types something, it shows users that it has on its cache, if it doesn\'t, it shows nothing. When the user clicks enter, an unclear message appears',
    goodPractice: 'The app should show a lack of connection message when the user clicks enter search and queue it for it to appear once connection is established',
    antiPattern: 'Message with exception trace. The app detects a lack of connection and sends a message although the message is not clear to the user that there is a lack of connectivity',
    comments: 'The app should show a message of lack of connection when the user clicks enter, and not show the host address',
    demoSrc: 'search.mp4',
  },
  {
    name: 'View profile',
    scenarioDescription: 'The user tries to check its profile',
    response: 'If the user was already on the profile screen when connection was lost, a cache version of its profile it\'s shown, but with a lack of media content once you start scrolling down. If connection is lost before entering the profile, it shows a cached version of the upper part of the profile which includes, the name, username, followers, following,listed, and maybe the profile picture and header, but not the tweets, media or likes. In each option may appear an empty panel or a network error message.',
    goodPractice: 'The application shows a message indicating that there is a problem with the internet connection. The message should be temporary, and the UI of components that need connection render a message indicating the lack of connection',
    antiPattern: 'Message with exception trace. The app detects a lack of connection and sends a message although the message is not clear to the user that there is a lack of connectivity',
    comments: 'The app should show a lack of connection message on the different UI elements that need connection',
    demoSrc: 'profile.mp4',
  },
];
