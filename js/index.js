function changeImagesAutomatically() {
    const imageContainer = document.getElementById('imageContainer');
    const images = ['/img/work1.jpg', '/img/work2.jpg', '/img/work3.jpg']; // Add your image paths here

    let index = 0;

    function updateImage() {
      document.getElementById('mainImage').src = images[index];
      index = (index + 1) % images.length;
      setTimeout(updateImage, 3000); // Change image every 3 seconds (adjust as needed)
    }

    updateImage(); // Start the automatic image change
  }

  // Call the function when the page loads
  window.onload = changeImagesAutomatically;


  /* Open the form */
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  /* Close the form */
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  