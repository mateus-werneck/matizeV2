import { View } from "@Views/standard/view"

export interface EntityProps {
    props: object
    getViewClass: () => View
    toView: () => ViewProps
}
