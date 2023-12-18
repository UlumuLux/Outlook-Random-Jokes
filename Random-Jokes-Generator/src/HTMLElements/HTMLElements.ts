export const HTMLElements = {
    // Placeholder button
    PLACEHOLDER_INSERT_BUTTTON:             document.getElementById('insert-placeholder'),

    // Language select
    LANGUAGE_SELECT:                        document.getElementById('lang-select') as HTMLSelectElement,
    LANGUAGE_SELECTLABEL:                   document.getElementById('lang-select-label'),
    LANGUAGE_GERMAN:                        document.getElementById('deu'),
    LANGUAGE_ENGLISH:                       document.getElementById('eng'),
    LANGUAGE_SPANISH:                       document.getElementById('esp'),
    LANGUAGE_FRENCH:                        document.getElementById('fre'),
    LANGUAGE_PORTUGUESE:                    document.getElementById('por'),
    LANGUAGE_CZECH:                         document.getElementById('cze'),

    // Category select
    CATEGORIES_LEGEND:                      document.getElementById('categories-legend'),
    CATEGORIES_CUSTOM_RADIO:                document.getElementById('custom') as HTMLInputElement,
    CATEGORIES_ANY_RADIO:                   document.getElementById('any') as HTMLInputElement,
    CATEGORIES_ANY_LABEL_RADIO:             document.getElementById('any-label'),
    CATEGORIES_CUSTOM_LABEL_RADIO:          document.getElementById('custom-label'),
    CATEGORIES_CONTAINER:                   document.getElementById('categories-container'),
    CATEGORIES_PROG_CHECK:                  document.getElementById('programming'),
    CATEGORIES_DARK_CHECK:                  document.getElementById('dark'),
    CATEGORIES_PUN_CHECK:                   document.getElementById('pun'),
    CATEGORIES_SPOOK_CHECK:                 document.getElementById('spooky'),
    CATEGORIES_XMAS_CHECK:                  document.getElementById('xmas'),
    CATEGORIES_MISC_CHECK:                  document.getElementById('misc'),
    CATEGORIES_PROG_LABEL_CHECK:            document.getElementById('programming-label'),
    CATEGORIES_DARK_LABEL_CHECK:            document.getElementById('dark-label'),
    CATEGORIES_PUN_LABEL_CHECK:             document.getElementById('pun-label'),
    CATEGORIES_SPOOK_LABEL_CHECK:           document.getElementById('spooky-label'),
    CATEGORIES_XMAS_LABEL_CHECK:            document.getElementById('xmas-label'),
    CATEGORIES_MISC_LABEL_CHECK:            document.getElementById('misc-label'),
    CATEGORIES_ARRAY:                       document.getElementsByClassName('cat'),

    // Blacklist select
    BLACKLIST_LEGEND:                       document.getElementById('blacklist-legend'),
    BLACKLIST_RELIGIOUS_LABEL:              document.getElementById('rel-label'),
    BLACKLIST_POLITICAL_LABEL:              document.getElementById('pol-label'),
    BLACKLIST_RACIST_LABEL:                 document.getElementById('racist-label'),
    BLACKLIST_SEXIST_LABEL:                 document.getElementById('sex-label'),
    BLACKLIST_EXPLICIT_LABEL:               document.getElementById('expl-label'),
    BLACKLIST_NSFW:                         document.getElementById('nsfw'),
    BLACKLIST_RELIGIOUS:                    document.getElementById('rel'),
    BLACKLIST_POLITICAL:                    document.getElementById('pol'),
    BLACKLIST_RACIST:                       document.getElementById('racist'),
    BLACKLIST_SEXIST:                       document.getElementById('sex'),
    BLACKLIST_EXPLICIT:                     document.getElementById('expl'),
    BLACKLIST_FLAGS_ARRAY:                  document.getElementsByClassName('bl'),

    // Text search
    TEXT_SEARCH_LABEL:                      document.getElementById('text-search-label'),
    TEXT_SEARCH_INPUT:                      document.getElementById('text-search') as HTMLInputElement,

    // Query button
    QUERY_BUTTON:                           document.getElementById('query-joke'),

    // Error container
    ERROR_CONTAINER:                        document.getElementById('error-container'),

    // Success container
    SUCCESS_CONTAINER:                      document.getElementById('success-container')
}