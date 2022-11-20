<template>
	<div
		class="flex shrink-0 flex-col justify-between top-0 left-0 border bg-slate-50 pt-2 h-screen bg-side transition-all duration-300"
		:class="openSidebar === true ? 'sm:w-64 w-full' : 'w-0 overflow-hidden'">
		<div class="justify-between flex pl-4 pr-8">
			<div class="text-left">
				<img src="images/avatar-3.png" />
				<p>Paulo Lingard</p>
				<p>email@gmail.com</p>
			</div>
			<span>+</span>
		</div>
		<hr />
		<div class="text-black text-left pl-4 pr-8 cursor-pointer" @click="openCategory=!openCategory">
			Categories
		</div>
		<div class="text-black text-left pl-4 pr-8 cursor-pointer" @click="openFavorite=!openFavorite">
			Favorites
		</div>
		<hr />
		<div class="text-black text-left pl-4 pr-8 cursor-pointer">
			Home
		</div>
		<div class="text-black text-left pl-4 pr-8 cursor-pointer">
			Trending Searches
		</div>
		<div class="text-black text-left pl-4 pr-8 cursor-pointer">
			Product Ranks
		</div>
		<div class="text-black text-left pl-4 pr-8 cursor-pointer">
			About us
		</div>
		<div class="text-black text-left pl-4 pr-8 cursor-pointer">
			Choose language
		</div>
		<button class="text-left text-slate-400 pl-4 pr-8">LogOut</button>
	</div>
	<div v-if="openCategory"
		class="flex shrink-0 flex-col justify-between top-0 left-0 absolute z-20 top-16 left-64 border bg-slate-50 pt-2 h-screen bg-side transition-all duration-300 ml-2"
		:class="openCategory === true ? 'w-64' : 'w-0 overflow-hidden'">
		<div class="text-black text-left pl-4 pr-8">
			Categories
		</div>
		<div class="text-black text-left pl-4 pr-8">
			Favorites
		</div>
		<hr />
		<div class="text-black text-left pl-4 pr-8">
			Home
		</div>
		<div class="text-black text-left pl-4 pr-8">
			Trending Searches
		</div>
		<div class="text-black text-left pl-4 pr-8">
			Product Ranks
		</div>
		<div class="text-black text-left pl-4 pr-8">
			About us
		</div>
		<div class="text-black text-left pl-4 pr-8">
			Choose language
		</div>
		<button class="text-left text-slate-400 pl-4 pr-8">LogOut</button>
	</div>
</template>
  
<script>
export default {
	name: "sidebar-component",
	props: {
		openSidebar: Boolean,
	},
	data: function () {
		return {
			openCategory: false,
			openFavorite: false
		};
	},
	methods: {
	}
};
</script>
  