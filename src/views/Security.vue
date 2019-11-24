<template>
  <div id="security-container">
    <h1>Security</h1>
    <span>
      The app uses kotlin 1.3 which bleongs to the latest major release of the language.
      However, the latest minor release is 1.3.5, meaning the app is missing some features of the latest updates of the language.
      Some of the most relevant are:
    </span>
    <ul>
      <li>More flexible inline classes definition</li>
      <li>Reworked type inference algorithm (this solves <a target="_blank" href="https://youtrack.jetbrains.com/issues?q=%23fixed-in-new-inference%20&_ga=2.95954268.1768683725.1573744137-229578585.1573744137">a LOT</a> of bugs)</li>
      <li>Support for unsigned number array operations</li>
      <li>Compiler optimizations</li>
    </ul>
    Also, due to the app being made in an old version of the language, it opens itself up for the only vulnerability repoted in CVE for kotlin.
    This was fixed in kotlin 1.3.3:
    <ul>
      <li>
        <a target="_blank" href="https://www.cvedetails.com/cve/CVE-2019-10101/">CVE-2019-10101</a> Resolve artifacts using HTTP. Allows a MITM attack.
      </li>
      <li>
        Actually, there are only three vulnerabilities reported in CVE for kotlin, but they refer to the same issue:
        <ul>
          <li><a target="_blank" href="https://www.cvedetails.com/cve/CVE-2019-10101/">CVE-2019-10101</a></li>
          <li><a target="_blank" href="https://www.cvedetails.com/cve/CVE-2019-10102/">CVE-2019-10102</a></li>
          <li><a target="_blank" href="https://www.cvedetails.com/cve/CVE-2019-10103/">CVE-2019-10103</a></li>
        </ul>
      </li>
    </ul>
    <span>
      Also, we could find
      <a target="_blank" href="https://github.com/TwidereProject/Twidere-Android/blob/master/twidere/src/main/assets/data/default_api_configs.json">
        a file with some API configurations
      </a>
      , which include, for each API:
    </span>
    <ul>
      <li>API Name</li>
      <li>API URL format</li>
      <li>Authentication type (Oauth)</li>
      <li>Oauth URL</li>
      <li>Consumer key</li>
      <li>Consumer secret</li>
    </ul>
    <span>
      This is dangerous as it allows anyone to impersonate Twidere API requests using the consumer keys and the consumer secrets.
      It is also probable that they have some sort of 'open-source' configuration/limiter so no one gets to pay for those requests made in behalf of Twidere
    </span>
    <h2>Other security flaws</h2>
    <span>
      Although most API's and internet requests are sent through HTTPS, there are some parts where HTTP is used.
      This means these requests will 'travel' as plain text, enabling attackers to sniff requests or to do MITM attacks, to mention a few.
    </span>
    <img class="other-vulnerabilities-image" src="@/assets/images/fanfou-http.png" alt="fanfou through http">
    <span class="file-path">twidere\src\main\kotlin\org\mariotaku\twidere\util\OnLinkClickHandler.kt</span>
    <img class="other-vulnerabilities-image" src="@/assets/images/onLink-http.png" alt="onLink click through http">
    <span class="file-path">twidere\src\main\java\org\mariotaku\twidere\util\TwidereLinkify.java</span>
    <span>
      Also, we checked if any MD5-hashing was being used, <b>none was found</b>.
      In the app all hashing is made using SHA-256, which is a little bit better than MD5, in terms of avoiding a brute force attack.
      This is due to the fact that the <a target="_blank" href="https://iopscience.iop.org/article/10.1088/1742-6596/978/1/012116/pdf">MD5 algorithm is from 2 to 4 times faster to calculate than SHA-256</a>.
      As it is faster to calculate, it greatly reduces the time needed to succeed in a brute-force attack.
    </span>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
#security-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-top: 16px;
}

.other-vulnerabilities-image {
  max-height: 240px;
}

.file-path {
  font-size: 1rem;
  margin: 8px 0;
  font-family: monospace;
}
</style>
