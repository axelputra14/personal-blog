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
  <div class="flex justify-center items-center pt-4">
    <p class="text-[#44ddff]">giraty's blog - {{ this.year }}</p>
  </div>
</template>

<style scoped></style>
