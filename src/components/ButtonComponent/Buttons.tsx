import React from "react";

export interface IProps {
  color: string;
  onClick?: (color: string) => void;
}
export const Button =  (props: IProps) => {
  const { color, onClick } = props;
  return (
    <button style={{ color }} onClick={() => onClick && onClick(color)}>
      Color Button
    </button>
  );
};


// import React from "react";
// export interface IButtonProps {
//   children?: React.ReactNode;
//   onClick?: (e: any) => void;
// }
// const styles = {
//   border: "1px solid #eee",
//   borderRadius: 3,
//   backgroundColor: "#FFFFFF",
//   cursor: "pointer",
//   fontSize: 15,
//   padding: "3px 10px",
//   margin: 10,
// };
// const Button: React.FC<IButtonProps> = (props:any) => (
//   <button onClick={props.onClick} style={styles} type="button">
//     {props.children}
//   </button>
// );
// Button.defaultProps = {
//   children: null,
//   onClick: () => {},
// };
// export default Button;
