interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function TopRightRenderer({ children }: Props) {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        marginRight: "5px",
        marginTop: "5px",
      }}
    >
      {children}
    </div>
  );
}
