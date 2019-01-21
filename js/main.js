(() => {
      // this is a self invoking anonymous function
  console.log('fired')

    // these are the elements that you want to reference on the page (the icons in this case)
  var badge = document.querySelector("img");

  var otherBadges = document.querySelectorAll('.pngBadge')
    // functions are the same in js as in python: what do you want to have happen on a click?
  function logBadgeId() {
      console.log(this.id);
      debugger;
  }

  badge.addEventListener("click", logBadgeId);

  // debugger;

  otherBadges.forEach(badge => badge.addEventListener("click", logBadgeId))

})();
