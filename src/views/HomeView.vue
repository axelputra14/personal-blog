<script>
import Header from "@/components/Header.vue";
import HelloWorld from "../components/HelloWorld.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import BlogSlug from "@/components/BlogSlug.vue";

export default {
  name: "HomeView",
  components: { HelloWorld, Header, Navbar, Footer, BlogSlug },
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
    </div>
    <div class="flex justify-between px-4 mx-auto max-w-(--breakpoint-xl)">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        repellendus dolorem quas eos voluptatibus. Ipsa quaerat quisquam nihil
        ipsum dolor eum error! Sequi architecto assumenda harum debitis, dolor
        esse? Quidem.
      </p>
    </div>
    <br />
    <div class="flex justify-center px-4 mx-auto max-w-(--breakpoint-xl)">
      <div class="grid grid-cols-1 gap-6">
        <div
          class="banner flex flex-col items-center relative w-full h-48 rounded-xl overflow-hidden cursor-pointer"
        >
          <img src="https://picsum.photos/1000/300" />
          <section class="content-section">
            <div class="title-side">
              <p class="banner-title">55555effffffffffe33333390</p>
            </div>
          </section>
        </div>
        <div
          class="banner flex flex-col items-center relative w-full h-48 rounded-xl overflow-hidden cursor-pointer"
        >
          <img src="https://picsum.photos/1000/300" />
        </div>
        <div
          class="banner flex flex-col items-center relative w-full h-48 rounded-xl overflow-hidden cursor-pointer"
        >
          <img src="https://picsum.photos/1000/300" />
        </div>
      </div>
    </div>

    <Footer />
  </main>
</template>

<style scoped>
.banner {
  position: relative;
  overflow: hidden;
}

.banner::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: skewX(-20deg);
  transition: left 0.5s ease-in-out;
}

.banner:hover::after {
  left: 50%;
}

.content-section {
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title-side {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  text-align: end;
  bottom: 0;
  right: 0;
  width: fit-content;
  padding-left: 10px;
  padding-right: 10px;
  color: white;
  z-index: 10;
  display: inline-block;
  background-color: aqua;
}

.banner-title {
  font-size: 20pt;
  font-weight: 700;
  line-height: 30px;
}
</style>
