const beforeImg = document.getElementById("before-img");
const afterImg = document.getElementById("after-img");
const counter = document.getElementById("carousel-counter");
const slideTitle = document.getElementById("slide-title");
const slideDesc = document.getElementById("slide-desc");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const slides = [
  { 
    before: "before1.jpg", 
    after: "after1.jpg",
    title: "客訂浮雕花紋藝術玻璃（睡蓮）｜書房隔間",
    desc: "原設計使用透明玻璃，用彩色浮雕替代後空間更顯優雅"
  },
  { 
    before: "before2.jpg", 
    after: "after2.jpg",
    title: "透明浮雕玻璃｜浴室隔間（森林浴）",
    desc: "以森林浮雕圖案替代透明玻璃，兼顧採光與隱私保護。"
  },
  { 
    before: "before3.jpg", 
    after: "after3.jpg",
    title: "客製化局部霧面浮雕｜浴室隔間（衝浪者）",
    desc: "以海浪浮雕圖案替代透明玻璃，空間視覺立刻放大。"
  },
  { 
    before: "before4.jpg", 
    after: "after4.jpg",
    title: "透明浮雕玻璃｜門片設計",
    desc: "保留開放感的同時更提供溫暖的心靈富足感。"
  },
  { 
    before: "before5.jpg", 
    after: "after5.jpg",
    title: "彩色浮雕玻璃｜門片設計",
    desc: "圖案直接加工於玻璃表面，耐久性高不易褪色。"
  },
];

let current = 0;

function showSlide(index) {
  beforeImg.src = slides[index].before;
  afterImg.src = slides[index].after;
  counter.textContent = (index + 1) + " / " + slides.length;
  slideTitle.textContent = slides[index].title;
  slideDesc.textContent = slides[index].desc;
}

prevBtn.addEventListener("click", function() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

nextBtn.addEventListener("click", function() {
  current = (current + 1) % slides.length;
  showSlide(current);
});