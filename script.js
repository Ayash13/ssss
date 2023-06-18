window.addEventListener('load', function () {
    // Simulating data loading delay
    setTimeout(function () {
      var card = document.querySelector('.card');
      card.classList.remove('skeleton');
    }, 2000);
  });
  