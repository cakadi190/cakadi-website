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
    <p key="darkModeText" class="mb-0 align-middle lh-1">Github</p>
  </a>
</template>
