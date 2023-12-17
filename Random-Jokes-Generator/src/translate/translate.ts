import { UI_STRINGS } from "./UI_Strings";
import { HTMLElements } from "../HTMLElements/HTMLElements";

export function translate(): void {
    const LANGUAGE = Office.context.displayLanguage;
    const STRINGS  = UI_STRINGS.GET_LOCALE_STRINGS(LANGUAGE);

    HTMLElements.CATEGORIES_LEGEND.innerText             = STRINGS.selectCategory;
    HTMLElements.CATEGORIES_ANYLABEL_RADIO.innerText     = STRINGS.selectAny;
    HTMLElements.CATEGORIES_CUSTOMLABEL_RADIO.innerText  = STRINGS.selectCustom;
    HTMLElements.CATEGORIES_PROGLABEL_CHECK.innerText         = STRINGS.catProgramming;
    HTMLElements.CATEGORIES_DARKLABEL_CHECK.innerText         = STRINGS.catDark;
    HTMLElements.CATEGORIES_PUNLABEL_CHECK.innerText          = STRINGS.catPun;
    HTMLElements.CATEGORIES_SPOOKLABEL_CHECK.innerText        = STRINGS.catSpooky;
    HTMLElements.CATEGORIES_XMASLABEL_CHECK.innerText         = STRINGS.catChristmas;
    HTMLElements.CATEGORIES_MISCLABEL_CHECK.innerText         = STRINGS.catMisc;
}