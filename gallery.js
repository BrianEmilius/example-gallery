const gallery = (function() {
	const GALLERY = document.querySelector(".gallery__container")
	const FOCUSED_IMAGE = GALLERY.querySelector(".gallery__focusedImage")
	const THUMBNAILS = GALLERY.querySelector(".gallery__thumbnails")
	
	function buildThumbnail(image) {
		const IMG = document.createElement("img")
		IMG.src = image
		IMG.className = "gallery__thumbnail"
		IMG.addEventListener("click", changeFocus)
		THUMBNAILS.append(IMG)
	}

	function changeFocus(event) {
		FOCUSED_IMAGE.src = event.target.src
	}

	function init(images = []) {
		FOCUSED_IMAGE.src = images[0]

		images.forEach(buildThumbnail)
	}

	return {
		init
	}
})()
