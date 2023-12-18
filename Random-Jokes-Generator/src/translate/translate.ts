import { UI_STRINGS } from "./UI_Strings";
import { HTMLElements } from "../HTMLElements/HTMLElements";

export function translate(): void {
    const LANGUAGE = Office.context.displayLanguage;
    const STRINGS  = UI_STRINGS.GET_LOCALE_STRINGS(LANGUAGE);

    // Placeholder button
    HTMLElements.PLACEHODLER_INSERT_BUTTTON.innerText          = STRINGS.placeholderBtn;

    // Language select
    HTMLElements.LANGUAGE_SELECTLABEL.innerText                = STRINGS.langSelect;
    HTMLElements.LANGUAGE_ENGLISH.innerText                    = STRINGS.langEN;
    HTMLElements.LANGUAGE_GERMAN.innerText                     = STRINGS.langGE;
    HTMLElements.LANGUAGE_SPANISH.innerText                    = STRINGS.langES;
    HTMLElements.LANGUAGE_FRENCH.innerText                     = STRINGS.langFR;
    HTMLElements.LANGUAGE_PORTUGUESE.innerText                 = STRINGS.langPO;
    HTMLElements.LANGUAGE_CZECH.innerText                      = STRINGS.langCZ;

    // Category select
    HTMLElements.CATEGORIES_LEGEND.innerText                   = STRINGS.selectCategory;
    HTMLElements.CATEGORIES_ANY_LABEL_RADIO.innerText          = STRINGS.selectAny;
    HTMLElements.CATEGORIES_CUSTOM_LABEL_RADIO.innerText       = STRINGS.selectCustom;
    HTMLElements.CATEGORIES_PROG_LABEL_CHECK.innerText         = STRINGS.catProgramming;
    HTMLElements.CATEGORIES_DARK_LABEL_CHECK.innerText         = STRINGS.catDark;
    HTMLElements.CATEGORIES_PUN_LABEL_CHECK.innerText          = STRINGS.catPun;
    HTMLElements.CATEGORIES_SPOOK_LABEL_CHECK.innerText        = STRINGS.catSpooky;
    HTMLElements.CATEGORIES_XMAS_LABEL_CHECK.innerText         = STRINGS.catChristmas;
    HTMLElements.CATEGORIES_MISC_LABEL_CHECK.innerText         = STRINGS.catMisc;

    // Blacklist select
    HTMLElements.BLACKLIST_LEGEND.innerText                    = STRINGS.blSelect;
    HTMLElements.BLACKLIST_RELIGIOUS_LABEL.innerText           = STRINGS.blRel;
    HTMLElements.BLACKLIST_POLITICAL_LABEL.innerText           = STRINGS.blPol;
    HTMLElements.BLACKLIST_RACIST_LABEL.innerText              = STRINGS.blRac;
    HTMLElements.BLACKLIST_SEXIST_LABEL.innerText              = STRINGS.blSex;
    HTMLElements.BLACKLIST_EXPLICIT_LABEL.innerText            = STRINGS.blExp;

    // Text search
    HTMLElements.TEXT_SEARCH_LABEL.innerText                   = STRINGS.tsLabel;
    HTMLElements.TEXT_SEARCH_INPUT.placeholder                 = STRINGS.tsPlaceholder;

    // Query button
    HTMLElements.QUERY_BUTTON.innerText                        = STRINGS.qb;

    // Success container
    HTMLElements.SUCCESS_CONTAINER.innerText                   = STRINGS.success;
}