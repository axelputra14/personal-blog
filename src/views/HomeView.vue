<script>
import HelloWorld from "../components/HelloWorld.vue";
export default {
  name: "HomeView",
  components: { HelloWorld },
};
</script>

<template>
  <main class="bg-stone-900">
    <div class="pt-8 pb-16 lg:pt-16 lg:pb-24 antialiased">
      <div class="flex justify-between px-4 mx-auto max-w-screen-xl">
        <article
          class="mx-auto w-full max-w-6xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
        >
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
  </main>
</template>
