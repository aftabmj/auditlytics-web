<template>
  <header class="absolute w-full z-30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">

        <!-- Site branding -->
        <div class="shrink-0 mr-4">
          <!-- Logo -->
          <router-link class="block" to="/" aria-label="Cruip">
            <img class="w-12" src="../images/logo2.png" />
            <!-- <img class="w-12" src="../images/logo-whitestar.png" /> -->
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

        <!-- Desktop navigation -->
        <nav class="flex grow">

          <!-- Desktop sign in links -->
        
          <ul class="flex grow justify-end flex-wrap items-center">
          <!-- <li>  Services:  [</li> -->
            <li>
              <router-link
                class="font-medium text-indigo-200 hover:text-slate-300 px-1 lg:px-2 py-2 flex items-center transition duration-150 ease-in-out"
                to="/servicesTech">Data & Technology</router-link>
            </li>
            <li>
              <router-link
                class="font-medium text-indigo-200 hover:text-slate-300 px-1 lg:px-2 py-2 flex items-center transition duration-150 ease-in-out"
                to="/servicesRisk">Risk</router-link>
            </li>
            <li>
              <router-link
                class="font-medium text-indigo-200 hover:text-slate-300 px-1 lg:px-2 py-2 flex items-center transition duration-150 ease-in-out"
                to="/servicesAssurance">Assurance & IA</router-link> 
            </li> 
            <li> &nbsp;</li>       
                   
            <li>
              <router-link
                class="font-medium text-indigo-200 bg-indigo-900 hover:text-slate-300 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                to="/signup"> Contact Us </router-link>
            </li>          
          </ul>

        </nav>

      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>