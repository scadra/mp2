/**
 * step of wizard
 * @interface
 */
export interface Step {
  icon: string;
  title: string;
  validation: () => boolean;
}
