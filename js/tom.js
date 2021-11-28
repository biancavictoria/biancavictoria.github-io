function imageBigger() {
  
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  // Images
  var img = document.getElementById("MainBackground");
  var img2 = document.getElementById("CharacterIcons");
  var img3 = document.getElementById("CharacterSprites");
  


  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");

  // Add onclick for each picture
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() { 
    modal.style.display = "none";
  }

}

document.addEventListener('DOMContentLoaded', function (event) {
  imageBigger();
});