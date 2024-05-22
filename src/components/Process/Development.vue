<script setup>
  import { Globe, Github } from 'lucide-vue-next';
</script>
<template>
<!--     <ul>
      <li v-for="(value, language) in languages" :key="language">
        {{ language }}: {{ value }}
      </li>
    </ul> -->
    <!-- <h2>GitHub</h2>
    <div class="border border-white rounded p-10">
      <h3>{{ repo.name }}</h3>
      <p>Last updated {{ formattedDate(repo.updated_at) }}</p>
      <p>{{ repo.description }}</p>
      <Progressbar :languageData="languages" />
    </div> -->

    <section class="py-4" v-if="gitRepo || this.languages || devProcess">
      <h2>Development</h2>
      <section v-if="devProcess" class="py-4 max-w-prose">
        <div v-for="dev in devProcess" :key="dev._key" class="">
          <h3 v-if="dev.title">{{ dev.title }}</h3>
          <p v-if="dev.description">{{ dev.description }}</p>
          <img v-if="dev.image" :src="urlFor(dev.image.asset).url()" />
        </div>
      </section>
      <div class="md:flex md:gap-20 md:justify-between">
        <section v-if="gitRepo && this.languages && gitHubUrl" class="md:w-2/3">
          <Progressbar :languageData="this.languages" :gitHubUrl="gitHubUrl" />
        </section>
        <section class="md:min-w-fit md:w-1/3 py-4">
          <h3>Check out</h3>
            <div class="my-4">
              <a v-if="gitHubUrl" 
                data-twe-toggle="tooltip" 
                data-twe-ripple-init 
                data-twe-placement="bottom" 
                data-twe-ripple-color="dark" 
                title="Go to the GitHub project" 
                class="hover:opacity-50 flex gap-2 underline" 
                :href="gitHubUrl" 
                target="_blank">
                <Github class="inline my-auto"/>
                GitHub project
              </a>
            </div>
            <div class="my-4">
              <a v-if="liveSiteUrl" 
                data-twe-toggle="tooltip" 
                data-twe-ripple-init 
                data-twe-placement="bottom" 
                data-twe-ripple-color="dark" 
                title="Go to the project's live site" 
                class="hover:opacity-50 flex gap-2 underline" 
                :href="liveSiteUrl" 
                target="_blank">
                <Globe class="inline my-auto"/>
                Live site
              </a> 
            </div>
        </section>
      </div>
    </section>
</template>

<script>
// Octokit.js
// https://github.com/octokit/core.js#readme
import { Octokit} from "octokit"
import { builder } from '@/main'
import Progressbar from '../Process/Progressbar.vue'

export default {
    components: {
      Progressbar,
    },
    props: {
      devProcess: Object,
      gitRepo: String,
      gitHubUrl: String,
      liveSiteUrl: String
    },
    data() {
        return {
        repo: {},
        languages: {},
        originalDate: new Date(),
        };
    },
    methods: {
    formattedDate(date) {
      date = new Date (date);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
    urlFor(source) {
            return builder.image(source);
        },
  },
  async created() {
        const octokit = new Octokit({
        auth: import.meta.env.VITE_GITHUB_API_KEY
        });

        if (!this.gitRepo) return;

        try {
        const projectGitRepo = this.gitRepo;

        const [repoRes, langRes] = await Promise.all([
          octokit.request('GET /repos/{owner}/{repo}', {
            owner: 'ingring',
            repo: projectGitRepo,
            headers: {
              'Accept': 'application/vnd.github+json',
              'X-GitHub-Api-Version': '2022-11-28'
            }
          }),
          octokit.request('GET /repos/{owner}/{repo}/languages', {
            owner: 'ingring',
            repo: projectGitRepo,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
                'Accept': 'application/vnd.github+json'
            }
          })
        ]);
        this.repo = repoRes.data;
        this.languages = langRes.data;
        } catch (error) {
        console.error('Error:', error);
        }
    }
};

</script>
