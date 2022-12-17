import { ViewMapper } from "@Views/standard/view";
import { View } from './view';

export interface EntityProps {
    props: object
    getViewClass: () => ViewMapper
    toView: () => View
}
