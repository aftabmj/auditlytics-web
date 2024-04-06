<template>
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <header class="absolute w-full z-30">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="flex items-center justify-between h-16 md:h-20">

          <!-- Site branding -->
          <div class="shrink-0 mr-4">
            <!-- Logo -->
            <router-link class="block" to="/" aria-label="Cruip">
              <svg class="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
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
              </svg>
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

            <!-- Page header -->
            <div class="max-w-3xl mx-auto text-center pb-12">
              <h1 class="h2 font-hkgrotesk">Change your password</h1>
            </div>

            <!-- Form -->
            <div class="max-w-sm mx-auto">

              <form>
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm text-slate-500 font-medium mb-1" for="email">Email</label>
                    <input id="email" class="form-input text-sm py-2 w-full" type="email" required />
                  </div>
                </div>
                <div class="mt-6">
                  <button class="btn-sm text-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group">
                    Reset Password <span class="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </button>
                </div>
              </form>

            </div>

          </div>
        </div>

      </section>

    </main>

  </div>
</template>

<script>
export default {
  name: 'ResetPassword',
}
</script>