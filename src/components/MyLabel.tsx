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
}

/**
 * Label example
 */
export const MyLabel = ({ label, size = "normal" }: MyLabelProps) => {
  return <span className={`${size}`}>{label}</span>;
};
