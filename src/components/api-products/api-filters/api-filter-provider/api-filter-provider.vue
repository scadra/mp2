<template src="Components/api-products/api-filters/api-filter-provider/api-filter-provider.template.html"></template>
<script src="Components/api-products/api-filters/api-filter-provider/api-filter-provider.component.ts" lang="ts"></script>
<style src="Components/api-products/api-filters/api-filter-provider/api-filter-provider.style.scss" lang="scss" scoped></style>

<static-query>
query {
  providers: allProvider {
    edges {
      node {
        id
        name
        providerId
      }
    }
  }
}
</static-query>
