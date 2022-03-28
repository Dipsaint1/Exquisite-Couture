startImageTransition();
 
function startImageTransition() {
    // Images stores list of all images
    let images = document.getElementsByClassName("test");

    // Set opacity of all images to 1
    for (var i = 0; i < images.length; ++i) {
        images[i].style.opacity = 1;
    }

    let top = 1;    // Top stores the z-index of the top most image

    // Current stores the index of the image currently on top images list
    // The image which appears last will appear on top of all the images
    // Thus, 'current' is set to last index of images list

    let cur = images.length - 1;    // Index reading starts from 0
                                    // Last image

    // changeImage function changes the image every specified time(3 seconds)
    setInterval(changeImage, 3000);
    
    // Function to transition from one image to another
    async function changeImage() {
        var nextImage = (1 + cur) % images.length;  // Store index of next image
        images[cur].style.zIndex = top + 1;
        images[nextImage].style.zIndex = top;
        
        // This function ensures that the program waits till Transition() is completed
        await transition();
        
        // Now the transition function is complete.
        // Thus, we can say that the opacity of the current image is now 0

        // Set the index of current image to top
        images[cur].style.zIndex = top;

        // Set the z-index of next-image to (top + 1)
        images[nextImage].style.zIndex = top + 1;
        
        // Increment top
        top = top + 1;
        
        // Change opacity of current image back to 1 
        // since z-index of current is less than z-index of next image
        /* Changing the opacity back to 1 will not make the image appear again */
        images[cur].style.opacity = 1;
       
        // Set current to nextImage
        cur = nextImage;

    }

    function transition() {
        return new Promise(function(resolve, reject) {
            var del = 0.01;     // del is the value by which opacity decreases every interval

            var id = setInterval(changeOpacity, 10);    // id stores id of setinterval
                                                        // This id will be used later to clear/stop setInterval
                                                        // after we are done changing opacity

            // changeOpacity() decreasing opacity of current image by 'del'                        
            // When opacity reaches 0, stop/clear setInterval and resolve the function
            function changeOpacity() {
                images[cur].style.opacity -= del;
                if (images[cur].style.opacity <= 0) {
                    clearInterval(id);
                    resolve();
                }
            }

        });
    }
}


