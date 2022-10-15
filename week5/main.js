import HikesController from "./hikesController.js";

let myHikesController = new HikesController('hikes');

window.addEventListener('load', () => {
  myHikesController.showHikeList();
});
