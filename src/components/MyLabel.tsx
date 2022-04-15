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
}

/**
 * Label example
 */
export const MyLabel = ({
  label,
  size = "normal",
  allCaps = false,
  color = "primary",
  fontColor,
}: MyLabelProps) => {
  return (
    <span className={`label ${size} text-${color}`} style={{color:fontColor}}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
