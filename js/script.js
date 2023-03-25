import burger from "./moduls/burger";
import dialog from "./moduls/dialog";
import scrollAnimation from "./moduls/scrollAnimation";
import slider from "./moduls/slider";
import tabs from "./moduls/tabs";
import scroll from "./moduls/scroll";

window.addEventListener('DOMContentLoaded', () => {
	burger();
	scrollAnimation();
	tabs();
	slider();
	dialog();
	scroll()
});