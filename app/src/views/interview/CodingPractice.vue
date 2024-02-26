<template>
    <div style="background-color: #001E3D;">
        <div class="mx-auto  rounded-lg ">
            <div>
                <div class="flex flex-wrap">
                    <div class="w-full lg:w-1/3  text-white ">
                        <div class="border-b">
                            <div class="px-8 py-4 h-15">
                                <div class="flex flex-nowrap be ">
                                    <div class="font-bold pt-2 w-20">Time</div>
                                    <div class="time">
                                        <div class="py-2 px-3 font-bold border text-xs border-white w-fit rounded-lg">
                                            10:30
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-8">
                            <h3 class="text-3xl">
                                <b>
                                    Exercise: Task Planner
                                </b>
                            </h3>
                            <div class="pt-4">
                                Objective: Develop a simple web application that allows users to manage their daily tasks.
                                The application should enable users to add tasks, display a list of tasks, and toggle tasks
                                between completed and incomplete states.
                                <br><br>
                                <b>Requirements:</b>
                                <div class="pt-2">
                                    <b>Add Task:</b>
                                    <br>

                                    Provide an input field where users can type in a new task. <br>
                                    Include an "Add" button to submit the new task. <br>
                                    When a new task is added, clear the input field and display the task in the task list.
                                    <br>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/3 border-r border-l h-screen 100">
                        <div class="">
                            <div class="flex flex-nowrap text-white ">
                                <div class="px-8 bg-gray-900 text-sm py-6">index.js</div>
                                
                            </div>
                        </div>
                        <div>
                            <div ref="editor" class="editor"></div> 
                        </div>
                    </div>
                    <div class="w-full lg:w-1/3 h-screen 100">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import * as monaco from 'monaco-editor';

export default {
    name: 'MonacoEditor',
    mounted() {
        this.editor = monaco.editor.create(this.$refs.editor, {
            value: '// Tapez votre code ici\nfunction Sayhello(n: String): String { \n console.log()\n};',
            language: 'javascript',
            theme: 'vs-dark'
        });
    },
    beforeDestroy() {
        if (this.editor) {
            this.editor.dispose();
        }
    }
}
</script>
<style>
.editor {
    width: 100%;
    height: 95vh;
    background: transparent !important;
}


.codeHeader {
    background: #000C1A;
    border-top-right-radius: 6px;
}

.qheader {
    background: #001429;
    border-top-left-radius: 6px;
}

.bg-noise {
    background-image: url('https://arc.net/noise-light.png');
}
</style>