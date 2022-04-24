var imageId = -1; //used to keep track of the current image to display 
var numImages=document.getElementsByClassName("image").length; //number of images being displayed

const expandImage = (event) => {

    //clear other effects before opening the selected image
    mouseOutEffect();

    removeEffects();


    //get the id of the current image 
    imageId = parseInt(event.target.getAttribute("id"));

    showImage(imageId);

}

const addEffects = () => {
    document.querySelectorAll('.image').forEach(item => {
        item.addEventListener('click', expandImage);

        item.addEventListener('mouseover', mouseOverEffect);

        item.addEventListener('mouseout', mouseOutEffect);

    });

};

const removeEffects = () => {
    document.querySelectorAll('.image').forEach(item => {
        item.removeEventListener('click', expandImage);

        item.removeEventListener('mouseover', mouseOverEffect);

        item.removeEventListener('mouseout', mouseOutEffect);

    });
};


//given an image id, display the image 
const showImage = (n) => {

    var images = document.getElementsByClassName("image");
   
    var expandedImage = document.getElementById("enlarged-image");
    expandedImage.src = images[n].getAttribute("src");
    

    //jquery implementation
    $(".image-display").addClass("open"); 
    //add class to the image-display which makes it visible

    if ($(".image-display").hasClass("open")) {

        $(".image-gallery").addClass("blur"); //add bluring effect to the main section
    }

    //stops scrolling

    document.body.style.height = "100vh";
    document.body.style.overflowY = "hidden";


}

const collapseImage = () => {

    //restore main section interactivity 
    addEffects();

    $(".image-display").removeClass("open");
    $(".image-gallery").removeClass("blur");

    //restore background 
    document.body.style.height = "";
    document.body.style.overflowY = "";

}


const mouseOverEffect = (event) => {

    var currImage = event.target;
    currImage.style.opacity = "0.75";
    currImage.style.border = "8px solid";
    currImage.style.borderImage = " linear-gradient(45deg, white, white) 1"; 
    //color of the border when the images are hovered over

}

//clear effect
const mouseOutEffect = () => {

    var elements = document.getElementsByClassName('image');

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.style.opacity = 1;
        element.style.border = "none";
    }
}

const nextImage = () => {

  if(imageId+1<numImages){
      imageId += 1;

      showImage(imageId);
  }
  
}

const previousImage = () => {
  if(imageId-1>=0){
      imageId -= 1;
      showImage(imageId);
  }

}
