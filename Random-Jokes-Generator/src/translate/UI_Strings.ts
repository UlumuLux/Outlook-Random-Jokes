export const UI_STRINGS = {
    EN: {
        // Placeholder button
        'placeholderBtn': 'Insert Placeholder',

        // Language select
        'langSelect': 'Select joke language',
        'langEN': 'English',
        'langGE': 'German',
        'langES': 'Spanish',
        'langFR': 'French',
        'langPO': 'Portuguese',
        'langCZ': 'Czech',

        // Category select
        'selectCategory': 'Select category / categories',
        'selectAny': 'Any',
        'selectCustom': 'Custom',
        'catProgramming': 'Programming',
        'catDark': 'Dark',
        'catPun': 'Pun',
        'catSpooky': 'Spooky',
        'catChristmas': 'Christmas',
        'catMisc': 'Misc',

        // Blacklist select
        'blSelect': 'Select flags to blacklist (optional)',
        'blRel': 'Religious',
        'blPol': 'Political',
        'blRac': 'Racist',
        'blSex': 'Sexist',
        'blExp': 'Explicit',

        // Text search
        'tsLabel': 'Joke contains this:',
        'tsPlaceholder': 'Text contained in joke (optional)',

        // Query button
        'qb': 'Insert Random Joke'
    },
    DE: {
        // Placeholder button
        'placeholderBtn': 'Platzhalter einfügen',

        // Language select
        'langSelect': 'Witz-Sprache auswählen',
        'langEN': 'Englisch',
        'langGE': 'Deutsch',
        'langES': 'Spanisch',
        'langFR': 'Französisch',
        'langPO': 'Portugiesisch',
        'langCZ': 'Tschechisch',

        // Category select
        'selectCategory': 'Wähle Kategorie / Kategorien',
        'selectAny': 'Alle',
        'selectCustom': 'Auswahl',
        'catProgramming': 'Programmierung',
        'catDark': 'Schwarzer Humor',
        'catPun': 'Wortspiel',
        'catSpooky': 'Gespenstisch',
        'catChristmas': 'Weihnachten',
        'catMisc': 'Sonstiges',

        // Blacklist select
        'blSelect': 'Themen ausschließen (optional)',
        'blRel': 'Religion',
        'blPol': 'Politik',
        'blRac': 'Rassismus',
        'blSex': 'Sexismus',
        'blExp': 'Explizites',

        // Text search
        'tsLabel': 'Witz beinhaltet folgendes:',
        'tsPlaceholder': 'Text in Witz enthalten (optional)',

        // Query button
        'qb': 'Zufälligen Witz einfügen'
    },
    GET_LOCALE_STRINGS: function getLocaleStrings(locale: string) {
        if(locale.startsWith('de')) {
            return this.DE;
        }

        return this.EN;
    }
}