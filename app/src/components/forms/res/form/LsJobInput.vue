<template>
    <div>
        <div class="mb-4 relative">
            <input type="text" v-model="searchQuery" @input="toggleResults(searchQuery.length > 0)"
                class="appearance-none p-4 bg-gray-100 text-sm  w-full rounded-lg text-gray-700 focus:outline-none " />
            <div v-if="filteredJobs.length > 0 && showResults"
                class="absolute top-full left-0 right-0 mt-1 border border-gray-100 bg-white rounded-lg z-10 max-h-60 overflow-auto">
                <ul class="space-y-2 p-2">
                    <li v-for="job in filteredJobs" :key="job.id" @click="selectJob(job)"
                        class="cursor-pointer  capitalize text-gray-700 p-4 rounded-lg hover:bg-gray-100" style="font-size:13px;">
                        {{ job.name }}
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            searchQuery: '',
            showResults: false,
            selectedJob: null,
            jobs: [
                { id: 1, name: 'software engineer', url: '#' },
                { id: 2, name: 'data analyst', url: '#' },
                { id: 3, name: 'product manager', url: '#' },
                { id: 4, name: 'graphic designer', url: '#' },
                { id: 5, name: 'UX/UI designer', url: '#' },
                { id: 6, name: 'cybersecurity specialist', url: '#' },
                { id: 7, name: 'digital marketing specialist', url: '#' },
                { id: 8, name: 'SEO expert', url: '#' },
                { id: 9, name: 'web developer', url: '#' },
                { id: 10, name: 'content writer', url: '#' },
                { id: 11, name: 'cloud engineer', url: '#' },
                { id: 12, name: 'IT consultant', url: '#' },
                { id: 13, name: 'network administrator', url: '#' },
                { id: 14, name: 'systems analyst', url: '#' },
                { id: 15, name: 'database administrator', url: '#' },
                { id: 16, name: 'AI researcher', url: '#' },
                { id: 17, name: 'machine learning engineer', url: '#' },
                { id: 18, name: 'robotics engineer', url: '#' },
                { id: 19, name: 'blockchain developer', url: '#' },
                { id: 20, name: 'game developer', url: '#' },
                { id: 21, name: 'mobile app developer', url: '#' },
                { id: 22, name: 'technical writer', url: '#' },
                { id: 23, name: 'quality assurance engineer', url: '#' },
                { id: 24, name: 'sales engineer', url: '#' },
                { id: 25, name: 'biotechnology researcher', url: '#' },
                { id: 26, name: 'environmental engineer', url: '#' },
                { id: 27, name: 'civil engineer', url: '#' },
                { id: 28, name: 'mechanical engineer', url: '#' },
                { id: 29, name: 'electrical engineer', url: '#' },
                { id: 30, name: 'chemical engineer', url: '#' },
                { id: 31, name: 'industrial engineer', url: '#' },
                { id: 32, name: 'architect', url: '#' },
                { id: 33, name: 'interior designer', url: '#' },
                { id: 34, name: 'real estate consultant', url: '#' },
                { id: 35, name: 'financial analyst', url: '#' },
                { id: 36, name: 'accountant', url: '#' },
                { id: 37, name: 'investment banker', url: '#' },
                { id: 38, name: 'insurance agent', url: '#' },
                { id: 39, name: 'human resources manager', url: '#' },
                { id: 40, name: 'public relations specialist', url: '#' },
                { id: 41, name: 'event planner', url: '#' },
                { id: 42, name: 'logistics manager', url: '#' },
                { id: 43, name: 'supply chain manager', url: '#' },
                { id: 44, name: 'business analyst', url: '#' },
                { id: 45, name: 'consultant', url: '#' },
                { id: 46, name: 'entrepreneur', url: '#' },
                { id: 47, name: 'legal advisor', url: '#' },
                { id: 48, name: 'corporate lawyer', url: '#' },
                { id: 49, name: 'journalist', url: '#' },
                { id: 50, name: 'editor', url: '#' },
                { id: 51, name: 'photographer', url: '#' },
                { id: 52, name: 'videographer', url: '#' },
                { id: 53, name: 'graphic artist', url: '#' },
                { id: 54, name: 'fashion designer', url: '#' },
                { id: 55, name: 'nutritionist', url: '#' }
            ]


        };
    },
    computed: {
        filteredJobs() {
            return this.jobs.filter(job =>
                job.name.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },
    },
    methods: {
        selectJob(job) {
            this.selectedJob = job;
            this.showResults = false; // Fermer la liste des résultats après une sélection
            console.log('Job sélectionné:', this.selectedJob);
            // Vous pouvez aussi traiter le job sélectionné comme nécessaire ici
        },
        toggleResults(show) {
            this.showResults = show;
        },
    },
};
</script>
<style scoped>
::-webkit-scrollbar {
    width: 4px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: #222;
}

::-webkit-scrollbar-thumb:hover {
    background: #67e8f9;
}
</style>