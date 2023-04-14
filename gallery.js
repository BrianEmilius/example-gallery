const gallery = (function() {
	const GALLERY = document.querySelector(".gallery__container")
	const FOCUSED_IMAGE = document.createElement("img")
	const THUMBNAILS = document.createElement("div")

	FOCUSED_IMAGE.className = "gallery__focusedImage"
	THUMBNAILS.className = "gallery__thumbnails"
	
	function buildThumbnail(image) {
		const BUTTON = document.createElement("button")
		BUTTON.innerHTML = `<img src="${image}" alt="gallery thumbnail" class="gallery__thumbnail">`
		BUTTON.className = "gallery__button"
		BUTTON.addEventListener("click", changeFocus)
		THUMBNAILS.append(BUTTON)
	}

	function changeFocus(event) {
		FOCUSED_IMAGE.src = event.target.src
	}

	function init(images = []) {
		FOCUSED_IMAGE.src = images[0]

		images.forEach(buildThumbnail)

		GALLERY.append(FOCUSED_IMAGE, THUMBNAILS)
	}

	return {
		init
	}
})()
