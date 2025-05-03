<template>
  <q-page class="q-pa-md flex flex-center bg-dark text-white">
    <q-card flat bordered class="q-pa-lg bg-grey-10" style="width: 300px">
      <div class="text-h6 text-center">Criar conta</div>

      <q-input v-model="email" label="E-mail" class="q-mt-md" />
      <q-input v-model="senha" label="Senha" type="password" class="q-mt-sm" />

      <q-btn label="Cadastrar" color="primary" class="full-width q-mt-md" @click="register" />
      <q-btn flat class="q-mt-sm full-width" to="/login" label="Voltar para login" />
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

const register = async () => {
  const { error } = await supabase.auth.signUp({
    email: email.value,
    password: senha.value,
  })
  if (error) {
    alert(error.message)
  } else {
    alert('Verifique seu email para confirmar o cadastro.')
    router.push('/login')
  }
}
</script>
