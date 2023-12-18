import { HTMLElements } from "../HTMLElements/HTMLElements";
import { translate } from "../translate/translate";
import { API } from "../api/api";

const API_SVC = new API();
let showCustomCategories: boolean = false;

Office.onReady((info) => {
  translate();

  if (info.host === Office.HostType.Outlook) {
    HTMLElements.CATEGORIES_ANY_RADIO.addEventListener('change', () => {
      showCustomCategories = !showCustomCategories;
      const show = showCustomCategories ? 'block' : 'none';
      HTMLElements.CATEGORIES_CONTAINER.style.display = show;
    });
    HTMLElements.CATEGORIES_CUSTOM_RADIO.addEventListener('change', () => {
      showCustomCategories = !showCustomCategories;
      const show = showCustomCategories ? 'block' : 'none';
      HTMLElements.CATEGORIES_CONTAINER.style.display = show;
    });
    HTMLElements.QUERY_BUTTON.addEventListener('click', () => {
      getRandomJoke();
    });
  }
});

function getRandomJoke(): void {
  API_SVC.requestJoke().then(res => {
    if(res.error === true) {
      HTMLElements.ERROR_CONTAINER.style.display = 'block';
      HTMLElements.ERROR_CONTAINER.innerText = res.message;
    } else {
      HTMLElements.ERROR_CONTAINER.style.display = 'none';
      console.log(res);
    }
  }).catch((err) => {
    console.error(err);
    HTMLElements.ERROR_CONTAINER.innerText = err.status.toString();
  });
}