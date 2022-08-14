<template>
  <div>
    <div>
      <h1 class="text-2xl font-bold underline text-white">Detail card</h1>
    </div>
    <!-- CARD -->
    <div class="flex bg-black p-6 rounded-2xl mt-2">
      <div class="flex flex-col w-96 h-140 bg-energy-pattern">
        <!-- header -->
        <div class="flex flex-row m-2 align-middle">
          <div>
            <img
              class="h-5 w-5 ml-1 rounded-full ring-1 ring-black"
              :src="iconUrl"
            />
          </div>
          <h2 class="ml-2 text-black font-semibold">TotalEnergies</h2>
          <div class="flex-grow" />
          <h2 class="right text-black font-bold">56 €</h2>
        </div>
        <!-- image -->
        <div class="w-auto h-48 bg-white ml-5 mr-5 border-black border-2 bg-gradient-to-br from-yellow-200 to-white">
          <img class="h-30 w-30 m-auto mt-12" :src="imageUrl" />
        </div>
        <!-- sector -->
        <div class="ml-3 mt-1 mb-1">
          <h2 class="ml-2 text-black font-medium">Energie : oil and gaz</h2>
        </div>
        <!-- skills -->
        <div
          class="w-auto h-64 bg-white ml-5 mr-5 border-black border-2 bg-gradient-to-br from-yellow-200 to-white p-2"
        >
          <p class="text-gray-800 font-medium">Dividende diamant</p>
          <p class="text-gray-500 leading-4">
            La société verse des dividendes depuis plus de 20 ans en
            augmentation moyenne de 3%.
          </p>
          <p class="text-gray-800 font-medium mt-2">Leadeur européen</p>
          <p class="text-gray-500 leading-4">
            La société est leadeur de son marché: "énergie".
          </p>
          <p class="text-gray-800 font-medium mt-2">Dette faible</p>
          <p class="text-gray-500 leading-4">
            La société réalise des bénéfices supérieur à ses dettes (ratio dette / bénéfice inférieur à 1).
          </p>
          <p class="text-gray-800 font-medium mt-2">Cac40 - 100ans - bénéfice fer</p>
        </div>
        <!-- market cap -->
        <div class="w-full">
          <h2 class="mr-2 mt-1 text-black font-bold text-right">110 000 M €</h2>
        </div>
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
        "https://previews.123rf.com/images/kgtoh/kgtoh0812/kgtoh081200651/3981176-abstract-wallpaper-illustration-of-wavy-flowing-energy.jpg",
      imageUrl: "https://logo.clearbit.com/totalenergies.com",
    };
  },
};
</script>
