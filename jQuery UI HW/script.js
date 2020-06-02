  $(function () {
      var availableTags = [
          "Black Cherry Pie",
          "Bone Jam",
          "Bummer",
          "Camel Swallowed Whole",
          "Celebration",
          "Cosmic Vision",
          "Dreamscape",
          "Diamond Way",
          "Growing",
          "Heavy Krishna",
          "Idiot",
          "Magick Man",
          "Pleasure Centre",
          "Pringle Variations",
          "Radiating Fiber Plane",
          "Sixpack",
          "Solstice Canyon",
          "Wasted On The Dream",
          "Whatever I Want",
      ];
      $("#tags").autocomplete({
          source: availableTags
      });
  });

  $(function () {
      $("#accordion").accordion();
  });