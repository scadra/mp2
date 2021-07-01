<template src="Components/api-products/api-filter/api-filter.template.html"></template>
<script src="Components/api-products/api-filter/api-filter.component.ts" lang="ts"></script>
<style src="Components/api-products/api-filter/api-filter.style.scss" lang="scss" scoped></style>

<static-query>
query {
  providers: allProvider {
    edges {
      node {
        id
        name
      }
    }
  }
}
</static-query>
