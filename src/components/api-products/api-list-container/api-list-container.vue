<template src="Components/api-products/api-list-container/api-list-container.template.html"></template>
<script src="Components/api-products/api-list-container/api-list-container.component.ts" lang="ts"></script>
<style src="Components/api-products/api-list-container/api-list-container.style.scss" lang="scss" scoped></style>

<static-query>
query {
  apis: allApi {
    edges {
      node {
        logo
        id
        name
        description
        version
        provider
        environments
        categories
        published_date
      }
    }
  }
}
</static-query>