<template>
  <div id="stats-container">
    <h1>Stats for 👨‍💻</h1>
    <div class="subtitle-container">
      <img src="@/assets/play-store-logo.png" alt="">
      <h2>Play Store</h2>
    </div>
    <div class="stats-card-container">
      <div class="stats-card">
        <div class="stats-content">
          <span class="title">Rating</span>
          <span class="metric">3.9/5</span>
        </div>
        <i class="material-icons star">stars</i>
      </div>
      <div class="stats-card">
        <div class="stats-content">
          <span class="title">Reviews</span>
          <span class="metric">13.114</span>
        </div>
        <i class="material-icons">rate_review</i>
      </div>
      <div class="stats-card">
        <div class="stats-content">
          <span class="title">Downloads</span>
          <span class="metric">500k+</span>
        </div>
        <i class="material-icons">get_app</i>
      </div>
      <div class="stats-card">
        <div class="stats-content">
          <span class="title">Last update</span>
          <span class="metric">July 25, 2019</span>
        </div>
        <i class="material-icons">update</i>
      </div>
      <div class="stats-card">
        <div class="stats-content">
          <span class="title">Released on</span>
          <span class="metric">April 30, 2019</span>
        </div>
        <i class="material-icons android">android</i>
      </div>
    </div>
    <!-- Github -->
    <div class="subtitle-container">
      <img src="@/assets/github-white.png" alt="">
      <h2>Github</h2>
    </div>
    <div class="stats-card-container">
      <div class="stats-card">
        <div class="stats-content">
          <span class="title">Commits</span>
          <span class="metric">{{commits}}</span>
        </div>
        <i class="material-icons">restore</i>
      </div>
      <div class="stats-card">
        <div class="stats-content">
          <span class="title">Contributors</span>
          <span class="metric">{{contributors}}</span>
        </div>
        <i class="material-icons">supervisor_account</i>
      </div>
      <div class="stats-card">
        <div class="stats-content">
          <span class="title">Branches</span>
          <span class="metric">{{branches}}</span>
        </div>
        <i class="material-icons">merge_type</i>
      </div>
      <div class="stats-card">
        <div class="stats-content">
          <span class="title">Releases</span>
          <span class="metric">{{releases}}</span>
        </div>
        <i class="material-icons">local_offer</i>
      </div>
      <div class="stats-card">
        <div class="stats-content">
          <span class="title">Stars</span>
          <span class="metric">{{stars}}</span>
        </div>
        <i class="material-icons">star</i>
      </div>
      <div class="stats-card goodbye">
        <div class="stats-content">
          <div class="goodbye-aclaration-container">
            <span class="title">Open issues</span>
            <span class="goodbye-text">
              (before the project's owner
                <a target="_blank" href="https://github.com/TwidereProject/Twidere-Android/commit/78cf31881a3fe02d1b9224052d98e19bc13c807f">
                  said goodbye
                </a>
              to the project)
            </span>
          </div>
          <span class="metric">{{openIssues}}</span>
        </div>
        <i class="material-icons issues">error</i>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-await-in-loop */
export default {
  data() {
    return {
      commits: 'Fetching data...',
      releases: 'Fetching data...',
      branches: 'Fetching data...',
      contributors: 'Fetching data...',
      openIssues: 'Fetching data...',
      openPullRequests: 'Fetching data...',
      stars: 'Fetching data...',
    };
  },
  async mounted() {
    this.getCommits();
    this.getBranches();
    this.getReleases();
    this.getStats();
  },
  methods: {
    async getCommits() {
      try {
        const response = await fetch('https://api.github.com/repos/TwidereProject/Twidere-Android/stats/contributors');
        const data = await response.json();
        let total = 0;
        data.forEach((contributor) => {
          total += contributor.total;
        });
        this.commits = total;
        this.contributors = data.length;
      } catch {
        this.commits = 'Error fetching data :(';
        this.contributors = 'Error fetching data :(';
      }
    },
    async getBranches() {
      try {
        const response = await fetch('https://api.github.com/repos/TwidereProject/Twidere-Android/branches');
        const data = await response.json();
        this.branches = data.length;
      } catch {
        this.branches = 'Error fetching data :(';
      }
    },
    async getReleases() {
      try {
        let response;
        let data = [1];
        let total = 0;
        let page = 1;
        while (data.length !== 0) {
          response = await fetch(`https://api.github.com/repos/TwidereProject/Twidere-Android/releases?page=${page}`);
          data = await response.json();
          total += data.length;
          page += 1;
        }
        this.releases = total;
      } catch {
        this.releases = 'Error fetching data :(';
      }
    },
    async getStats() {
      try {
        const response = await fetch('https://api.github.com/repos/TwidereProject/Twidere-Android');
        const data = await response.json();
        this.openIssues = data.open_issues;
        this.stars = data.stargazers_count;
      } catch {
        this.branches = 'Error fetching data :(';
      }
    },
  },
};
</script>

<style scoped>
#stats-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-top: 16px;
}

.subtitle-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 8px;
}

.subtitle-container img {
  height: 2.32rem;
  margin-right: 16px;
}

.stats-card-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-left: -8px;
}

.stats-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 184px;
  border: 1px solid whitesmoke;
  border-radius: 8px;
  padding: 8px;
  margin: 8px;
}

.stats-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 2px;
}

.stats-content .title {
  font-size: 1.32rem;
}

.stats-content .stats-content {
  font-size: 1.16rem;
}

.stats-card-container i {
  color: #06bbd6;
  font-size: 2.24rem;
}

.stats-card:nth-child(2n) i {
   color: lightgray;
}

.stats-card.goodbye {
  width: 400px;
}

.stats-card.goodbye .title {
  font-size: 1.08rem;
}

.stats-card.goodbye .metric {
  font-size: 0.72rem;
}

.goodbye-aclaration-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.goodbye-text {
  font-size: 0.72rem;
}

/* custom icon styles */

.stats-card i.star {
  color: rgb(235, 192, 2);
}

.stats-card i.downloads {
  color: lightgray;
}

.stats-card i.update {
  color: #06bbd6;
}

.stats-card i.android {
  color: rgb(15, 199, 15);
}

.stats-card i.issues {
  color: rgb(195, 45, 45);
}
</style>
