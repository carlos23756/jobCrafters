<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-6 py-20 sm:py-20 lg:px-8 lg:py-20">
      <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h2 class="text-4xl font-bold leading-10 tracking-tight text-blue-600">Frequently asked questions</h2>
        <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
          <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="pt-6" v-slot="{ open }">
            <dt>
              <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-900">
                <span class="text-base font-semibold leading-7">{{ faq.question }}</span>
                <span class="ml-6 flex h-7 items-center">
                  <PlusSmallIcon v-if="!open" class="h-6 w-6 text-blue-600" aria-hidden="true" />
                  <MinusSmallIcon v-else class="h-6 w-6 text-blue-600" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base leading-7 text-gray-600">{{ faq.answer }}</p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'

const faqs = [
  {
    question: "How do I create a new account?",
    answer: "You can create a new account by clicking on the 'Sign Up' button on our homepage and following the instructions provided.",
  },
  {
    question: "Can I submit my resume for multiple job applications?",
    answer: "Yes, once you've uploaded your resume, you can apply to multiple jobs that match your skills and interests.",
  },
  {
    question: "What makes your job matching algorithm unique?",
    answer: "Our algorithm considers your skills, experiences, and preferences to match you with the best possible job opportunities.",
  },
  {
    question: "How often are new jobs posted?",
    answer: "New jobs are posted daily. We recommend checking the platform regularly or setting up job alerts for the latest opportunities.",
  },
  {
    question: "Can I change my job preferences after signing up?",
    answer: "Absolutely! You can update your job preferences anytime in your profile settings to reflect your current job search goals.",
  },
  {
    question: "What should I include in my resume?",
    answer: "Your resume should include your contact information, work experience, education, skills, and any relevant certifications or achievements.",
  },
  {
    question: "How can I prepare for an interview?",
    answer: "We offer various resources including common interview questions, tips for presenting yourself, and practice interviews with video feedback.",
  },
  {
    question: "Is there a fee for using the platform?",
    answer: "Our basic job search and application services are free. We also offer premium services like resume building and coaching sessions for a fee.",
  },
  {
    question: "How do I know if a job is still available?",
    answer: "Job listings are updated in real-time. If a job is listed, it's still accepting applications.",
  },
  {
    question: "Can I get feedback on my application?",
    answer: "While we can't provide personalized feedback for all applications, our premium services include resume reviews and interview coaching.",
  },
  {
    question: "What is the best way to use your platform for job searching?",
    answer: "Create a comprehensive profile, use filters to refine your job search, apply to jobs that match your skills, and utilize our resources for preparation.",
  },
  {
    question: "How secure is my personal information on your platform?",
    answer: "We prioritize your privacy and security, using industry-standard encryption and security measures to protect your information.",
  },
  {
    question: "Can I apply to international job postings?",
    answer: "Yes, we support job searches and applications to opportunities worldwide, depending on the employer's requirements.",
  },
  {
    question: "What is the success rate of job seekers on your platform?",
    answer: "Many of our users have successfully found jobs through our platform. Success rates vary based on industry, location, and individual efforts.",
  },
  {
    question: "How can I deactivate my account?",
    answer: "You can deactivate your account from the settings page. If you need further assistance, please contact our support team.",
  },
];

</script>