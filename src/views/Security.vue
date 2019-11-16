<template>
  <div id="security-container">
    <h1>Security</h1>
    <span>
      The app uses kotlin 1.3 which bleongs to the latest major release of the language.
      However, the latest minor release is 1.3.5, meaning the app is missing some features of the latest updates of the language.
      Some of the most relevant are:
      <ul>
        <li>More flexible inline classes definition</li>
        <li>Reworked type inference algorithm</li>
        <li>Support for unsigned number array operations</li>
        <li>Compiler optimizations</li>
      </ul>
      Also, due to the app being made in an old version of the language, it opens itself up for vulnerabilities fixed in later versions:
      <ul>
        <li>
          Resolve artifacts using HTTP. Allows a MITM attack. <a href="https://www.cvedetails.com/cve/CVE-2019-10101/">link</a>
        </li>
      </ul>
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
</style>
