<script>
export default {
  name: "Navbar",
};
</script>

<template>
  <nav class="bg-stone-900">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4"
    >
      <div class="w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-stone-900 dark:border-stone-800"
        >
          <li>
            <a
              href="#"
              class="block py-2 px-3 rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-stone-200 md:dark:hover:text-[#ffc444] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              aria-current="page"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-stone-200 md:dark:hover:text-[#ffc444] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >About</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-stone-200 md:dark:hover:text-[#ffc444] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Services</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
