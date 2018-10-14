
var allImages = document.getElementsByTagName("img");
console.log(allImages);
//for (var i = 0; i < allImages.length; i++) {
for (var i = 0; i < allImages.length; i++) {
  allImages[i].addEventListener('mouseover', function() {
    var thisImageHeight = this.clientHeight;
    var thisImageWidth = this.clientWidth;
    var imageLink = "http://placekitten.com/" + thisImageWidth + "/" + thisImageHeight;
    this.setAttribute('src', imageLink);
  });
}
