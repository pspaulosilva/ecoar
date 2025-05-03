import { defineStore } from 'pinia'
import { supabase } from 'boot/supabase'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
  }),
  actions: {
    async fetchUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      this.user = user
    },
    logout() {
      supabase.auth.signOut()
      this.user = null
    },
  },
})

export const useRequestStore = defineStore('request', {
  state: () => ({
    currentRequest: null,
    history: [],
  }),
  actions: {
    setRequest(req) {
      this.currentRequest = req
    },
    setHistory(list) {
      this.history = list
    },
  },
})
