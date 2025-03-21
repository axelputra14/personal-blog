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
  <main class="bg-stone-100">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            sed nulla nisi. Sed porta tortor viverra consectetur dignissim.
            Aliquam nec lobortis leo. Aliquam erat volutpat. Suspendisse
            vestibulum metus eu est volutpat, sit amet egestas leo suscipit. In
            quis neque ornare, dapibus arcu vitae, posuere odio. Sed convallis
            quam quam, eget egestas nibh porttitor a. Cras maximus lorem et diam
            efficitur fringilla. Phasellus mollis suscipit velit. Maecenas et
            justo a odio hendrerit tempor eu ut ipsum. Fusce vestibulum elit sed
            turpis imperdiet gravida. Phasellus at dui tincidunt, tristique ex
            sed, pulvinar nibh. Donec aliquet tempor massa, id malesuada ex
            laoreet quis.
          </p>
          <br />
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="card">
              <section class="landscape-section">
                <img
                  class="w-full h-full object-cover"
                  src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                />
              </section>

              <section class="content-section">
                <div class="weather-info">
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
                        class="bi bi-check-circle"
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
                    <p class="temperature">90/100</p>
                  </div>
                </div>
                <div class="forecast">
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
.forecast {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
  padding: 10px 0 0 0;
}

.forecast > div {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: lightslategray;
  font-size: 9pt;
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
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 12px 12px 0px rgba(0, 0, 0, 0.1);
  background-color: white;
}

/* Landscape section */
.landscape-section {
  position: relative;
  width: 100%;
  height: 70%;
  overflow: hidden;
}

.landscape-section * {
  position: absolute;
}

.sky {
  width: 100%;
  height: 100%;
  background: rgb(175, 243, 230);
  background: linear-gradient(
    0deg,
    rgba(175, 243, 230, 1) 0%,
    rgba(65, 131, 170, 1) 100%
  );
}

.moon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  bottom: 40%;
  left: 23%;
  filter: drop-shadow(0px 0px 10px white);
}

.shine-1 {
  width: 134%;
  height: 134%;
  border-radius: 50%;
  background-color: #b6ebe7;
  opacity: 0.3;
}

.shine-2 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 118%;
  height: 118%;
  border-radius: 50%;
  background-color: #b6e8eb;
}

.moon-shape {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  top: -25%;
  right: -25%;
  background-color: #b6e8eb;
}

.real-moon {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: white;
  overflow: hidden;
}

.ocean {
  overflow: hidden;
  bottom: 0;
  width: 100%;
  height: 28%;
  background: rgb(140, 232, 225);
  background: linear-gradient(
    0deg,
    rgba(140, 232, 225, 1) 0%,
    rgba(141, 233, 221, 1) 100%
  );
}

.reflection {
  position: absolute;
  background-color: white;
  opacity: 0.5;
  z-index: 1;
}

.reflection:nth-child(1) {
  width: 40px;
  height: 10px;
  clip-path: polygon(0% 0%, 100% 0%, 50% 20%);
  top: 5%;
  left: 32%;
}

.reflection:nth-child(2) {
  width: 80px;
  height: 15px;
  clip-path: polygon(0% 0%, 100% 0%, 60% 20%, 40% 20%);
  top: 15%;
  left: 39%;
}

.reflection:nth-child(3) {
  width: 60px;
  height: 2px;
  clip-path: polygon(0% 50%, 40% 0%, 60% 0%, 100% 50%, 60% 100%, 40% 100%);
  top: 27%;
  right: 15%;
}

.reflection:nth-child(4) {
  width: 70px;
  height: 2px;
  clip-path: polygon(0% 50%, 40% 0%, 60% 0%, 100% 50%, 60% 100%, 40% 100%);
  top: 37%;
  right: 28%;
}
.reflection:nth-child(5) {
  width: 70px;
  height: 3px;
  clip-path: polygon(0% 50%, 40% 0%, 60% 0%, 100% 50%, 60% 100%, 40% 100%);
  top: 46%;
  right: 8%;
}

.hill-1 {
  right: -25%;
  bottom: 20%;
  width: 150px;
  height: 40px;
  border-radius: 50%;
  background-color: #4bcacc;
}

.shadow-hill-1 {
  right: -25%;
  top: -30%;
  width: 150px;
  height: 40px;
  border-radius: 50%;
  background-color: #88d8d7;
  opacity: 1;
}

.hill-2 {
  right: -36%;
  bottom: 10%;
  width: 150px;
  height: 80px;
  border-radius: 50%;
  background-color: #3f85a8;
}

.shadow-hill-2 {
  right: -36%;
  top: -65%;
  width: 150px;
  height: 80px;
  border-radius: 50%;
  background-color: #73c8cf;
  opacity: 1;
}

.hill-3 {
  left: -100%;
  bottom: -30%;
  width: 350px;
  height: 150px;
  border-radius: 50%;
  background-color: #47567f;
  z-index: 3;
}

.tree-1 {
  bottom: 19%;
  left: 3%;
  width: 50px;
  height: 70px;
  z-index: 3;
}

.tree-2 {
  bottom: 12%;
  left: 25%;
  width: 50px;
  height: 70px;
  z-index: 3;
}

.hill-4 {
  right: -100%;
  bottom: -40%;
  width: 350px;
  height: 150px;
  border-radius: 50%;
  background-color: #4a4973;
  z-index: 3;
}

.tree-3 {
  bottom: 10%;
  right: 1%;
  width: 65px;
  height: 80px;
  z-index: 3;
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

/* Content section */
.content-section {
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.weather-info {
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  text-align: center;
  top: 0;
  right: 0%;
  width: 100%;
  padding-top: 15px;
  color: white;
  z-index: 10;
}

.weather-info .left-side:not(.icon) {
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
}

.weather-info .right-side {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.weather-info .right-side p:nth-child(2) {
  font-size: 9pt;
  margin: 0;
  padding: 0;
}

.weather-info .location span {
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

.temperature {
  font-size: 20pt;
  font-weight: 700;
  line-height: 30px;
}
</style>
