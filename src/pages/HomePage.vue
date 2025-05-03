<template>
  <q-page class="bg-dark text-white">
    <q-header elevated class="bg-primary text-white text-center q-pa-md">
      <div class="text-h6">Bem-vindo(a) ao Ecoar</div>
    </q-header>

    <q-page-container class="q-pa-md">
      <q-card class="q-mb-md bg-grey-9 text-white">
        <q-card-section>
          <div class="text-subtitle1">Coleta atual</div>
          <div class="text-h6">1 coleta a caminho</div>
        </q-card-section>
      </q-card>

      <q-card class="q-mb-md bg-grey-9 text-white">
        <q-card-section>
          <div class="text-subtitle1">Créditos de carbono</div>
          <div class="text-h6">12.4 kg CO₂</div>
        </q-card-section>
      </q-card>

      <q-btn
        to="/nova-solicitacao"
        label="Nova coleta"
        color="primary"
        class="full-width q-mt-md"
      />
      <q-btn
        to="/creditos"
        label="Ver carteira"
        color="secondary"
        class="full-width q-mt-sm"
        flat
      />
    </q-page-container>
  </q-page>
</template>

<script setup></script>

<style scoped>
.q-page {
  min-height: 100vh;
}
</style>
