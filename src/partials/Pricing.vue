<template>
  <section class="relative">

    <!-- Illustration -->
    <div class="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 -mb-24 pointer-events-none -z-10" aria-hidden="true">
      <img src="../images/pricing-illustration.svg" class="max-w-none" width="1440" height="440" alt="Pricing Illustration">
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-10 pb-12 md:pb-20">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 font-hkgrotesk mb-4">Let's find the right plan for you business</h2>
          <p class="text-xl text-slate-500">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.</p>
        </div>

        <!-- Pricing tables -->
        <div class="grid md:grid-cols-6">

          <!-- Pricing toggle -->
          <div class="flex flex-col justify-center p-4 md:px-6 bg-slate-800 md:col-span-3">

            <div class="flex justify-center md:justify-start items-center space-x-4">
              <div class="text-sm text-slate-500 font-medium min-w-[6rem] md:min-w-0 text-right">Monthly</div>
              <div class="form-switch shrink-0">
                <input type="checkbox" id="toggle" class="sr-only" v-model="annual" />
                <label class="bg-slate-900" for="toggle">
                  <span class="bg-slate-200" aria-hidden="true"></span>
                  <span class="sr-only">Pay annually</span>
                </label>
              </div>
              <div class="text-sm text-slate-500 font-medium min-w-[6rem]">Yearly <span class="text-emerald-500">(-20%)</span></div>
            </div>

          </div>

          <!-- Starter price -->
          <div class="flex flex-col justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-1 md:order-none md:text-center mt-6 md:mt-0">
            <div class="font-hkgrotesk text-lg font-bold text-indigo-500 mb-0.5">Starter</div>
            <div>
              <span class="text-xl font-semibold">$</span><span class="text-2xl font-semibold">{{ annual ? '29' : '35'}}</span><span class="text-sm text-slate-500 font-medium">/mo</span>
            </div>
          </div>

          <!-- Agency price -->
          <div class="flex flex-col justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-2 md:order-none md:text-center mt-6 md:mt-0">
            <div class="font-hkgrotesk text-lg font-bold text-indigo-500 mb-0.5">Agency</div>
            <div>
              <span class="text-xl font-semibold">$</span><span class="text-2xl font-semibold">{{ annual ? '49' : '55'}}</span><span class="text-sm text-slate-500 font-medium">/mo</span>
            </div>
          </div>

          <!-- Team price -->
          <div class="flex flex-col justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-3 md:order-none md:text-center mt-6 md:mt-0">
            <div class="font-hkgrotesk text-lg font-bold text-indigo-500 mb-0.5">Team</div>
            <div>
              <span class="text-xl font-semibold">$</span><span class="text-2xl font-semibold">{{ annual ? '79' : '85'}}</span><span class="text-sm text-slate-500 font-medium">/mo</span>
            </div>
          </div>

          <!-- Usage label -->
          <div class="hidden md:flex flex-col justify-center px-4 md:px-6 py-2 bg-slate-700 bg-opacity-25 md:col-span-3">
            <span class="text-xs uppercase font-semibold text-slate-500">Usage</span>
          </div>
          <div class="flex flex-col justify-center px-4 md:px-6 py-2 bg-slate-700 bg-opacity-25 md:border-l border-slate-700 order-1 md:order-none">
            <span class="md:hidden text-xs uppercase font-semibold text-slate-500">Usage</span>
          </div>
          <div class="flex flex-col justify-center px-4 md:px-6 py-2 bg-slate-700 bg-opacity-25 md:border-l border-slate-700 order-2 md:order-none">
            <span class="md:hidden text-xs uppercase font-semibold text-slate-500">Usage</span>
          </div>
          <div class="flex flex-col justify-center px-4 md:px-6 py-2 bg-slate-700 bg-opacity-25 md:border-l border-slate-700 order-3 md:order-none">
            <span class="md:hidden text-xs uppercase font-semibold text-slate-500">Usage</span>
          </div>

          <!-- Admins & Members -->
          <div class="hidden md:flex flex-col justify-center p-4 md:px-6 bg-slate-800 md:col-span-3">
            <div class="text-slate-200">Admins & Members</div>
          </div>
          <div class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-1 md:order-none">
            <div class="md:hidden text-slate-200">Admins & Members</div>
            <div class="text-sm font-medium text-slate-200 text-center">4</div>
          </div>
          <div class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-2 md:order-none">
            <div class="md:hidden text-slate-200">Admins & Members</div>
            <div class="text-sm font-medium text-slate-200 text-center">12</div>
          </div>
          <div class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-3 md:order-none">
            <div class="md:hidden text-slate-200">Admins & Members</div>
            <div class="text-sm font-medium text-slate-200 text-center">Unlimited</div>
          </div>

          <!-- File Storage -->
          <div class="hidden md:flex flex-col justify-center p-4 md:px-6 bg-slate-800 bg-opacity-70 md:col-span-3">
            <div class="text-slate-200">File Storage</div>
          </div>
          <div class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 bg-opacity-70 md:border-l border-slate-700 order-1 md:order-none">
            <div class="md:hidden text-slate-200">File Storage</div>
            <div class="text-sm font-medium text-slate-200 text-center">10GB</div>
          </div>
          <div class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 bg-opacity-70 md:border-l border-slate-700 order-2 md:order-none">
            <div class="md:hidden text-slate-200">File Storage</div>
            <div class="text-sm font-medium text-slate-200 text-center">50GB</div>
          </div>
          <div class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 bg-opacity-70 md:border-l border-slate-700 order-3 md:order-none">
            <div class="md:hidden text-slate-200">File Storage</div>
            <div class="text-sm font-medium text-slate-200 text-center">Unlimited</div>
          </div>

          <!-- Active Users -->
          <div class="hidden md:flex flex-col justify-center p-4 md:px-6 bg-slate-800 md:col-span-3">
            <div class="text-slate-200">Active Users</div>
          </div>
          <div class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-1 md:order-none">
            <div class="md:hidden text-slate-200">Active Users</div>
            <div class="text-sm font-medium text-slate-200 text-center">500</div>
          </div>
          <div class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-2 md:order-none">
            <div class="md:hidden text-slate-200">Active Users</div>
            <div class="text-sm font-medium text-slate-200 text-center">1500</div>
          </div>
          <div class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-3 md:order-none">
            <div class="md:hidden text-slate-200">Active Users</div>
            <div class="text-sm font-medium text-slate-200 text-center">Unlimited</div>
          </div>

          <!-- Features label -->
          <div class="hidden md:flex flex-col justify-center px-4 md:px-6 py-2 bg-slate-700 bg-opacity-25 md:col-span-3">
            <span class="text-xs uppercase font-semibold text-slate-500">Features</span>
          </div>
          <div class="flex flex-col justify-center px-4 md:px-6 py-2 bg-slate-700 bg-opacity-25 md:border-l border-slate-700 order-1 md:order-none">
            <span class="md:hidden text-xs uppercase font-semibold text-slate-500">Features</span>
          </div>
          <div class="flex flex-col justify-center px-4 md:px-6 py-2 bg-slate-700 bg-opacity-25 md:border-l border-slate-700 order-2 md:order-none">
            <span class="md:hidden text-xs uppercase font-semibold text-slate-500">Features</span>
          </div>
          <div class="flex flex-col justify-center px-4 md:px-6 py-2 bg-slate-700 bg-opacity-25 md:border-l border-slate-700 order-3 md:order-none">
            <span class="md:hidden text-xs uppercase font-semibold text-slate-500">Features</span>
          </div>

          <!-- Unlimited Activities -->
          <div class="hidden md:flex flex-col justify-center p-4 md:px-6 bg-slate-800 md:col-span-3">
            <div class="text-slate-200">Unlimited Activities</div>
          </div>
          <div class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-1 md:order-none">
            <div class="md:hidden text-slate-200">Unlimited Activities</div>
            <div class="text-sm font-medium text-slate-200 text-center">
              <svg class="inline-flex fill-emerald-400" width="12" height="9" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" fill="#34D399" fill-rule="nonzero" />
              </svg>
            </div>
          </div>
          <div class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-2 md:order-none">
            <div class="md:hidden text-slate-200">Unlimited Activities</div>
            <div class="text-sm font-medium text-slate-200 text-center">
              <svg class="inline-flex fill-emerald-400" width="12" height="9" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" fill="#34D399" fill-rule="nonzero" />
              </svg>
            </div>
          </div>
          <div class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-3 md:order-none">
            <div class="md:hidden text-slate-200">Unlimited Activities</div>
            <div class="text-sm font-medium text-slate-200 text-center">
              <svg class="inline-flex fill-emerald-400" width="12" height="9" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" fill="#34D399" fill-rule="nonzero" />
              </svg>
            </div>
          </div>

          <!-- Data Export -->
          <div class="hidden md:flex flex-col justify-center p-4 md:px-6 bg-slate-800 bg-opacity-70 md:col-span-3">
            <div class="text-slate-200">Data Export</div>
          </div>
          <div class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 bg-opacity-70 md:border-l border-slate-700 order-1 md:order-none">
            <div class="md:hidden text-slate-200">Data Export</div>
            <div class="text-sm font-medium text-slate-200 text-center">
              <svg class="inline-flex fill-slate-500" width="14" height="2" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 0v2H0V0z" fill-rule="evenodd" />
              </svg>
            </div>
          </div>
          <div class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 bg-opacity-70 md:border-l border-slate-700 order-2 md:order-none">
            <div class="md:hidden text-slate-200">Data Export</div>
            <div class="text-sm font-medium text-slate-200 text-center">
              <svg class="inline-flex fill-emerald-400" width="12" height="9" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" fill="#34D399" fill-rule="nonzero" />
              </svg>
            </div>
          </div>
          <div class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 bg-opacity-70 md:border-l border-slate-700 order-3 md:order-none">
            <div class="md:hidden text-slate-200">Data Export</div>
            <div class="text-sm font-medium text-slate-200 text-center">
              <svg class="inline-flex fill-emerald-400" width="12" height="9" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" fill="#34D399" fill-rule="nonzero" />
              </svg>
            </div>
          </div>

          <!-- Adjust Group Sizes -->
          <div class="hidden md:flex flex-col justify-center p-4 md:px-6 bg-slate-800 md:col-span-3">
            <div class="text-slate-200">Adjust Group Sizes</div>
          </div>
          <div class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-1 md:order-none">
            <div class="md:hidden text-slate-200">Adjust Group Sizes</div>
            <div class="text-sm font-medium text-slate-200 text-center">
              <svg class="inline-flex fill-slate-500" width="14" height="2" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 0v2H0V0z" fill-rule="evenodd" />
              </svg>
            </div>
          </div>
          <div class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-2 md:order-none">
            <div class="md:hidden text-slate-200">Adjust Group Sizes</div>
            <div class="text-sm font-medium text-slate-200 text-center">
              <svg class="inline-flex fill-emerald-400" width="12" height="9" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" fill="#34D399" fill-rule="nonzero" />
              </svg>
            </div>
          </div>
          <div class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-3 md:order-none">
            <div class="md:hidden text-slate-200">Adjust Group Sizes</div>
            <div class="text-sm font-medium text-slate-200 text-center">
              <svg class="inline-flex fill-emerald-400" width="12" height="9" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" fill="#34D399" fill-rule="nonzero" />
              </svg>
            </div>
          </div>

          <!-- CTA row -->
          <div class="hidden md:flex flex-col justify-center px-4 md:px-6 py-2 bg-slate-700 bg-opacity-25 md:col-span-3"></div>
          <div class="flex flex-col justify-center p-4 bg-slate-700 bg-opacity-25 md:border-l border-slate-700 order-1 md:order-none">
            <a class="btn-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group whitespace-nowrap" href="#0">
              Free Trial <span class="hidden lg:block tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </a>
          </div>
          <div class="flex flex-col justify-center p-4 bg-slate-700 bg-opacity-25 md:border-l border-slate-700 order-2 md:order-none">
            <a class="btn-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group whitespace-nowrap" href="#0">
              Free Trial <span class="hidden lg:block tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </a>
          </div>
          <div class="flex flex-col justify-center p-4 bg-slate-700 bg-opacity-25 md:border-l border-slate-700 order-3 md:order-none">
            <a class="btn-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group whitespace-nowrap" href="#0">
              Free Trial <span class="hidden lg:block tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </a>
          </div>

        </div>

      </div>
    </div>

  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Pricing',
  setup() {

    const annual = ref(true)

    return {
      annual,
    }
  }, 
}
</script>