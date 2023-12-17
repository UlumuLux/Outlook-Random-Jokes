import { HTMLElements } from "../HTMLElements/HTMLElements";
import { translate } from "../translate/translate";

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
  }
});
