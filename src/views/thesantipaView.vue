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
                class="grid grid-cols-1 items-center justify-center p-3 bg-zinc-100 w-full"
              >
                <p class="text-center mx-auto items-center text-xl font-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="219"
                    height="40"
                    viewBox="0 0 219 40"
                    fill="none"
                    id="Logo"
                  >
                    <g id="logomark">
                      <path
                        d="M13.0964 20.3536L17.6262 22.4473L17.046 27.6527L8.94876 36.8282C4.2486 33.8023 0.898178 28.8615 0 23.108L13.0964 20.3536Z"
                        fill="#15E3FF"
                      ></path>
                      <path
                        d="M25.183 25.94L31.2414 36.3789C27.992 38.6605 24.0331 40 19.7612 40C18.3744 40 17.0206 39.8587 15.7133 39.59L17.046 27.6527L20.4765 23.7656L25.183 25.94Z"
                        fill="#348DFC"
                      ></path>
                      <path
                        d="M39.1022 14.881C39.5332 16.5143 39.763 18.2294 39.763 19.9982C39.763 24.1145 38.5192 27.9403 36.3874 31.1207L25.184 25.9405L22.5551 21.4123L25.8574 17.6692L39.1022 14.881Z"
                        fill="#FD4873"
                      ></path>
                      <path
                        d="M20.132 0C26.1505 0.109415 31.5194 2.877 35.1148 7.17842L25.8561 17.6694L20.9792 18.6959L18.519 14.4574L20.132 0Z"
                        fill="#FFC700"
                      ></path>
                      <path
                        d="M18.519 14.4574L17.9745 19.3269L13.0991 20.353L0.514709 14.5347C2.09964 8.94044 6.05794 4.3436 11.2327 1.9007L18.519 14.4574Z"
                        fill="#00E7B9"
                      ></path>
                    </g>
                    <g id="logotype">
                      <path
                        d="M192.913 29.338V19.7624C192.913 14.2857 196.088 11.8746 200.228 11.8746C202.644 11.8746 204.68 12.8046 205.957 14.5957C207.233 12.8046 209.235 11.8746 211.685 11.8746C215.825 11.8746 219 14.2857 219 19.7624V29.338H213.824V19.7624C213.824 17.4891 212.72 16.6969 211.167 16.6969C209.649 16.6969 208.545 17.4891 208.545 19.7624V29.338H203.369V19.7624C203.369 17.4891 202.264 16.6969 200.746 16.6969C199.193 16.6969 198.089 17.4891 198.089 19.7624V29.338H192.913Z"
                        fill="#002469"
                      ></path>
                      <path
                        d="M182.298 29.6268C177.26 29.6268 173.878 26.7334 173.878 20.9812V12.1634H179.054V20.9812C179.054 23.6679 180.365 24.8045 182.298 24.8045C184.23 24.8045 185.541 23.6679 185.541 20.9812V12.1634H190.717V20.9812C190.717 26.699 187.336 29.6268 182.298 29.6268Z"
                        fill="#002469"
                      ></path>
                      <path
                        d="M165.073 29.627C160.69 29.627 157.861 27.2848 157.792 24.0125H162.899C162.933 24.9081 163.589 25.3559 165.004 25.3559C166.591 25.3559 167.109 24.8048 167.109 24.0814C167.109 22.9448 165.866 22.8414 164.279 22.6003C161.933 22.2559 158.068 21.6703 158.068 17.5714C158.068 14.1269 160.794 11.7158 165.038 11.7158C169.283 11.7158 171.905 14.1614 172.009 17.227H166.971C166.833 16.4347 166.142 15.9869 165.107 15.9869C163.831 15.9869 163.313 16.6414 163.313 17.3303C163.313 18.3636 164.555 18.5014 166.143 18.7425C168.592 19.087 172.354 19.7414 172.354 23.7714C172.354 27.2848 169.455 29.627 165.073 29.627Z"
                        fill="#002469"
                      ></path>
                      <path
                        d="M138.672 36.4471V20.8436C138.672 15.1258 142.536 11.7158 147.747 11.7158C153.164 11.7158 156.96 15.4014 156.96 20.8781C156.96 26.8026 152.543 29.627 148.679 29.627C146.643 29.627 144.917 28.8348 143.848 27.3192V36.4471H138.672ZM147.781 24.8048C150.128 24.8048 151.715 23.117 151.715 20.6714C151.715 18.2258 150.128 16.5381 147.781 16.5381C145.435 16.5381 143.848 18.2258 143.848 20.6714C143.848 23.117 145.435 24.8048 147.781 24.8048Z"
                        fill="#002469"
                      ></path>
                      <path
                        d="M133.324 10.6134C131.426 10.6134 130.011 9.20114 130.011 7.30668C130.011 5.41223 131.426 4 133.324 4C135.221 4 136.636 5.41223 136.636 7.30668C136.636 9.20114 135.221 10.6134 133.324 10.6134ZM130.736 29.179V12.1634H135.912V29.179H130.736Z"
                        fill="#002469"
                      ></path>
                      <path
                        d="M119.502 29.627C114.119 29.627 110.323 25.8381 110.323 20.6714C110.323 15.5047 114.119 11.7158 119.502 11.7158C124.885 11.7158 128.681 15.5047 128.681 20.6714C128.681 25.8381 124.885 29.627 119.502 29.627ZM119.502 24.8048C121.849 24.8048 123.436 23.117 123.436 20.6714C123.436 18.2258 121.849 16.5381 119.502 16.5381C117.156 16.5381 115.568 18.2258 115.568 20.6714C115.568 23.117 117.156 24.8048 119.502 24.8048Z"
                        fill="#002469"
                      ></path>
                      <path
                        d="M100.332 29.627C94.9488 29.627 91.1531 25.8381 91.1531 20.6714C91.1531 15.5047 94.9488 11.7158 100.332 11.7158C105.715 11.7158 109.511 15.5047 109.511 20.6714C109.511 25.8381 105.715 29.627 100.332 29.627ZM100.332 24.8048C102.678 24.8048 104.266 23.117 104.266 20.6714C104.266 18.2258 102.678 16.5381 100.332 16.5381C97.9854 16.5381 96.3981 18.2258 96.3981 20.6714C96.3981 23.117 97.9854 24.8048 100.332 24.8048Z"
                        fill="#002469"
                      ></path>
                      <path
                        d="M81.1619 29.627C75.7789 29.627 71.9832 25.8381 71.9832 20.6714C71.9832 15.5047 75.7789 11.7158 81.1619 11.7158C86.5449 11.7158 90.3406 15.5047 90.3406 20.6714C90.3406 25.8381 86.5449 29.627 81.1619 29.627ZM81.1619 24.8048C83.5084 24.8048 85.0957 23.117 85.0957 20.6714C85.0957 18.2258 83.5084 16.5381 81.1619 16.5381C78.8155 16.5381 77.2282 18.2258 77.2282 20.6714C77.2282 23.117 78.8155 24.8048 81.1619 24.8048Z"
                        fill="#002469"
                      ></path>
                      <path
                        d="M55 29.1791V6.6523H60.5901V24.0124H71.2526V29.1791H55Z"
                        fill="#002469"
                      ></path>
                      <path
                        d="M108.824 30.7737C108.302 35.5561 105.083 38 100.481 38C95.8755 38 92.656 35.5824 92.1365 30.7737H97.3874C97.7828 32.4472 98.9316 33.1776 100.481 33.1776C102.029 33.1776 103.178 32.4473 103.574 30.7737H108.824Z"
                        fill="#002469"
                      ></path>
                    </g>
                  </svg>
                </p>
              </div>
              <div class="relative flex-1 overflow-hidden">
                <div
                  class="flex items-center justify-center w-full h-full overflow-hidden"
                >
                  <img
                    src="https://placehold.net/4-800x600.png"
                    class="w-full h-full object-cover object-center"
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

  position: relative;
  width: 280px;
  height: 230px;
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
