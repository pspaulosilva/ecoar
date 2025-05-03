<template>
  <q-page class="bg-dark text-white q-pa-md">
    <q-card v-if="loading" class="bg-grey-9 text-white q-pa-md flex flex-center">
      <q-spinner color="primary" size="40px" />
    </q-card>

    <q-card v-else class="bg-grey-9 text-white">
      <q-card-section>
        <div class="text-h6">Status da Coleta</div>
        <div class="text-subtitle2">Pedido #{{ coleta?.id?.substring(0, 8) }}</div>
      </q-card-section>

      <q-separator dark />

      <q-card-section>
        <q-timeline color="primary">
          <q-timeline-entry
            title="Solicitado"
            :subtitle="formatarData(coleta.criado_em)"
            icon="schedule"
          />
          <q-timeline-entry
            v-if="
              coleta.status === 'a_caminho' ||
              coleta.status === 'entregue' ||
              coleta.status === 'revisado'
            "
            title="Coletor a caminho"
            icon="directions_bike"
          />
          <q-timeline-entry
            v-if="coleta.status === 'entregue' || coleta.status === 'revisado'"
            title="Material entregue na estação"
            icon="store"
          />
          <q-timeline-entry
            v-if="coleta.status === 'revisado'"
            title="Revisão concluída"
            icon="task_alt"
            color="green"
          />
        </q-timeline>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn to="/home" label="Voltar para home" color="secondary" flat />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { supabase } from 'boot/supabase'

const route = useRoute()
const coleta = ref(null)
const loading = ref(true)

function formatarData(str) {
  if (!str) return ''
  const d = new Date(str)
  return d.toLocaleString('pt-BR')
}

onMounted(async () => {
  const { id } = route.params
  const { data, error } = await supabase.from('coletas').select('*').eq('id', id).single()

  if (error) {
    alert('Erro ao buscar coleta: ' + error.message)
  } else {
    coleta.value = data
  }
  loading.value = false
})
</script>

<style scoped>
.q-page {
  min-height: 100vh;
}
</style>
