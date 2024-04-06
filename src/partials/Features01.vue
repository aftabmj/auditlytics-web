<template>
  <section class="relative">
    <!-- Bg gradient: top -->
    <div
      class="absolute top-0 left-0 right-0 bg-gradient-to-b from-slate-800 to-transparent opacity-25 h-[25rem] pointer-events-none -z-10"
      aria-hidden="true"></div>

    <!-- Illustration -->
    <div class="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 mt-40 pointer-events-none -z-10"
      aria-hidden="true">
     
      <img src="../images/features-illustration-02.svg" class="max-w-none" width="1440" height="453"
        alt="Features 02 Illustration">
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">


        <div class="grid grid-cols-3 gap-4 "><!--grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">-->
          <div>
            <h3 class="text-lg font-semibold text-center ">Data Analytics</h3>
            <p class="p-2 text-indigo-200">Our data analytics services help businesses unlock the full potential of their data, by
              extracting
              actionable insights and making data-driven decisions.</p>
              <div>

            </div>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold text-center ">Risk Management</h3>
            <p class="p-2 text-indigo-200">
              Our proactive approach to risk management helps businesses identify and mitigate potential risks before
              they become a problem.</p>
         
          </div>
          <div>
            <h3 class="text-lg font-semibold text-center ">Assurance & Internal Audit</h3>
            <p class="p-2 text-indigo-200">Our internal audit services help businesses ensure the accuracy of their financial and
              operational reporting, while minimizing potential areas of risk.</p>
          </div>
      

              
          <router-link class="btn flex justify-center my-3 p-1 text-md font-medium text-gray-200 shadow-sm group" to="/signup">
                Read more <span
                  class="tracking-normal text-indigo-400  group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
              </router-link>
              <router-link class="btn flex justify-center my-3 p-1 text-md font-medium text-gray-200  shadow-sm group" to="/signup">
                Read more <span
                  class="tracking-normal text-indigo-400 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
              </router-link>
              <router-link class="btn flex justify-center my-3 p-1 text-md font-medium text-gray-200  shadow-sm group" to="/signup">
                Read more <span
                  class="tracking-normal text-indigo-400 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
              </router-link>

          <!-- Grid items -->
        </div>


      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'Features01'
}
</script>

<style scoped></style>