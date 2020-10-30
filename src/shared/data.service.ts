import WidgetLink from "@/models/WidgetLink";
import { data } from "./data.js";

const getLinks = function (cat: string) : WidgetLink[] {
    return data.filter(sets => sets.category == cat).map(x => x.links).flat();
}

export const dataService = {
    getLinks 
}