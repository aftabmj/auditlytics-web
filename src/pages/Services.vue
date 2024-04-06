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

            <div class="grid grid-cols-2 gap-4 "><!--grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">-->
              <div>
                <h2 class="h3 font-bold text-center py-2">Data Management Services</h2>

                <div>
                  <h3 class=" font-bold my-3">Data Analytics</h3>
                  <div class="flex items-center">
                    <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                      <h5 class="font-bold">Harness the Power of Data Insights</h5>
                    </span>
                  </div>

                  <p class="p-2 text-sm">Unlock the hidden potential within your data through our advanced analytics
                    solutions. From predictive modelling to exploratory analysis, we empower you to make data-driven
                    decisions with confidence.
                  </p>
                </div>

                <div>
                  <h3 class=" font-bold my-3">Data Capture</h3>
                  <div class="flex items-center">
                    <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                      <h5 class="font-bold">Streamline Your Data Acquisition Process</h5>
                    </span>
                  </div>
                  <p class="p-2 text-sm">Efficiently gather, process, and store valuable data from diverse sources with our seamless data capture solutions. With automated workflows and real-time monitoring, ensure the accuracy and reliability of your data for actionable insights.
                  </p>
                </div>

                <div>
                  <h3 class=" font-bold my-3">Information Management</h3>
                  <div class="flex items-center">
                    <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                      <h5 class="font-bold">Building Intelligent Systems for Tomorrow</h5>
                    </span>
                  </div>
                  <p class="p-2 text-sm">Elevate your business operations with our bespoke information systems tailored to your unique requirements. From database management to enterprise resource planning, we design and implement scalable solutions that drive efficiency and innovation across your organization.
                  </p>
                </div>                

              </div>
              <div class="flex items-center mx-8" >
              <img src="../images/laptop.webp" width="512" />
              </div>



              <!-- 
            <p class="p-2 text-sm">Enterprise Risk Management (ERM): Implement ERM frameworks, assess current state on risk maturity of an organisation, develop and implement risk tools and reporting.</p>
<p class="p-2 text-sm">Strategic Risk Management: Provide comprehensive services encompassing strategic planning sessions, business environment analysis, scenario planning, risk appetite definition, continuous risk monitoring, impact analysis, change management guidance….
            </p>

<p class="p-2 text-sm">Operational Risk Management / Regulatory Change Management / Compliance Risk Management / Supply Chain Risk Management / Project Risk Management / Health and Safety Risk Management / Fraud Risk Management
</p>
              <div>

            </div>
          </div>
          
          <div>
            <h3 class="font-semibold text-center">Assurance</h3>
            <p class="p-2 text-sm">
              Compliance Audits: Assessing adherence to regulatory requirements, industry standards, and internal policies, helping organisations navigate complex regulatory environments.
               </p>
               <p class="p-2 text-sm">
                Performance Audits: Evaluating the efficiency and effectiveness of operations, programs, or projects to ensure that resources are being used optimally and objectives are being met.
               </p>
               <p class="p-2 text-sm">
                Internal Controls Assurance: Evaluating the design and effectiveness of internal controls over financial reporting
               </p>
         
          </div>
          <div>
            <h3 class="font-semibold text-center">Internal Audit</h3>
            <p class="p-2">Our internal audit services help businesses ensure the accuracy of their financial and
              operational reporting, while minimizing potential areas of risk.</p>
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
  name: 'Services',
  components: {
    Header,

    Footer,
  },
}

</script>

<style scoped></style>