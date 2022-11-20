<template>
  <div class="review-com grid grid-rows-3xl bg-slate-100 rounded mb-2 mt-2 p-3">
    <div class="grid grid-cols-3 border-b-2 border-slate-200 p-2">
      <img src="images/avatar-1.png"/>
      <div>
        <h1>{{review.username}}</h1>
        <p>{{review.date}}</p>
      </div>
      <div><img src="images/ebay-icon.png" class="float-right"/></div>
    </div>
    <div class="m-3"><img src="images/rate.png" /></div>
    <div class="text-left">{{review.reviewcontent}}</div>
  </div>
</template>

<script>
export default {
  name: "review-com",
  props: { review: {} },
  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>