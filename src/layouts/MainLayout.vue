<template>
  <q-layout view="lHh Lpr lFf" class="bg-dark text-white">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <img src="/src/assets/logos/logo_white.webp" alt="Ecoar" height="32" />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-10">
      <q-tabs align="justify" class="text-white" dense>
        <q-route-tab to="/home" icon="home" label="Início" />
        <q-route-tab to="/nova-solicitacao" icon="add_circle" label="Nova Coleta" />
        <q-route-tab to="/creditos" icon="eco" label="Créditos" />
        <q-route-tab to="/perfil" icon="person" label="Perfil" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script setup></script>

<style scoped>
img {
  filter: brightness(0) invert(1);
}
</style>
