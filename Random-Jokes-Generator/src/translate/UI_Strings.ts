export const UI_STRINGS = {
    EN: {
        'selectCategory': 'Select category / categories',
        'selectAny': 'Any',
        'selectCustom': 'Custom',
        'catProgramming': 'Programming',
        'catDark': 'Dark',
        'catPun': 'Pun',
        'catSpooky': 'Spooky',
        'catChristmas': 'Christmas',
        'catMisc': 'Misc',
    },
    DE: {
        'selectCategory': 'Wähle Kategorie / Kategorien',
        'selectAny': 'Alle',
        'selectCustom': 'Auswahl',
        'catProgramming': 'Programmierung',
        'catDark': 'Schwarzer Humor',
        'catPun': 'Wortspiel',
        'catSpooky': 'Gespenstisch',
        'catChristmas': 'Weihnachten',
        'catMisc': 'Sonstiges',
    },
    GET_LOCALE_STRINGS: function getLocaleStrings(locale: string) {
        if(locale.startsWith('en')) {
            return this.EN;
        }

        return this.DE;
    }
}