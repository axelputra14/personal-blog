<script>
import Header from "@/components/Header.vue";
import HelloWorld from "../components/HelloWorld.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "VNView",
  components: { HelloWorld, Header, Navbar, Footer },
  data() {
    return {
      posts: [
        {
          title: "Ini Judul",
          author: "Somebody",
          post_date: "2025-02-14",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus ligula non ante imperdiet tempor. Suspendisse ut tortor urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla pellentesque magna nec tellus placerat, nec fermentum nunc maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eleifend ultricies leo id ultricies. Phasellus a lacinia diam, id rutrum eros. Sed tincidunt tempor dictum. Vivamus sit amet convallis lectus, sed luctus orci. Nulla bibendum, nulla at varius ullamcorper, lectus dolor rhoncus justo, in accumsan nunc ante eu enim. Donec pretium nunc nec rhoncus tincidunt. In hac habitasse platea dictumst. Pellentesque sagittis sollicitudin laoreet. Nam sed commodo elit. Mauris malesuada ante non diam tristique, sit amet malesuada urna commodo.",
        },
      ],
    };
  },
};
</script>

<template>
  <main class="bg-stone-200">
    <Header />

    <div class="pt-4 pb-8 lg:pt-4 lg:pb-8 antialiased">
      <Navbar />
      <div class="flex justify-between px-4 mx-auto max-w-(--breakpoint-xl)">
        <article
          class="mx-auto w-full max-w-6xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
        >
          <header class="mb-4 lg:mb-6 not-format">
            <h1
              class="mb-4 text-3xl leading-tight text-stone-800 lg:mb-6 lg:text-4xl"
            >
              Visual Novel List
            </h1>
          </header>
          <p class="text-stone-900">
            List of Visual Novels I have finished or bothered putting them in
            the list.
          </p>
          <br />
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- card begins -->
            <div class="card">
              <section class="cover-section">
                <img
                  class="w-full h-full object-cover"
                  src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                />
              </section>
              <!-- hover:scale-105 duration-700 for schedule type -->
              <section class="content-section">
                <div class="score-info">
                  <div class="left-side">
                    <div class="icon">
                      <!-- <svg
                        stroke="#000000"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                        <g
                          stroke-linejoin="round"
                          stroke-linecap="round"
                          id="SVGRepo_tracerCarrier"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            stroke-linecap="round"
                            stroke-width="1.5"
                            stroke="#ffffff"
                            d="M22 14.3529C22 17.4717 19.4416 20 16.2857 20H11M14.381 9.02721C14.9767 8.81911 15.6178 8.70588 16.2857 8.70588C16.9404 8.70588 17.5693 8.81468 18.1551 9.01498M7.11616 11.6089C6.8475 11.5567 6.56983 11.5294 6.28571 11.5294C3.91878 11.5294 2 13.4256 2 15.7647C2 18.1038 3.91878 20 6.28571 20H7M7.11616 11.6089C6.88706 10.9978 6.7619 10.3369 6.7619 9.64706C6.7619 6.52827 9.32028 4 12.4762 4C15.4159 4 17.8371 6.19371 18.1551 9.01498M7.11616 11.6089C7.68059 11.7184 8.20528 11.9374 8.66667 12.2426M18.1551 9.01498C18.8381 9.24853 19.4623 9.60648 20 10.0614"
                          ></path>
                        </g>
                      </svg> -->
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        class="bi bi-check-circle text-green-400"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
                        />
                        <path
                          d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="right-side">
                    <p class="score">90</p>
                  </div>
                </div>
                <div class="title-detail">
                  <div>
                    <p class="pl-4">CIRCUS</p>
                  </div>
                  <div class="separator"></div>
                  <div>
                    <p class="pl-4">今日はいい天気ですね</p>
                  </div>
                  <div class="separator"></div>
                  <div class="title">
                    <p class="text-white pl-4">Title Title Title</p>
                  </div>
                </div>
              </section>
            </div>
            <!-- card ends -->
          </div>
        </article>
      </div>
    </div>
    <div
      class="px-8 py-3 flex items-center text-sm text-gray-800 before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-[#ff4480] dark:before:border-neutral-600 dark:after:border-neutral-600"
    >
      Other Posts
    </div>

    <Footer />
  </main>
</template>
<style scoped>
.title-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
  padding: 10px 0 0 0;
}

.title-detail > div {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgb(26, 31, 36);
  font-size: 10pt;
}

.title {
  background-color: turquoise;
  height: 100%;
}

.separator {
  width: 100%;
  height: 2px;
  background-color: rgb(233, 233, 233);
  border-radius: 1px;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 220px;
  height: 350px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 12px 12px 0px rgba(0, 0, 0, 0.1);
  background-color: white;
}

.filter {
  height: 100%;
  width: 100%;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 40%
  );
  z-index: 5;
  opacity: 0.2;
}

.cover-section {
  position: relative;
  width: 100%;
  height: 70%;
  overflow: hidden;
}

.cover-section * {
  position: absolute;
}

/* Content section */
.content-section {
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.score-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  text-align: center;
  top: 0;
  right: 0%;
  width: 100%;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  color: white;
  z-index: 10;
}

.score-info .left-side:not(.icon) {
  width: 20%;
  font-size: 11pt;
  font-weight: 600;
  align-self: baseline;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon svg {
  width: 40px;
  filter: drop-shadow(0 0 0.25rem rgba(90, 90, 90, 0.3));
}

.score-info .right-side {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  filter: drop-shadow(0 0 0.5rem rgba(90, 90, 90, 0.5));
}

.score-info .right-side p:nth-child(2) {
  font-size: 9pt;
  margin: 0;
  padding: 0;
}

.score-info .location span {
  font-size: 11pt;
  font-weight: 700;
  text-transform: uppercase;
}

.location {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding: 0;
  margin: 0;
}

.location svg {
  width: 14px;
  height: auto;
}

.score {
  font-size: 20pt;
  font-weight: 700;
  line-height: 30px;
}
</style>
