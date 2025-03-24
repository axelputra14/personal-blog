<script>
export default {
  name: "Footer",
  methods: {
    getClientYear() {
      const d = new Date();

      this.year = d.getFullYear();
    },
  },
  data() {
    return {
      year: 0,
    };
  },
  mounted() {
    this.getClientYear();
  },
};
</script>

<template>
  <div
    class="px-8 py-3 flex items-center text-sm text-gray-800 before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-[#ff4480] dark:before:border-neutral-600 dark:after:border-neutral-600"
  >
    <p class="text-[#44ddff]">giraty's blog - {{ this.year }}</p>
  </div>
</template>

<style scoped></style>
