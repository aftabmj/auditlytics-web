<template>
  <section class="relative border-t border-slate-800">

    <!-- Bg gradient: top -->
    <div class="absolute top-0 left-0 right-0 bg-gradient-to-b from-slate-800 to-transparent opacity-25 h-[25rem] pointer-events-none -z-10" aria-hidden="true"></div>

    <!-- Illustration -->
    <div class="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 mt-40 pointer-events-none -z-10" aria-hidden="true">
      <img src="../images/features-illustration-02.svg" class="max-w-none" width="1440" height="453" alt="Features 02 Illustration">
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 font-hkgrotesk">Features to help you create your best designs</h2>
        </div>

        <!-- Box -->
        <div class="bg-slate-800 bg-opacity-60 rounded overflow-hidden">
          <div class="flex flex-col md:flex-row items-end md:items-start md:justify-between lg:space-x-20">
            <div class="md:min-w-[28rem] p-6 lg:p-10">

              <!-- Filters -->
              <div class="mb-6 lg:mb-8">
                <div class="flex flex-wrap -m-1.5">
                  <button class="btn-sm px-3 py-1 shadow-sm rounded-full m-1.5" :class="category === '1' ? 'text-white bg-indigo-500' : 'text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600'" @click="category = '1'">Everyone</button>
                  <button class="btn-sm px-3 py-1 shadow-sm rounded-full m-1.5" :class="category === '2' ? 'text-white bg-indigo-500' : 'text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600'" @click="category = '2'">Freelancers</button>
                  <button class="btn-sm px-3 py-1 shadow-sm rounded-full m-1.5" :class="category === '3' ? 'text-white bg-indigo-500' : 'text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600'" @click="category = '3'">Organizations</button>
                </div>
              </div>

              <!-- Content -->
              <div>
                <div v-show="category === '1'">
                  <h3 class="h3 font-hkgrotesk mb-2">Kickstart your project with these tools</h3>
                  <div class="text-lg text-slate-500">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt laborum.</div>
                </div>
                <div v-show="category === '2'">
                  <h3 class="h3 font-hkgrotesk mb-2">Tech tools to kickstart freelance life</h3>
                  <div class="text-lg text-slate-500">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt laborum.</div>
                </div>
                <div v-show="category === '3'">
                  <h3 class="h3 font-hkgrotesk mb-2">Share your plan and clarify project risk</h3>
                  <div class="text-lg text-slate-500">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt laborum.</div>
                </div>
              </div>

            </div>

            <img src="../images/features-image.png" class="md:max-w-none" width="480" height="414" alt="Feature">

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Features02',
  data: function () {
    return {
      category: '1'
    }
  },   
}
</script>