(function(){

  function initializeTab(){
    var mda = document.querySelector('#mda');
    var armas = document.querySelector('#armas');
    var vagones = document.querySelector('#vagones');
    var mdaContent = document.querySelector('#mda-content');
    var armasContent = document.querySelector('#armas-content');
    var vagonesContent = document.querySelector('#vagones-content');

    mda.addEventListener('click', function(e){
      armas.classList.remove('active');
      vagones.classList.remove('active');
      mda.classList.add('active');

      armasContent.classList.add('hidden');
      vagonesContent.classList.add('hidden');
      mdaContent.classList.remove('hidden');
    });

    armas.addEventListener('click', function(e){
      mda.classList.remove('active');
      vagones.classList.remove('active');
      armas.classList.add('active');

      mdaContent.classList.add('hidden');
      vagonesContent.classList.add('hidden');
      armasContent.classList.remove('hidden');
    });

    vagones.addEventListener('click', function(e){
      armas.classList.remove('active');
      mda.classList.remove('active');
      vagones.classList.add('active');

      armasContent.classList.add('hidden');
      mdaContent.classList.add('hidden');
      vagonesContent.classList.remove('hidden');
    });
  }

  initializeTab();


})();
