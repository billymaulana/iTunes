/* eslint-disable no-console */
import { ofetch } from 'ofetch'

export const useMyFetch = ofetch.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://itunes.apple.com',
  async onRequest({ request }) {
    console.log('fetch request', request)
  },
  async onRequestError({ request, error }) {
    console.log('fetch request error', request, error)
  },
  async onResponse({ response }) {
    console.log('fetch response', response.status, response._data)
  },
  async onResponseError({ request, response, options }) {
    console.log('fetch response error', request, response.status, response.body, options)
  },
})
