<template>
  <div>
    <h1>Connectivity</h1>
    <span>
      We tested eventual connectivity by creating a set of scenarios that use the main features of the app.
      For each scenario we will describe the <b>app's response</b>, <b>good-practices</b>, the related <b>anti-pattern</b> and some <b>comments</b> on how it could be better.
    </span>
    <hr>
    <scenario
      name="Tweet"
      response="The app shows a message that is not clear for the user and saves the tweet as a draft, showing it on the notification bar under the title “Tweet not sent”, where you click it and the draft opens"
      good-practice="The application can save the tweet as a draft or queue it and post it once connection is available"
    />
    <hr>
    <scenario
      name="Send direct message "
      response="The app shows a message that is not clear for the user and saves the tweet as a draft, showing it on the notification bar under the title “Tweet not sent”, where you click it and the draft opens"
      good-practice="The application can save the tweet as a draft or queue it and post it once connection is available"
    />
    <hr>
    <scenario
      name="Tweet"
      response="When the user creates the message it has to select the other user first, if it is on the app cache it will show the user, if it's not then nothing will appear. If the user is able to select the recipient then the screen to compose the message appears, when the user hits send an unclear message pops up and disappears"
      good-practice="When the recipient doesn't load a message of lack of connectivity should appear. When the recipient loads, the app should save the message as a draft once the user hits send"
    />
    <hr>
  </div>
</template>

<script>
import Scenario from '@/components/ConnectivityScenario.vue';

export default {
  components: {
    Scenario,
  },
};
</script>

<style>

</style>
