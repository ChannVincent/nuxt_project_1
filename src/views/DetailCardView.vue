<template>
  <div>
    <div>
      <h1 class="text-2xl font-bold underline text-white">Detail card</h1>
    </div>
    <!-- CARD -->
    <div class="absolute bg-black p-6 rounded-2xl m-2">
      <div class="flex flex-col w-96 h-140 bg-luxe-pattern">
        <!-- header -->
        <div
          class="flex flex-row mt-2 ml-2 mr-2 p-1 align-middle rounded-xl border-black border-2"
        >
          <h2 class="ml-2 text-black font-semibold">L'Oréal S.A.</h2>
          <div class="flex-grow" />
          <h2 class="right text-black font-bold">361€</h2>
          <div>
            <img
              class="h-4 w-4 m-1 rounded-full ring-1 ring-black"
              :src="iconUrl"
            />
          </div>
        </div>
        <!-- image -->
        <div
          class="w-auto h-48 bg-white ml-5 mr-5 border-black border-r-2 border-l-2 bg-gradient-to-br from-gray-300 to-white"
        >
          <img class="h-30 w-30 m-auto mt-8" :src="imageUrl" />
        </div>
        <!-- sector -->
        <div
          class="flex flex-row ml-2 mr-2 p-1 rounded-xl border-black border-2"
        >
          <h2 class="ml-2 text-black font-medium">Consommation de base</h2>
          <div class="flex-grow" />
          <div>
            <img
              class="h-4 w-4 m-1 rounded-full ring-1 ring-black bg-gradient-to-br from-gray-300 to-white"
              :src="dividendUrl"
            />
          </div>
        </div>
        <!-- skills -->
        <div
          class="w-auto h-64 bg-white ml-5 mr-5 border-black border-l-2 border-r-2 border-b-2 bg-white bg-opacity-50 p-2"
        >
          <p class="flex flex-row text-gray-800 font-medium">
            Dividende diamant
          </p>
          <p class="text-gray-500 leading-4">
            La société verse des dividendes depuis plus de 20 ans en
            augmentation moyenne de 3%.
          </p>
          <p class="mt-2 flex flex-row text-gray-800 font-medium">
            Leadeur européen
          </p>
          <p class="text-gray-500 leading-4">
            La société est leadeur de son marché: "consommation de base".
          </p>
          <p class="text-gray-800 font-medium mt-2">Bénéfice or</p>
          <p class="text-gray-500 leading-4">
            La société réalise des bénéfices en augmentation depuis plus de 20 ans.
          </p>
          <br />
          <p class="text-gray-800 font-medium mt-2">Cac40 - 100ans</p>
        </div>
      </div>
      <!-- market cap -->
      <div class="flex flex-row absolute bottom-10 right-8">
        <h2
          class="px-2 py-0.5 text-black font-bold rounded-lg border-black border-2 bg-gradient-to-br from-gray-300 to-white"
        >
          192 Milliards €
        </h2>
      </div>
    </div>
    <!-- END CARD -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      iconUrl:
        "https://png.pngtree.com/background/20210716/original/pngtree-gold-line-gold-wavy-gold-curve-picture-image_1345883.jpg",
      imageUrl: "https://logo.clearbit.com/loreal.com",
      dividendUrl: "https://static.thenounproject.com/png/3317238-200.png",
      podiumUrl: "https://thumb9.shutterstock.com/image-photo/stock-vector-champion-line-icon-winner-and-achievement-podium-symbol-logo-outline-design-editable-stroke-250nw-1743720491.jpg",

    };
  },
};
</script>
