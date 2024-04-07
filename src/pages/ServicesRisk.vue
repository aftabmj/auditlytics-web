<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <section class="relative">

        <!-- Illustration -->
        <div class="hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
          <img src="../images/hero-illustration.svg" class="max-w-none" width="1440" height="1265"
            alt="Hero Illustration">
        </div>
        <div class="relative max-w-6xl mx-auto px-2 sm:px-6">
          <div class="pt-32 md:pt-28">
            <h2 class="h3 font-bold text-center py-4 mb-4">Risk Consulting Services</h2>
            <div class="grid grid-cols-2 gap-4 "><!--grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">-->
              <div>


                <div class="py-2">

                  <div class="flex items-center">
                    <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                      <h5 class="font-bold">Enterprise Risk Management (ERM)</h5>
                    </span>
                  </div>

                  <p class="p-2 text-sm text-indigo-200">Implement ERM frameworks, assess current state on risk maturity of an
                    organisation, develop and implement risk tools and reporting.
                  </p>
                </div>

                <div class="py-2">

                  <div class="flex items-center">
                    <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                      <h5 class="font-bold">Strategic Risk Management</h5>
                    </span>
                  </div>

                  <p class="p-2 text-sm text-indigo-200">Provide comprehensive services encompassing strategic planning sessions,
                    business environment analysis, scenario planning, continuous risk
                    monitoring and impact analysis to align with your business goals and
                    objectives for robust risk resilience.
                  </p>
                </div>

                <div class="py-2">

                  <div class="flex items-center">
                    <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                      <h5 class="font-bold">Operational Risk Management</h5>
                    </span>
                  </div>

                  <p class="p-2 text-sm text-indigo-200">Conduct process audits, efficiency analysis, internal control assessments, and
                    disaster recovery planning.
                  </p>
                </div>

                <div class="py-2">

                  <div class="flex items-center">
                    <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                      <h5 class="font-bold">Regulatory Change Management</h5>
                    </span>
                  </div>

                  <p class="p-2 text-sm text-indigo-200">Track and interpret new regulations, provide impact/scenario analysis, and
                    assist in policy and procedure updates.
                  </p>
                </div>

              </div>

              <!-- Right side -->
              <div>

                <div class="py-2">

                  <div class="flex items-center">
                    <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                      <h5 class="font-bold">Compliance Risk Management</h5>
                    </span>
                  </div>

                  <p class="p-2 text-sm text-indigo-200">Offer services like regulatory compliance audits, policy review and
                    development, and compliance training programs.
                  </p>
                </div>

                <div class="py-2">

                  <div class="flex items-center">
                    <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                      <h5 class="font-bold">Supply Chain Risk Management</h5>
                    </span>
                  </div>

                  <p class="p-2 text-sm text-indigo-200">Analyse supply chain vulnerabilities, develop contingency planning, and provide
                    vendor risk assessments.
                  </p>
                </div>



                <div class="py-2">

                  <div class="flex items-center">
                    <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                      <h5 class="font-bold">Project Risk Management</h5>
                    </span>
                  </div>

                  <p class="p-2 text-sm text-indigo-200">Offer project risk identification, mitigation planning, and risk monitoring
                    tools for ongoing projects.
                  </p>
                </div>

                <div class="py-2">

                  <div class="flex items-center">
                    <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                      <h5 class="font-bold">Fraud Risk Management</h5>
                    </span>
                  </div>

                  <p class="p-2 text-sm text-indigo-200">Fraud risk assessments, revenue assurance and cost control/cost reduction, key
                    financial control reviews.
                  </p>
                </div>
              </div>
              <!-- <div class="flex items-center mx-8">
                <img src="../images/laptop.webp" width="512" />
              </div> -->

              <!-- Grid items -->
            </div>
          </div>
        </div>
      </section>
    </main>
    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
import Header from '../partials/Header.vue'
import Footer from '../partials/Footer.vue'



export default {
  name: 'ServicesRisk',
  components: {
    Header,

    Footer,
  },
}

</script>

<style scoped></style>