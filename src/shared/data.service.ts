import WidgetLink from "@/models/WidgetLink";

const data =[
{
    href: "https://www.google.com",
    text: "Google.com"
},
{
    href: "http://reddit.com",
    text: "Reddit.com"
}
];

const getLinks = function () : WidgetLink[] {
    return data;
}

export const dataService = {
    getLinks 
}