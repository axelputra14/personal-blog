<script>
import Header from "@/components/Header.vue";
import HelloWorld from "../components/HelloWorld.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "thesantipaView",
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
              thesantipa Lists
            </h1>
          </header>
          <p class="text-stone-900">
            I welcome you upon my delusion of fictional motorsport group in a
            fictional world. thesantipa, short for "The Nations and the
            Territories of the Pacific" is a fictional motorsport group that
            holds races in Oceania region.
          </p>
          <br />
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- card copy begins-->
            <div class="card">
              <div
                class="grid grid-cols-1 items-center justify-center p-2 mb-4 bg-zinc-100 w-full"
              >
                <p class="text-center mx-auto text-xl font-bold">Kanak</p>
              </div>
              <div
                class="grid grid-cols-4 gap-2 items-center justify-center px-2 mb-4"
              >
                <div class="col-span-1">
                  <div class="">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Flag_of_test.svg/330px-Flag_of_test.svg.png"
                    />
                  </div>
                </div>
                <div class="col-span-3 font-bold">
                  Acura Grand Prix of Long Beach
                </div>
              </div>
              <div class="event-card-bottom">
                <div
                  class="grid grid-cols-4 gap-2 items-center justify-center p-2 mb-4 bg-white"
                >
                  <div class="col-span-3">
                    <div class="event-card-track-name">
                      Streets of Long Beach
                    </div>
                    <div class="event-card-track-location">
                      Long Beach, California
                    </div>
                  </div>
                  <div class="col-span-1">
                    <img
                      src="https://digbza2f4g9qo.cloudfront.net/-/media/IndyCar/Schedules/TrackOutlines/Black/LongBeach.png?vs=1&amp;d=20151012T192221Z"
                      alt=""
                      data-uw-rm-alt-original=""
                      role="presentation"
                      data-uw-rm-alt="SM"
                    />
                  </div>
                </div>
                <div class="w-full h-full flex-1">
                  <img
                    src="https://digbza2f4g9qo.cloudfront.net/-/media/IndyCar/Schedules/EventScenesWide/LongBeach.jpg?vs=1&amp;d=20240916T172125Z"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <!-- card copy ends-->
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
.event-card-bottom {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.event-card-bottom img {
  flex-grow: 1;
}
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
  width: 280px;
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
