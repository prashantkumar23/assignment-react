const themes = {
    DEFAULT: require('../assets/theme/default.json'),
    COMPANYA: require('../assets/theme/companyA.json'),
    COMPANYB: require('../assets/theme/companyB.json'),
    //... upto n companies
};


// This function make the theme object
const parseTheme = (json: any) => {

    /*

    Construct theme object somthing like this

    const theme = {
    name: themes.DEFAULT.name,
    backgroundColor: themes.DEFAULT.backgroundColor,
    color: themes.DEFAULT.color,
    logo: themes.DEFAULT.logo
    };

    */

    const theme: any = {}

    // if logo exits in json file
    if (json.logo) {
        theme["logo"] = require(`../img/${json.name}.png`)
    }

    // add theme prop in run time
    theme["name"] = json.name
    theme["backgroundColor"] = json.backgroundColor
    theme["color"] = json.color

    return theme
}

export const loadTheme = (themeName: string = "DEFAULT") => {
    switch (themeName) {
        case "COMPANYA":
            return parseTheme(themes.COMPANYA);
        case "COMPANYB":
            return parseTheme(themes.COMPANYB);
        default:
            return parseTheme(themes.DEFAULT)
    }
}

