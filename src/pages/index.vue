<template src="Pages/home/home.template.html"></template>
<script src="Pages/home/home.component.ts" lang="ts"></script>
<style src="Pages/home/home.style.scss" lang="scss" scoped></style>
<static-query>
query {
  metadata {
    siteName,
    siteDescription,
    siteVersion,
    siteTimestamp,
  }
}
</static-query>
