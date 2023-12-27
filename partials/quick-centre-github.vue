<script lang="ts">
export default {
  name: 'QuickCentreGithub',
};
</script>

<template>
  <a href="https://github.com/cakadi190/cakadi-website" target="_blank" ref="toggleRef" class="button-toggler">
    <ClientOnly>
      <Icon class="h4" key="githubIcon" name="octicon:mark-github-16" />
    </ClientOnly>
    <p key="darkModeText" class="lh-1 mb-0 align-middle text-truncate">Github</p>
  </a>
</template>
