<template>
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <header class="absolute w-full z-30">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="flex items-center justify-between h-16 md:h-20">

          <!-- Site branding -->
          <div class="shrink-0 mr-4">
            <!-- Logo -->
            <router-link class="block" to="/" aria-label="DataLytics">
              <img class="w-12" src="../images/logo2.png" />
              <!-- <svg class="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient x1="0%" y1="32.443%" x2="104.18%" y2="50%" id="hlogo-a">
                    <stop stop-color="#FFF" stop-opacity=".299" offset="0%" />
                    <stop stop-color="#7587E4" stop-opacity="0" offset="100%" />
                  </linearGradient>
                  <linearGradient x1="18.591%" y1="0%" x2="100%" y2="100%" id="hlogo-b">
                    <stop stop-color="#818CF8" offset="0%" />
                    <stop stop-color="#C7D2FE" offset="100%" />
                  </linearGradient>
                </defs>
                <g fill="none" fill-rule="evenodd">
                  <path fill="#3730A3" d="M16 18.5V32l15.999-9.25V9.25z" />
                  <path fill="#4F46E5" d="m0 23 16 9V18.501L0 9.251z" />
                  <path fill-opacity=".64" fill="url(#hlogo-a)" d="M16 13 0 23l16 9 16-9z" />
                  <path fill="url(#hlogo-b)" d="M16 0 0 9.25l16 9.25 15.999-9.25z" />
                </g>
              </svg> -->
            </router-link>
          </div>

        </div>
      </div>
    </header>

    <main class="grow">

      <section class="relative">

        <!-- Illustration -->
        <div class="hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
          <img src="../images/auth-illustration.svg" class="max-w-none" width="1440" height="332" alt="Page Illustration">
        </div>

        <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div class="pt-32 pb-12 md:pt-40 md:pb-20">

            <div class="lg:flex lg:space-x-20">

              <!-- Left side -->
              <div class="grow lg:mt-20 mb-12 lg:mb-0 flex flex-col items-center lg:items-start">
                <!-- Avatars -->
                <!-- <div class="flex -space-x-3 -ml-0.5 mb-6">
                  <img class="rounded-full border-2 border-slate-900 box-content" src="../images/avatar-01.jpg" width="40" height="40" alt="Avatar 01" />
                  <img class="rounded-full border-2 border-slate-900 box-content" src="../images/avatar-02.jpg" width="40" height="40" alt="Avatar 02" />
                  <img class="rounded-full border-2 border-slate-900 box-content" src="../images/avatar-03.jpg" width="40" height="40" alt="Avatar 03" />
                  <img class="rounded-full border-2 border-slate-900 box-content" src="../images/avatar-04.jpg" width="40" height="40" alt="Avatar 04" />
                </div> -->
                <!-- Headline -->
                <h1 class="h3 font-hkgrotesk mb-8 text-center lg:text-left">Interested in Learning More? </h1>

                <h2 class="h4 font-hkgrotesk mb-8 text-center lg:text-left">Get in Touch With Us!</h2>
                <p class="h5 font-semibold">
                We are ready to address your questions and explore ways we can support your business.
                </p>
                <p>&nbsp;</p>
                <p class="h5 font-semibold">
                  Please email us at <b><a href="mailto:info@auditlytics.nz">
                    info@auditlytics.nz 
                    </a></b> and we will be in touch.

              </p>
                <!-- List -->
                <!-- <ul class="inline-flex flex-col text-lg text-slate-500 space-y-3">
                  <li class="flex items-center">
                    <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Excepteur sint occaecat cupidatat non proident sunt in culpa.</span>
                  </li>
                  <li class="flex items-center">
                    <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Duis aute irure dolor in reprehenderit in voluptate.</span>
                  </li>
                  <li class="flex items-center">
                    <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                  </li>
                </ul> -->
              </div>

              <!-- Right side -- >
              <div class="relative w-full max-w-md mx-auto">

                <!- - Bg gradient -- >
                <div class="absolute inset-0 opacity-40 bg-gradient-to-t from-transparent to-slate-800 -z-10" aria-hidden="true"></div>

                <div class="p-6 md:p-8">
                  <div class="font-hkgrotesk text-xl font-bold mb-6">Let's talk</div>

                  <!- - Form -- >
                  <form>
                    <div class="space-y-4">
                      <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                        <div class="sm:w-1/2">
                          <label class="block text-sm text-slate-400 font-medium mb-1" for="name">Name <span class="text-rose-500">*</span></label>
                          <input id="name" class="form-input text-sm py-2 w-full" type="text" required />
                        </div>
                        <div class="sm:w-1/2">
                          <label class="block text-sm text-slate-400 font-medium mb-1" for="surname">Surname <span class="text-rose-500">*</span></label>
                          <input id="surname" class="form-input text-sm py-2 w-full" type="text" required />
                        </div>
                      </div>
                      <div>
                        <label class="block text-sm text-slate-400 font-medium mb-1" for="email">Email <span class="text-rose-500">*</span></label>
                        <input id="email" class="form-input text-sm py-2 w-full" type="email" required />
                      </div>
                      <div>
                        <label class="block text-sm text-slate-400 font-medium mb-1" for="phone">Phone </label>
                        <input id="phone" class="form-input text-sm py-2 w-full" type="text" required />
                      </div>
                      <div>
                        <label class="block text-sm text-slate-400 font-medium mb-1" for="message">How can we help? </label>
                        <textarea id="message" class="form-textarea text-sm py-2 w-full" rows="4" required></textarea>
                      </div>
                    </div>
                    <div class="mt-6">
                      <button class="btn-sm text-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group">
                        Submit <span class="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                      </button>
                    </div>
                  </form>

                </div>
              </div>
              <!- - Right side -->
            </div>

          </div>
        </div>

      </section>
     <!-- Site footer -->
     <Footer />  
    </main>

  </div>
   
</template>

<script>
import Footer from '../partials/Footer.vue'
export default {
  name: 'SignIn',
  components: {
    Footer,
  }
}
</script>