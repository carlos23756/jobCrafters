<template>
    <div class="progress-container">
      <svg viewBox="0 0 36 18" class="progress-bar">
        <path
          d="M 2,16 A 14 14 0 0 1 34 16"
          fill="none"
          :stroke="backgroundColor"
          stroke-width="3.5"
        />
        <path
          d="M 2,16 A 14 14 0 0 1 34 16"
          fill="none"
          :stroke="progressColor"
          stroke-width="3.5"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="circumference - progress / 100 * circumference"
          stroke-linecap="round"
        />
        <text x="50%" y="17" text-anchor="middle" :fill="textColor">{{ computedProgress }}%</text>
      </svg>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SemiCircleProgressBar',
    props: {
      progress: {
        type: Number,
        required: true,
      },
      backgroundColor: {
        type: String,
        default: '#dbeafe',
      },
      progressColor: {
        type: String,
        default: '#2196F3',
      },
      textColor: {
        type: String,
        default: '#2196F3',
      },
    },
    computed: {
      computedProgress() {
        return Math.min(Math.max(this.progress, 0), 100);
      },
      circumference() {
        return Math.PI * 14; // Circumference of the circle (semi-circle in this case)
      },
    },
  };
  </script>
  
  <style scoped>
  .progress-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .progress-bar {
    width: 100%;
    min-height: 68px;
  }
  text{
    font-size: 5px;
    font-weight: bold;
  }
  </style>
  