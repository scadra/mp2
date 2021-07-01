<template src="Pages/api-products/api-products.template.html"></template>
<script src="Pages/api-products/api-products.component.ts" lang="ts"></script>
<style src="Pages/api-products/api-products.style.scss" lang="scss" scoped></style>

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