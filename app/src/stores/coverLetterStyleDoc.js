import { defineStore } from "pinia";

export const useCoverLetterStyleDoc = defineStore("coverLetterStyleDoc", {
    state: () => ({
        coverLetterTemplates: [],
        currentTemplateId: 0,
    }),

    actions: {
        generateTemplateColors(colorNames) {
            const generatedTemplate = {
                currentColorId: 0,
                colors: colorNames.map((color, id) => ({
                    id,
                    bgColor: `bg-${color}-500`,
                    ringColor: `ring-${color}-500`,
                })),
                textcolors: colorNames.map((color, id) => ({
                    id,
                    textColor: `text-${color}-500`,
                })),
                fillColors: colorNames.map((color, id) => ({
                    id,
                    fill: `fill-${color}-600`,
                })),
            };

            this.coverLetterTemplates.push(generatedTemplate);
        },

        generateColors() {
            if (this.coverLetterTemplates.length === 0) {
                //Template 1
                this.generateTemplateColors(["yellow", "blue", "red"]);
                //Template 2
                this.generateTemplateColors(["gray", "yellow"]);
            }
        },
        setThecurrentColorIdOfTheCurrentTemplate(id) {
            this.coverLetterTemplates[this.currentTemplateId].currentColorId = id;
        }
    },

    getters: {
        getCurrentColors: (state) => {
            return state.coverLetterTemplates[state.currentTemplateId]?.colors || [];
        },
        getCurrentTextColors: (state) => {
            return state.coverLetterTemplates[state.currentTemplateId]?.textcolors || [];
        },
        getCurrentFillColors: (state) => {
            return state.coverLetterTemplates[state.currentTemplateId]?.fillColors || [];
        },

        getCurrentColorId: (state) => {
            return state.coverLetterTemplates[state.currentTemplateId]?.currentColorId || 0;
        },
        getCurrentColorIdOfTheCurrentTemplate: (state) => {
            return state.coverLetterTemplates[state.currentTemplateId]?.currentColorId || 0;
        },
        getCurrentTextColor: (state) => {
            const ctextColor = this.getCurrentTextColors;
            return "currentTextColorArrayofTheCurrentTemplate";
        },
    },
});
