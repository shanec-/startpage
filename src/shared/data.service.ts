import WidgetLink from "@/models/WidgetLink";

const data =[
    {
        category: "Dev",
        links : [
            {
                href: "https://www.google.com",
                text: "Google.com"
            },
            {
                href: "http://reddit.com",
                text: "Reddit.com"
            }
        ]
    },
    {
        category: "Main",
        links : [
            {
                href: "https://www.google.com",
                text: "Google.com"
            },
            {
                href: "http://reddit.com",
                text: "Reddit.com"
            }
        ]
    },
];

const getLinks = function (cat: string) : WidgetLink[] {
    return data.filter(sets => sets.category == cat).map(x => x.links).flat();
}

export const dataService = {
    getLinks 
}