<script>
export default {
  name: "BlogSlug",
};
</script>

<template>
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
            src="https://placebear.com/200/200"
            alt="Jese Leos"
          />
          <div>
            <a
              href="#"
              rel="author"
              class="text-xl font-bold text-gray-900 dark:text-[#44ddff]"
              >Author</a
            >

            <p class="text-base text-gray-500 dark:text-stone-400">
              <time pubdate datetime="2025-02-17" title="17th February 2022"
                >Date</time
              >
            </p>
          </div>
        </div>
      </address>
      <h1
        class="mb-4 text-3xl font-extrabold leading-tight text-stone-200 lg:mb-6 lg:text-4xl"
      >
        Title
      </h1>
    </header>
    <p class="lead text-stone-300">Paragraph</p>
    <br />
    <figure>
      <img
        src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
        alt=""
        class="mx-auto"
      />
      <figcaption class="text-center text-stone-300">Image caption</figcaption>
    </figure>
  </article>
</template>
<style scoped></style>
