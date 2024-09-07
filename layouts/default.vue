<template>
  <div class="wrap">
    <NuxtLoadingIndicator
      :throttle="100"
      color="var(--brand-primary)"
      :height="2"
    />

    <TheHeader />

    <main class="main">
      <div class="center">
        <slot />
      </div>
    </main>

    <TheFooter />
  </div>
</template>
