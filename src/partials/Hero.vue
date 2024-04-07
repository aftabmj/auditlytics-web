<template>
  <section class="relative">

    <!-- Illustration -->
    <div class="hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
      <img src="../images/hero-illustration.svg" class="max-w-none" width="1440" height="1265" alt="Hero Illustration">
    </div>

    <div class="relative max-w-6xl mx-auto px-2 sm:px-6">
      <div class="pt-32 md:pt-28">

        <!-- Hero content -->
        <div class="max-w-3xl mx-auto ">

          <h3 class="h3 font-hkgrotesk mb-2 text-center text-indigo-100">Transforming Business Landscape through Data
            and Risk
            Insights</h3>

          <div class="grid grid-cols-2 gap-4 my-10">
            <div>
              <ul class="list-none space-y-4" data-aos="fade-up" data-aos-delay="100">
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-indigo-400 mr-3 shrink-0" viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Gain strategic insights through data analytics and work towards increasing profitability and
                    transparency in your business operations.</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-indigo-400 mr-3 shrink-0" viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>
                    Comprehensive risk management, internal audit, and assurance services.
                  </span>
                </li>
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-indigo-400 mr-3 shrink-0" viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Customised & practical solutions in various aspects of data analytics, risk management,
                    assurance and
                    internal audit.</span>
                </li>
              </ul>

            </div>
            <div class="max-w-xs  mx-auto sm:max-w-none sm:inline-flex sm:justify-center flex items-center"
              data-aos="fade-up" data-aos-delay="200">
              <div>
                <!-- <router-link class="btn text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group" to="/signup">
                View All Services <span
                  class="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
              </router-link> -->
                <div class="inline-flex">
                  <!-- <button class="btn  bg-indigo-500 hover:bg-indigo-400  rounded-l"> -->
                  <router-link
                    class="btn  bg-gradient-to-r from-blue-700 to-purple-500 hover:from-blue-600 hover:to-purple-600  w-full text-sm shadow-sm group rounded-l-lg"
                    to="/servicesTech">
                    Data & Technology

                  </router-link>
                  <!-- <button class="btn  bg-indigo-500 hover:bg-indigo-400 text-sm ">
    Risk
  </button> -->

                  <router-link
                    class="btn bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-500 w-full text-sm shadow-sm group"
                    to="/servicesRisk">
                    Risk
                  </router-link>
                  <router-link
                    class="btn bg-gradient-to-r from-pink-500 to-red-800 hover:from-pink-500 hover:to-red-600 w-full text-sm shadow-sm group rounded-r-lg"
                    to="/servicesAssurance">
                    Assurance & IA
                  </router-link>

                </div>
                <!-- <router-link class="btn  bg-indigo-500 hover:bg-indigo-400 w-full shadow-sm group" to="/services">
                View All Services <span
                  class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
              </router-link> -->
              </div>

            </div>
          </div>

          <!-- <p class="text-xl text-slate-500 mb-10" data-aos="fade-up" data-aos-delay="100"> -->

          <!-- </p> -->



        </div>

        <!-- Hero image -->
        <!-- <div class="pt-16 md:pt-20" data-aos="fade-up" data-aos-delay="300">
          
          <img class="mx-auto" src="../images/hero-image.png" width="920" height="518" alt="Hero">
        </div> -->

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
}
</script>