document.getElementById('apply-watermark').addEventListener('click', () => {
    const coverImageFile = document.getElementById('cover-image').files[0];
    const watermarkImageFile = document.getElementById('watermark-image').files[0];

    if (!coverImageFile || !watermarkImageFile) {
        alert("Please select both cover and watermark images.");
        return;
    }

    const coverImage = new Image();
    const watermarkImage = new Image();
    
    let coverImageLoaded = false;
    let watermarkImageLoaded = false;

    const applyWatermark = () => {
        if (coverImageLoaded && watermarkImageLoaded) {
            const canvas = document.getElementById('watermarked-canvas');
            const context = canvas.getContext('2d');
            canvas.width = coverImage.width;
            canvas.height = coverImage.height;

            context.drawImage(coverImage, 0, 0);
            const coverImageData = context.getImageData(0, 0, canvas.width, canvas.height);

            const watermarkCanvas = document.createElement('canvas');
            const watermarkContext = watermarkCanvas.getContext('2d');
            watermarkCanvas.width = coverImage.width;
            watermarkCanvas.height = coverImage.height;
            watermarkContext.drawImage(watermarkImage, 0, 0, coverImage.width, coverImage.height);
            const watermarkImageData = watermarkContext.getImageData(0, 0, watermarkCanvas.width, watermarkCanvas.height);

            for (let i = 0; i < coverImageData.data.length; i += 4) {
                coverImageData.data[i] = (coverImageData.data[i] & 0xFE) | (watermarkImageData.data[i] & 0x01);
                coverImageData.data[i + 1] = (coverImageData.data[i + 1] & 0xFE) | (watermarkImageData.data[i + 1] & 0x01);
                coverImageData.data[i + 2] = (coverImageData.data[i + 2] & 0xFE) | (watermarkImageData.data[i + 2] & 0x01);
            }

            context.putImageData(coverImageData, 0, 0);

            document.getElementById('download-watermarked').style.display = 'block';
            document.getElementById('download-watermarked').addEventListener('click', () => {
                const link = document.createElement('a');
                link.download = 'watermarked.png';
                link.href = canvas.toDataURL();
                link.click();
            });
        }
    };

    coverImage.onload = () => {
        coverImageLoaded = true;
        applyWatermark();
    };
    watermarkImage.onload = () => {
        watermarkImageLoaded = true;
        applyWatermark();
    };

    coverImage.src = URL.createObjectURL(coverImageFile);
    watermarkImage.src = URL.createObjectURL(watermarkImageFile);
});

document.getElementById('detect-watermark').addEventListener('click', () => {
    const inputImageFile = document.getElementById('input-image').files[0];

    if (!inputImageFile) {
        alert("Please select an image to detect the watermark.");
        return;
    }

    const inputImage = new Image();
    inputImage.src = URL.createObjectURL(inputImageFile);

    inputImage.onload = () => {
        const canvas = document.getElementById('extracted-canvas');
        const context = canvas.getContext('2d');
        canvas.width = inputImage.width;
        canvas.height = inputImage.height;

        context.drawImage(inputImage, 0, 0);
        const inputImageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const extractedData = context.createImageData(canvas.width, canvas.height);

        for (let i = 0; i < inputImageData.data.length; i += 4) {
            extractedData.data[i] = (inputImageData.data[i] & 0x01) * 255;
            extractedData.data[i + 1] = (inputImageData.data[i + 1] & 0x01) * 255;
            extractedData.data[i + 2] = (inputImageData.data[i + 2] & 0x01) * 255;
            extractedData.data[i + 3] = 255;
        }

        context.putImageData(extractedData, 0, 0);
    };
});


function readURL(input) {
    if (input.files && input.files[0]) {
  
      var reader = new FileReader();
  
      reader.onload = function(e) {
        $('.image-upload-wrap').hide();
  
        $('.file-upload-image').attr('src', e.target.result);
        $('.file-upload-content').show();
  
        $('.image-title').html(input.files[0].name);
      };
  
      reader.readAsDataURL(input.files[0]);
  
    } else {
      removeUpload();
    }
  }
  
  function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
  }
  $('.image-upload-wrap').bind('dragover', function () {
          $('.image-upload-wrap').addClass('image-dropping');
      });
      $('.image-upload-wrap').bind('dragleave', function () {
          $('.image-upload-wrap').removeClass('image-dropping');
  });
  




  function readURL1(input) {
    if (input.files && input.files[0]) {
  
      var reader = new FileReader();
  
      reader.onload = function(e) {
        $('.image-upload-wrap1').hide();
  
        $('.file-upload-image1').attr('src', e.target.result);
        $('.file-upload-content1').show();
  
        $('.image-title1').html(input.files[0].name);
      };
  
      reader.readAsDataURL(input.files[0]);
  
    } else {
      removeUpload1();
    }
  }
  
  function removeUpload1() {
    $('.file-upload-input1').replaceWith($('.file-upload-input1').clone());
    $('.file-upload-content1').hide();
    $('.image-upload-wrap1').show();
  }
  $('.image-upload-wrap1').bind('dragover1', function () {
          $('.image-upload-wrap1').addClass('image-dropping1');
      });
      $('.image-upload-wrap1').bind('dragleave1', function () {
          $('.image-upload-wrap1').removeClass('image-dropping1');
  });
  



  
  function readURL2(input) {
    if (input.files && input.files[0]) {
  
      var reader = new FileReader();
  
      reader.onload = function(e) {
        $('.image-upload-wrap2').hide();
  
        $('.file-upload-image2').attr('src', e.target.result);
        $('.file-upload-content2').show();
  
        $('.image-title2').html(input.files[0].name);
      };
  
      reader.readAsDataURL(input.files[0]);
  
    } else {
      removeUpload2();
    }
  }
  
  function removeUpload2() {
    $('.file-upload-input2').replaceWith($('.file-upload-input2').clone());
    $('.file-upload-content2').hide();
    $('.image-upload-wrap2').show();
  }
  $('.image-upload-wrap2').bind('dragover2', function () {
          $('.image-upload-wrap2').addClass('image-dropping2');
      });
      $('.image-upload-wrap2').bind('dragleave2', function () {
          $('.image-upload-wrap2').removeClass('image-dropping2');
  });
  
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.querySelector('.main-header').classList.add('scrolled');
        } else {
            document.querySelector('.main-header').classList.remove('scrolled');
        }
    });
});
  
