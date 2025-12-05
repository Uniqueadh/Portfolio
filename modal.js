// modal.js
document.addEventListener("DOMContentLoaded", () => {
    const thumb = document.getElementById("profileThumb");
    const miniModal = document.getElementById("miniModal");
    const miniModalImg = document.getElementById("miniModalImg");

    if (!thumb || !miniModal || !miniModalImg) {
        console.warn("Modal missing elements");
        return;
    }

    thumb.style.cursor = "pointer";

    thumb.addEventListener("click", () => {
        miniModalImg.src = thumb.src;     // Copy photo
        miniModal.classList.add("show");  // Show modal

        document.body.style.overflow = "hidden"; // Disable scroll
    });

    // Click anywhere except the image to close
    miniModal.addEventListener("click", e => {
        if (e.target === miniModalImg) return; // ignore click on image
        closeModal();
    });

    // Close when pressing ESC
    document.addEventListener("keydown", e => {
        if (e.key === "Escape" && miniModal.classList.contains("show")) {
            closeModal();
        }
    });

    function closeModal() {
        miniModal.classList.remove("show");
        miniModalImg.src = ""; // Clear image
        document.body.style.overflow = ""; // Restore scroll
    }
});
