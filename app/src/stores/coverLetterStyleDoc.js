import { defineStore } from "pinia";
export const useCoverLetterStyleDoc = defineStore("coverLetterStyleDoc", {

    state: () => ({
        coverLetterTemplates: [
            {
                //Template 1
                currentColorId: 1,
                colors: [
                    { id: 0, bgColor: 'bg-yellow-500', ringColor: 'ring-yellow-500' },
                    { id: 1, bgColor: 'bg-blue-500', ringColor: 'ring-blue-500' },
                    { id: 2, bgColor: 'bg-amber-500', ringColor: 'ring-amber-500' },
                    { id: 3, bgColor: 'bg-green-500', ringColor: 'ring-green-500' },

                ],
                textcolors: [
                    { id: 0, textColor: 'text-yellow-500' },
                    { id: 1, textColor: 'text-blue-500' },
                    { id: 2, textColor: 'text-amber-500' },
                    { id: 3, textColor: 'text-green-500' },

                ],
                fillColors: [
                    { id: 0, fill: 'fill-yellow-600' },
                    { id: 1, fill: 'fill-blue-600' },
                    { id: 2, fill: 'fill-amber-500' },
                    { id: 3, fill: 'fill-blue-500' },
                ]
            }
        ],
        currentTemplateId: 0,
    }),
    getters:{
        getCurrentColors: (state) => {
            return state.coverLetterTemplates[state.currentTemplateId].colors;
        },
        getCurrentColorId: (state) => {
            return state.coverLetterTemplates[state.currentTemplateId].currentColorId;
        }
    }
});