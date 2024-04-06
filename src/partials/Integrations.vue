<template>
  <section class="relative">

    <!-- Bottom vertical line -->
    <div class="hidden md:block absolute w-0.5 h-8 bottom-0 bg-slate-800 left-1/2 -translate-x-1/2" aria-hidden="true"></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20 border-t border-slate-800">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12">
          <h2 class="h2 font-hkgrotesk">An ecosystem of integrations</h2>
        </div>

        <!-- Logo animation -->
        <div class="relative flex flex-col items-center p-16">
          <!-- Blurred dots -->
          <svg class="absolute top-1/2 -translate-y-1/2" width="557" height="93" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="hlogo-blurreddots-a">
                <feGaussianBlur stdDeviation="2" in="SourceGraphic" />
              </filter>
              <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="blurreddots-b">
                <feGaussianBlur stdDeviation="2" in="SourceGraphic" />
              </filter>
              <filter x="-150%" y="-150%" width="400%" height="400%" filterUnits="objectBoundingBox" id="blurreddots-c">
                <feGaussianBlur stdDeviation="6" in="SourceGraphic" />
              </filter>
              <filter x="-150%" y="-150%" width="400%" height="400%" filterUnits="objectBoundingBox" id="blurreddots-d">
                <feGaussianBlur stdDeviation="4" in="SourceGraphic" />
              </filter>
              <filter x="-150%" y="-150%" width="400%" height="400%" filterUnits="objectBoundingBox" id="blurreddots-e">
                <feGaussianBlur stdDeviation="4" in="SourceGraphic" />
              </filter>
              <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="blurreddots-f">
                <feGaussianBlur stdDeviation="2" in="SourceGraphic" />
              </filter>
              <filter x="-100%" y="-100%" width="300%" height="300%" filterUnits="objectBoundingBox" id="blurreddots-g">
                <feGaussianBlur stdDeviation="4" in="SourceGraphic" />
              </filter>
              <filter x="-150%" y="-150%" width="400%" height="400%" filterUnits="objectBoundingBox" id="blurreddots-h">
                <feGaussianBlur stdDeviation="6" in="SourceGraphic" />
              </filter>
              <filter x="-150%" y="-150%" width="400%" height="400%" filterUnits="objectBoundingBox" id="blurreddots-i">
                <feGaussianBlur stdDeviation="4" in="SourceGraphic" />
              </filter>
              <filter x="-75%" y="-75%" width="250%" height="250%" filterUnits="objectBoundingBox" id="blurreddots-j">
                <feGaussianBlur stdDeviation="2" in="SourceGraphic" />
              </filter>
            </defs>
            <g fill="none" fill-rule="evenodd">
              <g class="fill-indigo-600" transform="translate(437 8)">
                <circle fill-opacity=".64" filter="url(#blurreddots-a)" cx="6" cy="66" r="6" />
                <circle fill-opacity=".32" filter="url(#blurreddots-b)" cx="90" cy="6" r="6" />
                <circle fill-opacity=".64" filter="url(#blurreddots-c)" cx="90" cy="66" r="6" />
                <circle fill-opacity=".32" filter="url(#blurreddots-d)" cx="6" cy="36" r="4" />
                <circle fill-opacity=".32" filter="url(#blurreddots-e)" cx="60" cy="36" r="4" />
                <circle fill-opacity=".64" cx="34" cy="22" r="2" />
                <circle fill-opacity=".32" cx="34" cy="50" r="2" />
                <circle fill-opacity=".64" cx="118" cy="22" r="2" />
                <circle fill-opacity=".32" cx="118" cy="50" r="2" />
              </g>
              <g class="fill-indigo-600" transform="matrix(-1 0 0 1 120 8)">
                <circle fill-opacity=".64" filter="url(#blurreddots-f)" cx="6" cy="66" r="6" />
                <circle fill-opacity=".32" filter="url(#blurreddots-g)" cx="90" cy="6" r="6" />
                <circle fill-opacity=".64" filter="url(#blurreddots-h)" cx="90" cy="66" r="6" />
                <circle fill-opacity=".32" filter="url(#blurreddots-i)" cx="6" cy="36" r="4" />
                <circle fill-opacity=".64" filter="url(#blurreddots-j)" cx="60" cy="36" r="4" />
                <circle fill-opacity=".32" cx="34" cy="22" r="2" />
                <circle fill-opacity=".32" cx="34" cy="50" r="2" />
                <circle fill-opacity=".64" cx="118" cy="22" r="2" />
                <circle fill-opacity=".32" cx="118" cy="50" r="2" />
              </g>
            </g>
          </svg>
          <div class="relative w-32 h-32 flex justify-center items-center">
            <!-- Halo effect -->
            <svg class="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none h-auto max-w-[200%]" width="800" height="800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="lg-1">
                  <stop stop-color="#0F172A" stop-opacity="0%" offset="0%"></stop>
                  <stop stop-color="#0F172A" offset="100%"></stop>
                </linearGradient>
              </defs>
              <g class="fill-indigo-600 opacity-75" fill-rule="evenodd">
                <circle class="pulse" cx="400" cy="400" r="200" />
                <circle class="pulse pulse-1" cx="400" cy="400" r="200" />
                <circle class="pulse pulse-2" cx="400" cy="400" r="200" />
                <circle class="pulse pulse-3" cx="400" cy="400" r="200" />
                <rect fill="url(#lg-1)" width="800" height="800" />
              </g>
            </svg>
            <!-- Logo -->
            <svg class="w-16 h-16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient x1="0%" y1="32.443%" x2="104.18%" y2="50%" id="a">
                  <stop stop-color="#FFF" stop-opacity=".299" offset="0%" />
                  <stop stop-color="#7587E4" stop-opacity="0" offset="100%" />
                </linearGradient>
                <linearGradient x1="18.591%" y1="0%" x2="100%" y2="100%" id="b">
                  <stop stop-color="#818CF8" offset="0%" />
                  <stop stop-color="#C7D2FE" offset="100%" />
                </linearGradient>
              </defs>
              <g fill="none" fill-rule="evenodd">
                <path fill="#3730A3" d="M16 18.5V32l15.999-9.25V9.25z" />
                <path fill="#4F46E5" d="m0 23 16 9V18.501L0 9.251z" />
                <path fill-opacity=".64" fill="url(#a)" d="M16 13 0 23l16 9 16-9z" />
                <path fill="url(#b)" d="M16 0 0 9.25l16 9.25 15.999-9.25z" />
              </g>
            </svg>
          </div>
        </div>

        <!-- Integration boxes -->
        <div class="relative max-w-xs sm:max-w-md mx-auto md:max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-10 md:mt-20">
          <!-- Top vertical line -->
          <div class="hidden md:block absolute w-0.5 h-8 -top-16 -mt-2 bg-slate-800 left-1/2 -translate-x-1/2" aria-hidden="true"></div>
          <div class="relative flex justify-center items-center bg-slate-800 aspect-square p-2" data-aos="fade-up">
            <!-- Inner lines -->
            <div class="hidden md:block absolute inset-0 w-[calc(100%+24px)] h-6 -top-10 left-1/2 -translate-x-1/2" aria-hidden="true">
              <div class="absolute w-0.5 h-full bg-slate-800 left-1/2 -translate-x-1/2"></div>
              <div class="absolute w-1/2 h-0.5 bg-slate-800 right-0"></div>
            </div>
            <!-- Circle -->
            <div class="bg-gradient-to-t from-slate-800 to-slate-900 w-20 h-20 rounded-full flex justify-center items-center">
              <!-- Icon -->
              <img src="../images/integration-icon-01.svg" width="36" height="46" alt="Icon 01">
            </div>
          </div>
          <div class="relative flex justify-center items-center bg-slate-800 aspect-square p-2" data-aos="fade-up" data-aos-delay="100">
            <!-- Inner lines -->
            <div class="hidden md:block absolute inset-0 w-[calc(100%+24px)] h-6 -top-10 left-1/2 -translate-x-1/2" aria-hidden="true">
              <div class="absolute w-0.5 h-full bg-slate-800 left-1/2 -translate-x-1/2"></div>
              <div class="absolute w-full h-0.5 bg-slate-800"></div>
            </div>
            <!-- Circle -->
            <div class="bg-gradient-to-t from-slate-800 to-slate-900 w-20 h-20 rounded-full flex justify-center items-center">
              <!-- Icon -->
              <img src="../images/integration-icon-02.svg" width="46" height="46" alt="Icon 02">
            </div>
          </div>
          <div class="relative flex justify-center items-center bg-slate-800 aspect-square p-2" data-aos="fade-up" data-aos-delay="200">
            <!-- Inner lines -->
            <div class="hidden md:block absolute inset-0 w-[calc(100%+24px)] h-6 -top-10 left-1/2 -translate-x-1/2" aria-hidden="true">
              <div class="absolute w-0.5 h-full bg-slate-800 left-1/2 -translate-x-1/2"></div>
              <div class="absolute w-full h-0.5 bg-slate-800"></div>
            </div>
            <!-- Circle -->
            <div class="bg-gradient-to-t from-slate-800 to-slate-900 w-20 h-20 rounded-full flex justify-center items-center">
              <!-- Icon -->
              <img src="../images/integration-icon-03.svg" width="53" height="45" alt="Icon 03">
            </div>
          </div>
          <div class="relative flex justify-center items-center bg-slate-800 aspect-square p-2" data-aos="fade-up" data-aos-delay="300">
            <!-- Inner lines -->
            <div class="hidden md:block absolute inset-0 w-[calc(100%+24px)] h-6 -top-10 left-1/2 -translate-x-1/2" aria-hidden="true">
              <div class="absolute w-0.5 h-full bg-slate-800 left-1/2 -translate-x-1/2"></div>
              <div class="absolute w-full h-0.5 bg-slate-800"></div>
            </div>
            <!-- Circle -->
            <div class="bg-gradient-to-t from-slate-800 to-slate-900 w-20 h-20 rounded-full flex justify-center items-center">
              <!-- Icon -->
              <img src="../images/integration-icon-04.svg" width="48" height="46" alt="Icon 04">
            </div>
          </div>
          <div class="relative flex justify-center items-center bg-slate-800 aspect-square p-2" data-aos="fade-up" data-aos-delay="400">
            <!-- Inner lines -->
            <div class="hidden md:block absolute inset-0 w-[calc(100%+24px)] h-6 -top-10 left-1/2 -translate-x-1/2" aria-hidden="true">
              <div class="absolute w-0.5 h-full bg-slate-800 left-1/2 -translate-x-1/2"></div>
              <div class="absolute w-full h-0.5 bg-slate-800"></div>
            </div>
            <!-- Circle -->
            <div class="bg-gradient-to-t from-slate-800 to-slate-900 w-20 h-20 rounded-full flex justify-center items-center">
              <!-- Icon -->
              <img src="../images/integration-icon-05.svg" width="49" height="48" alt="Icon 05">
            </div>
          </div>
          <div class="relative flex justify-center items-center bg-slate-800 aspect-square p-2" data-aos="fade-up" data-aos-delay="500">
            <!-- Inner lines -->
            <div class="hidden md:block absolute inset-0 w-[calc(100%+24px)] h-6 -top-10 left-1/2 -translate-x-1/2" aria-hidden="true">
              <div class="absolute w-0.5 h-full bg-slate-800 left-1/2 -translate-x-1/2"></div>
              <div class="absolute w-1/2 h-0.5 bg-slate-800 left-0"></div>
            </div>
            <!-- Circle -->
            <div class="bg-gradient-to-t from-slate-800 to-slate-900 w-20 h-20 rounded-full flex justify-center items-center">
              <!-- Icon -->
              <img src="../images/integration-icon-06.svg" width="48" height="44" alt="Icon 06">
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Integrations',
}
</script>