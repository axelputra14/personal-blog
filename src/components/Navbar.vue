<script>
import { RouterLink } from "vue-router";

export default {
  name: "Navbar",
};
</script>

<template>
  <nav class="bg-stone-200">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4"
    >
      <div class="w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-stone-200 dark:border-stone-800"
        >
          <li>
            <RouterLink
              to="/"
              class="block py-2 px-3 rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-stone-900 md:dark:hover:text-sky-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              aria-current="page"
              >Home</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/vn-list"
              class="block py-2 px-3 rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-stone-900 md:dark:hover:text-sky-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >VN List</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
