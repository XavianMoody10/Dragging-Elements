"use strict";
// Dragging
const dragEl = document.querySelector(".dragel");
const dragBound = dragEl.getBoundingClientRect();
let startX;
let startY;
let newPosX;
let newPosY;

dragEl.addEventListener("mousedown", function () {
  startX = dragBound.x;
  startY = dragBound.y;

  document.addEventListener("mousemove", moveEl);

  function moveEl(e) {
    newPosX = startX + e.x;
    newPosY = startY + e.y;

    dragEl.style.top = `${newPosY - dragBound.height / 2}px`;
    dragEl.style.left = `${newPosX - dragBound.width / 2}px`;
  }

  document.addEventListener("mouseup", function () {
    document.removeEventListener("mousemove", moveEl);
  });
});

// Scrolling
const scrollEl = document.querySelector(".scroller");
const scrollCtn = document.querySelector(".container");
let startPosX;
let newscrollX;

scrollEl.addEventListener("mousedown", function (e) {
  startPosX = e.clientX;

  scrollCtn.addEventListener("mouseover", function (e) {
    e.preventDefault();
    console.log(startPosX);
    console.log(e.clientX);

    newscrollX = startPosX - e.clientX;

    startPosX = e.clientX;

    console.log(newscrollX);

    scrollEl.style.left = scrollEl.offsetLeft - newscrollX + "px";

    console.log(scrollEl.style.left);
  });
});
