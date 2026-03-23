const track = document.getElementById("sliderTrack");
const dots = document.querySelectorAll(".dot");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function updateSlider(index) {
  if (!track) return;

  currentIndex = index;
  track.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  const nextIndex = (currentIndex + 1) % slides.length;
  updateSlider(nextIndex);
}

function prevSlide() {
  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider(prevIndex);
}

if (nextBtn) nextBtn.addEventListener("click", nextSlide);
if (prevBtn) prevBtn.addEventListener("click", prevSlide);

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    updateSlider(Number(dot.dataset.index));
  });
});

updateSlider(0);
