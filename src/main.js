import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
    projectId: 'wi8jpgza',
    dataset: 'production',
    useCdn: true, // Enable Content Delivery Network (CDN) for faster responses
});

const app = createApp(App)

app.config.globalProperties.$sanityClient = client; // Set up the global property

export const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source)
}

app.use(router)

app.mount('#app')
