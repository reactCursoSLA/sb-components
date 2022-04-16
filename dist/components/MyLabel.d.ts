import "./mylabel.css";
export interface MyLabelProps {
    /**
     * sent name to label
     */
    label: string;
    /**
     * size
     */
    size?: "normal" | "h1" | "h2" | "h3";
    /**
     * sent to uppercase
     */
    allCaps?: boolean;
    /**
     * sent color
     */
    color?: "primary" | "secondary" | "tertiary";
    /**
     * sent color
     */
    fontColor?: string;
    /**
     * color fo font
     */
    backgroundColor?: string;
}
/**
 * Label example
 */
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
