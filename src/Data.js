export default class Data {
    constructor() {
        this.data = [
            { 
                name: "Annual Summary of Hours Worked, Place of Work by Local Authority",
                lastUpdated: "Updated yesterday at 3:15pm",
                id: "ashe"
            },
            { 
                name: "Population estimates for UK, England and Wales, Scotland and Northern Ireland",
                lastUpdated: "Updated 16 May 2018 at 5:45pm",
                id: "popest"
            },
            { 
                name: "Consumer Prices Index including owner occupiers' housing costs (CPIH)",
                lastUpdated: "Updated 8 May 2018 at 8:44am",
                id: "cpih"
            },
            { 
                name: "International Passenger Survey 4.01, citizenship group by sex by age by country of last or next residence",
                lastUpdated: "Updated 1 May 2018 at 1:45pm",
                id: "ips"
            },
            { 
                name: "Personal crime by accomodation",
                lastUpdated: "Updated 29 April 2018 at 10:45am",
                id: "pca"
            },
        ]
    }

    getDatasetName(id) {
        return this.data.find(dataset => {
            return dataset.id === id
        })
    }

    getDatasetNamesAndLastUpdated() {
        return this.data.map(dataset => {
            return dataset
        })
    }
}