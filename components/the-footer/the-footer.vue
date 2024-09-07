<template>
  <footer class="footer">
    <div class="footer__center center">
      <div class="footer__wrap">
        <div to="/" class="footer__copyright">&copy; {{ $t('logo') }}</div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding-top: 20px;

  &__wrap {
    padding: 15px 0;
    border-top: 1px solid var(--brand-extra);
  }

  &__copyright {
    text-transform: uppercase;
    font-size: 12px;
    list-style: 1;
  }
}
</style>
