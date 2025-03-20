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
              class="mb-4 text-3xl leading-tight text-stone-200 lg:mb-6 lg:text-4xl"
            >
              Visual Novel List
            </h1>
          </header>
          <p class="text-stone-300">Paragraph</p>
          <br />
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Card 1 -->
            <div class="bg-white shadow-md rounded-md overflow-hidden">
              <img
                class="w-full h-48 object-cover"
                src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                alt=""
              />
              <div class="p-4 text-center">
                <h5 class="text-xl font-bold text-neutral-800">
                  Explore the hidden beauty
                </h5>
                <p class="text-neutral-500">
                  Discover the stunning Antelope Canyon.
                </p>
              </div>
            </div>

            <!-- Card 2 -->
            <div class="bg-white shadow-md rounded-md overflow-hidden">
              <img
                class="w-full h-48 object-cover"
                src="https://tecdn.b-cdn.net/img/new/standard/nature/185.jpg"
                alt=""
              />
              <div class="p-4 text-center">
                <h5 class="text-xl font-bold text-neutral-800">
                  Discover new places
                </h5>
                <p class="text-neutral-500">
                  Unveil hidden gems around the world.
                </p>
              </div>
            </div>

            <!-- Card 3 -->
            <div class="bg-white shadow-md rounded-md overflow-hidden">
              <img
                class="w-full h-48 object-cover"
                src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                alt=""
              />
              <div class="p-4 text-center">
                <h5 class="text-xl font-bold text-neutral-800">
                  Embrace adventure
                </h5>
                <p class="text-neutral-500">
                  Step into the wild and explore freely.
                </p>
              </div>
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
