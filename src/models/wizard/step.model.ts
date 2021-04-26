/**
 * step of wizard
 * @interface
 */
export interface Step {
  icon: String;
  title: String;
  validation: Function;
}
