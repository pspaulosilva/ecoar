<template>
  <q-page class="q-pa-md flex flex-center bg-dark text-white">
    <q-card flat bordered class="q-pa-lg bg-grey-10" style="width: 300px">
      <div class="text-h6 text-center">Entrar no Ecoar</div>

      <q-input v-model="email" label="E-mail" class="q-mt-md" />
      <q-input v-model="senha" label="Senha" type="password" class="q-mt-sm" />

      <q-btn label="Entrar" color="primary" class="full-width q-mt-md" @click="login" />
      <q-separator spaced />
      <q-btn
        label="Entrar com Google"
        class="full-width"
        color="secondary"
        @click="loginWithGoogle"
      />

      <q-btn flat class="q-mt-sm full-width" to="/register" label="Criar conta" />
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from 'boot/supabase'
import { useRouter } from 'vue-router'

const email = ref('')
const senha = ref('')
const router = useRouter()

const login = async () => {
  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: senha.value,
  })
  if (error) {
    alert(error.message)
  } else {
    router.push('/home')
  }
}

const loginWithGoogle = async () => {
  await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: window.location.origin + '/home' },
  })
}
</script>
