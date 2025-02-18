<script>
import Header from "@/components/Header.vue";
import HelloWorld from "../components/HelloWorld.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "HomeView",
  components: { HelloWorld, Header, Navbar, Footer },
};
</script>

<template>
  <main class="bg-stone-900">
    <Header />

    <div class="pt-4 pb-8 lg:pt-4 lg:pb-8 antialiased">
      <Navbar />
      <div class="flex justify-between px-4 mx-auto max-w-(--breakpoint-xl)">
        <article
          class="mx-auto w-full max-w-6xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
        >
          <a
            class="inline-flex items-center gap-x-1.5 text-sm text-stone-400 decoration-2 hover:text-[#ffc444] focus:outline-none"
            href="#"
          >
            <svg
              class="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Blog
          </a>
          <header class="mb-4 lg:mb-6 not-format">
            <address class="flex items-center mb-6 not-italic">
              <div class="inline-flex items-center mr-3 text-sm">
                <img
                  class="mr-4 w-16 h-16 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                  alt="Jese Leos"
                />
                <div>
                  <a
                    href="#"
                    rel="author"
                    class="text-xl font-bold text-gray-900 dark:text-[#44ddff]"
                    >Jese Leos</a
                  >
                  <p class="text-base text-gray-500 dark:text-stone-400">
                    Graphic Designer, educator & CEO Flowbite
                  </p>
                  <p class="text-base text-gray-500 dark:text-stone-400">
                    <time
                      pubdate
                      datetime="2025-02-17"
                      title="17th February 2022"
                      >17 February 2025</time
                    >
                  </p>
                </div>
              </div>
            </address>
            <h1
              class="mb-4 text-3xl font-extrabold leading-tight text-stone-200 lg:mb-6 lg:text-4xl"
            >
              Best practices for successful prototypes
            </h1>
          </header>
          <p class="lead text-stone-300">
            Flowbite is an open-source library of UI components built with the
            utility-first classes from Tailwind CSS. It also includes
            interactive elements such as dropdowns, modals, datepickers.
          </p>
          <p class="text-stone-300">
            Before going digital, you might benefit from scribbling down some
            ideas in a sketchbook. This way, you can think things through before
            committing to an actual design project.
          </p>
          <p class="text-zinc-300">
            But then I found a
            <a
              href="https://flowbite.com"
              class="text-stone-100 hover:text-pink-400"
              >component library based on Tailwind CSS called Flowbite</a
            >. It comes with the most commonly used UI components, such as
            buttons, navigation bars, cards, form elements, and more which are
            conveniently built with the utility classes from Tailwind CSS.
          </p>
          <figure>
            <img
              src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
              alt=""
              class="mx-auto"
            />
            <figcaption class="text-center text-stone-300">
              Digital art by Anonymous
            </figcaption>
          </figure>
        </article>
      </div>
    </div>
    <div
      class="px-8 py-3 flex items-center text-sm text-gray-800 before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-[#ff4480] dark:before:border-neutral-600 dark:after:border-neutral-600"
    >
      Other Posts
    </div>

    <div class="flex justify-evenly items-center">
      <div class="flex flex-wrap">
        <a
          href="#"
          class="flex items-center py-2 px-3 rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-stone-200 md:dark:hover:text-[#ffc444] dark:hover:bg-gray-700 dark:hover:text-[#ffc444] md:dark:hover:bg-transparent"
        >
          <svg
            class="shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"
            ></path>
          </svg>
          About
        </a>
      </div>

      <div class="flex flex-wrap">
        <a
          href="#"
          class="flex items-center py-2 px-3 rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-stone-200 md:dark:hover:text-[#ffc444] dark:hover:bg-gray-700 dark:hover:text-[#ffc444] md:dark:hover:bg-transparent"
        >
          Bro
          <svg
            class="shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
    <Footer />
  </main>
</template>
