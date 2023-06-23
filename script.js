    var imageClasses = ['img1', 'img2', 'img3', 'img4', 'img5'];
    var repeatImageClass = imageClasses[Math.floor(Math.random() * imageClasses.length)];
    imageClasses.sort(function() { return 0.5 - Math.random(); });
    var images = document.querySelectorAll('#image-container img');
    var selectedImages = [];
    var resetButton = document.getElementById('reset');
    var verifyButton = document.getElementById('verify');
    var para = document.getElementById('para');

    for (var i = 0; i < images.length; i++) {
      var imageClass = imageClasses[i];
      images[i].src = 'path_to_image' + (i + 1) + '.jpg';
      images[i].className = imageClass;
      if (imageClass === repeatImageClass) {
        images[i].addEventListener('click', handleRepeatImageClick);
      } else {
        images[i].addEventListener('click', handleImageClick);
      }
    }

    function handleRepeatImageClick() {
      // Do nothing or add any specific behavior for the repeated image
    }

    function handleImageClick() {
      if (selectedImages.length < 2) {
        this.classList.add('selected');
        selectedImages.push(this);
        if (selectedImages.length === 1) {
          resetButton.classList.remove('hidden');
        } else if (selectedImages.length === 2) {
          verifyButton.classList.remove('hidden');
          verifyButton.addEventListener('click', handleVerifyButtonClick);
        }
      }
    }

    function handleVerifyButtonClick() {
      verifyButton.classList.add('hidden');
      var identical = selectedImages[0].className === selectedImages[1].className;
      para.innerHTML = identical ? 'You are a human. Congratulations!' : 'We can\'t verify you as a human. You selected the non-identical tiles.';
      para.classList.remove('hidden');
    }

    resetButton.addEventListener('click', function() {
      selectedImages.forEach(function(image) {
        image.classList.remove('selected');
      });
      selectedImages = [];
      resetButton.classList.add('hidden');
      verifyButton.classList.add('hidden');
      para.classList.add('hidden');
    });